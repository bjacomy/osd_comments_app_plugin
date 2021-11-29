const templatePkg = require('./package.json');
const opensearchdashboardsPkg = require('../opensearchdashboards/package.json');

const debugInfo = {
  opensearchdashboards: {
    version: opensearchdashboardsPkg.version,
    build: opensearchdashboardsPkg.build,
    engines: opensearchdashboardsPkg.engines,
  },
  plugin: {
    name: templatePkg.name,
    version: templatePkg.version,
    opensearchdashboards: templatePkg.opensearchdashboards,
    dependencies: templatePkg.dependencies,
  },
};

console.log(debugInfo);