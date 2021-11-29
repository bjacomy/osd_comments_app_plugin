import { i18n } from '@osd/i18n';
import { AppMountParameters, CoreSetup, CoreStart, Plugin, PluginInitializerContext } from '../../../src/core/public';
import {
  OpensearchDashboardsCommentsAppPluginSetup,
  OpensearchDashboardsCommentsAppPluginStart,
  AppPluginStartDependencies,
} from './types';
import { PLUGIN_NAME } from '../common';
interface ClientConfigType {
  enabled: boolean;
}
export class OpensearchDashboardsCommentsAppPlugin
  implements Plugin<OpensearchDashboardsCommentsAppPluginSetup, OpensearchDashboardsCommentsAppPluginStart> {
    constructor(private readonly initializerContext: PluginInitializerContext) {}
  public setup(core: CoreSetup): OpensearchDashboardsCommentsAppPluginSetup {
    const config = this.initializerContext.config.get<ClientConfigType>();
    // Register an application into the side navigation menu
    core.application.register({
      id: 'opensearchdashboardsCommentsApp',
      title: PLUGIN_NAME,
      euiIconType: 'tag',
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in opensearchdashboards.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params);
      },
    });

    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return i18n.translate('opensearchdashboardsCommentsApp.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): OpensearchDashboardsCommentsAppPluginStart {
    return {};
  }

  public stop() {}
}
