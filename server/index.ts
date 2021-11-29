import { schema, TypeOf } from '@osd/config-schema';
import { PluginConfigDescriptor, PluginInitializerContext } from '../../../src/core/server';
import { OpensearchDashboardsCommentsAppPlugin } from './plugin';
const configSchema = schema.object({
  enabled: schema.boolean({ defaultValue: true })
});


export const config: PluginConfigDescriptor<ConfigType> = {
  exposeToBrowser: {
    enabled: true
  },
  schema: configSchema,
};
export   type ConfigType = TypeOf<typeof configSchema>;
//  This exports static code and TypeScript types,
//  as well as, OpensearchDashboards Platform `plugin()` initializer.

//  This exports static code and TypeScript types,
//  as well as, OpensearchDashboards Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new OpensearchDashboardsCommentsAppPlugin(initializerContext);
}

export { OpensearchDashboardsCommentsAppPluginSetup, OpensearchDashboardsCommentsAppPluginStart } from './types';
