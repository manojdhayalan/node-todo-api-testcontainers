import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter'
import SuiteInfo = jasmine.SuiteInfo

jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(
  new SpecReporter({
    suite: {
        displayNumber: true
    },
    spec: {
      displayStacktrace: StacktraceOption.NONE,
      displaySuccessful: true,
      displayDuration: true,
      displayPending: true,
      displayFailed: true
    },
    summary: {
        displayDuration: true,
        displayStacktrace: StacktraceOption.NONE,
        displayFailed: true,
        displayPending: true,
        displaySuccessful: true
    },
    colors: {
        enabled: true,
        successful: "green",
        failed: "red",
        pending: "amber"
    }
  })
)