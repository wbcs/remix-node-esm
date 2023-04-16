/** @type {import('@remix-run/dev').AppConfig} */
const remixConfigs = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  serverModuleFormat: "esm",
};

const { ignoredRouteFiles, future, serverModuleFormat } = remixConfigs;

export { ignoredRouteFiles, future, serverModuleFormat };
