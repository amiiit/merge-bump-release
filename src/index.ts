const core = require('@actions/core')
const github = require('@actions/github');
// import * as core from '@actions/core'
// import * as github from '@actions/github'

// import { getInput, setFailed } from '@actions/core'


import commitMessageQuery from 'inline!./src/GetCommitMessageFromRepository.query.graphql'
import lastReleaseQuery from 'inline!./src/GetLastReleaseQuery.query.graphql'

type CommitMessageQueryResponse = {
    repository: {
        pullRequest: {
            mergeCommit: {
                message: string
                messageBody: string
                messageBodyHTML: string
            }
        }
    }
}

type LatestReleaseQueryResponse = {
    repository: {
        latestRelease: {
            tag: {
                id: string
                name: string
                prefix: string
            }
        }
    }
}

const repoDetails = {
    repoName: github.context.repo.repo,
    repoOwner: github.context.repo.owner,
}
const start = async () => {
    try {
        const octokit = github.getOctokit(core.getInput('github_token'))
        const commitMessage: CommitMessageQueryResponse = await octokit.graphql(commitMessageQuery, {
            ...repoDetails,
            prNumber: github.context.payload.pull_request?.number
        })
        console.log('commit message from gql', JSON.stringify(commitMessage, null, '\t'))

        const latestRelease: LatestReleaseQueryResponse = await octokit.graphql(lastReleaseQuery, {
            ...repoDetails
        })
        console.log('LatestReleaseQueryResponse', JSON.stringify(latestRelease, null, '\t'))


    } catch (error: any) {
        core.setFailed(error.message);
    }
}

start()
