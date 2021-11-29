import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { OpensearchDashboardsCommentsAppPluginSetup, OpensearchDashboardsCommentsAppPluginStart } from './types';
import { defineRoutesIndex } from './routes/esindex';
import { defineRoutesComment } from './routes/esComment';
import { OpensearchDashboardsCommentAppPluginConfig } from '../config';
//import { Observable } from 'rxjs';
//import { first } from 'rxjs/operators';
export class OpensearchDashboardsCommentsAppPlugin
  implements Plugin<OpensearchDashboardsCommentsAppPluginSetup, OpensearchDashboardsCommentsAppPluginStart> {
  private readonly logger: Logger;
  //private readonly config$: Observable<OpensearchDashboardsCommentAppPluginConfig>;


  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
    //this.config$ =  initializerContext.config.create();
  }

  //public async setup(core: CoreSetup,deps: Record<'opensearchdashboards_comments_app', unknown> ) {
  public async setup(core: CoreSetup ) {
    this.logger.debug('opensearchdashboards-comments-app: Setup');
    const router = core.http.createRouter();
    //const isEnabled = await this.config$.pipe(first()).toPromise();
    //console.log(this.config$);
    // Register server side APIs
    defineRoutesIndex(router);
    defineRoutesComment(router);
    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('opensearchdashboards-comments-app: Started');
    
    return {};
  }

  public stop() {}
}
