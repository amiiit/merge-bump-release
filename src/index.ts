import {setFailed} from '@actions/core'
import * as github from '@actions/github'

try {
    console.log('github.context.payload.pull_request', JSON.stringify(github.context.payload.pull_request, null, '\t'))
} catch (error: any) {
    setFailed(error.message);
}