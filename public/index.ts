
import { PluginInitializerContext } from 'src/core/public/plugins';
import './index.scss';

import { OpensearchDashboardsCommentsAppPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpensearchDashboards Platform `plugin()` initializer.
export function plugin(initializerContext: PluginInitializerContext) {  
    return new OpensearchDashboardsCommentsAppPlugin(initializerContext);
  };

export { OpensearchDashboardsCommentsAppPluginSetup, OpensearchDashboardsCommentsAppPluginStart } from './types';
