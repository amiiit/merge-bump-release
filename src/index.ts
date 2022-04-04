import { setFailed } from '@actions/core'
import github from '@actions/github'

try {
    const pr = github.context.payload.pull_request;
    console.log(JSON.stringify(pr, null, '\t'))
} catch (error: any) {
    setFailed(error.message);
}