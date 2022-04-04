import * as core  from '@actions/core'
import * as github from '@actions/github'

try {
    const pr = github.context.payload.pull_request;
    console.log(JSON.stringify(pr, null, '\t'))
} catch (error: any) {
    core.setFailed(error.message);
}