# opensearch-dashboards-comments-app-plugin

> An application plugin to add and visualize comments to your opensearch-dashboards dashboards

---

## demo

### How to... add new comments

![add new comments](assets/add-new-comments.gif)

### How to... view comments with annotations feature

**Annotations are only available in `Visual Builder` visualization type**

![view comments](assets/view-comments.gif)

## configuration 


Set the number of shards and replicas for new comment's indices
Edit your opensearch-dashboards.yml
```
opensearch-dashboards-comments-app-plugin.newIndexNumberOfShards: 1   # default to 1
opensearch-dashboards-comments-app-plugin.newIndexNumberOfReplicas: 1 # default to 1
```


## development

This plugin is bootstrapped from [template-opensearch-dashboards-plugin](https://github.com/elastic/template-opensearch-dashboards-plugin)

See the [opensearch-dashboards contributing guide](https://github.com/elastic/opensearch-dashboards/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following npm tasks.

  - `npm start`

    Start opensearch-dashboards and have it include this plugin

  - `npm start -- --config opensearch-dashboards.yml`

    You can pass any argument that you would normally send to `bin/opensearch-dashboards` by putting them after `--` when running `npm start`

  - `npm run build`

    Build a distributable archive

  - `npm run test:browser`

    Run the browser tests in a real web browser

  - `npm run test:server`

    Run the server tests using mocha

For more information about any of these commands run `npm run ${task} -- --help`.
