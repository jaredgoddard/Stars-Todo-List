declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare function acquireVsCodeApi(): any;