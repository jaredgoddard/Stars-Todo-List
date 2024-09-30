// build.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/views/task-list/index.tsx'], // Entry point for React
  bundle: true,                          // Bundle all imports into one file
  outfile: 'dist/webview.js',             // Output file for bundled code
  platform: 'browser',                    // Webview runs in a browser environment
  jsxFactory: 'React.createElement',      // JSX support
  jsxFragment: 'React.Fragment',
  sourcemap: true,                        // Enable source maps for easier debugging
  target: ['chrome58', 'firefox57', 'safari11', 'edge18'], // Modern browsers (WebView)
  external: ['vscode'],                   // Don't bundle the 'vscode' module
}).catch(() => process.exit(1));