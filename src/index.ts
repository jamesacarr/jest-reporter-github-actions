import { startGroup, endGroup } from '@actions/core';
import { issueCommand } from '@actions/core/lib/command';
import { AggregatedResult, BaseReporter, Context, TestResult } from '@jest/reporters';
import { AssertionResult } from '@jest/test-result';

class GitHubActionsReporter extends BaseReporter {
  public onRunComplete(_contexts: Set<Context>, results: AggregatedResult) {
    startGroup('Jest Annotations');

    const failedTests = this.testsWithFailures(results);
    for (const { properties, message } of failedTests) {
      issueCommand('error', properties, message);
    }

    endGroup();
  }

  private testsWithFailures(results: AggregatedResult) {
    const failedSuites: TestResult[] = results.testResults.filter((testResult) => testResult.numFailingTests > 0);

    return failedSuites.flatMap((suite) =>
      suite.testResults
        .filter((result) => result.status === 'failed')
        .map((result) => ({
          message: result.failureMessages[0],
          properties: {
            file: suite.testFilePath,
            ...this.testLocation(result),
          },
        }))
    );
  }

  private testLocation(result: AssertionResult) {
    if (!result.location) {
      return;
    }

    return {
      line: result.location.line.toString(),
      col: result.location.column.toString(),
    };
  }
}

export = GitHubActionsReporter;
