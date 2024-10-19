const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

/**
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = {
	name: 'esbuild-problem-matcher',
	setup(build) {
		build.onStart(() => {
			console.log('[watch] build started');
		});
		build.onEnd((result) => {
			result.errors.forEach(({ text, location }) => {
				console.error(`✘ [ERROR] ${text}`);
				console.error(`    ${location.file}:${location.line}:${location.column}:`);
			});
			console.log('[watch] build finished');
		});
	},
};

async function buildExtension() {
	const ctx = await esbuild.context({
		entryPoints: ['src/extension.ts'], // Extension entry point
		bundle: true,
		format: 'cjs',
		minify: production,
		sourcemap: !production,
		sourcesContent: false,
		platform: 'node',
		outfile: 'dist/extension.js',
		external: ['vscode'],
		logLevel: 'silent',
		plugins: [esbuildProblemMatcherPlugin],
	});
	if (watch) {
		await ctx.watch();
	} else {
		await ctx.rebuild();
		await ctx.dispose();
	}
}

async function buildReactApp() {
	const ctx = await esbuild.context({
		entryPoints: ['src/react/views/index.tsx'], // React Webview entry point
		bundle: true,
		format: 'iife', // Immediately Invoked Function Expression for the browser
		minify: production,
		sourcemap: !production,
		platform: 'browser', // Targeting the browser for the Webview
		outfile: 'dist/webview.js', // Webview bundle output
		external: ['vscode'], // 'vscode' is provided by the Webview API
		logLevel: 'silent',
		plugins: [
			esbuildProblemMatcherPlugin,
			cssModulesPlugin(), // Add CSS module support
		],
	});
	if (watch) {
		await ctx.watch();
	} else {
		await ctx.rebuild();
		await ctx.dispose();
	}
}

async function main() {
	// Run both build processes (extension and webview) in parallel
	await Promise.all([buildExtension(), buildReactApp()]);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});