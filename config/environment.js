"use strict";

module.exports = function(environment) {
  let ENV = {
    moment: {
      includeLocales: true
    },
    modulePrefix: "ember-quickstart",
    environment,
    rootURL: "/",
    locationType: "auto",
    moment: {
      // Options:
      // 'all' - all years, all timezones
      // '2010-2020' - 2010-2020, all timezones
      // 'none' - no data, just timezone API
      includeTimezone: "all"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.jsonUrl =
      "https://gist.githubusercontent.com/" +
      "Rio517/c523873cd4495456a88cac8f1860461b/raw/" +
      "be008bc9ba648456c282228b463415f37b2373aa/checks.json";
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
    ENV.APP.jsonUrl =
      "https://gist.githubusercontent.com/" +
      "Rio517/c523873cd4495456a88cac8f1860461b/raw/" +
      "be008bc9ba648456c282228b463415f37b2373aa/checks.json";
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
    ENV.APP.jsonUrl =
      "https://updown.io/api/checks?api-key=ro-pz3x1zy4ae63yhygraqe";
  }

  return ENV;
};
