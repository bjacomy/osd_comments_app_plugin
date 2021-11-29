import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface OpensearchDashboardsCommentsAppPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OpensearchDashboardsCommentsAppPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
