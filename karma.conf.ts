module.exports = function(config: any) {
    config.set({
      frameworks: ['jasmine'],
      plugins: [
          require('karma-jasmine'),
          require('karma-jasmine-html-reporter'),
      ],
      client: {
          jasmine: {
              random: false,
              config: "jasmine-integration.json"
          }
      },
      files: ["index.test.ts"],
      reporters: ['kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      singleRun: true
    });
  };