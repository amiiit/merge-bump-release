import * as core from '@actions/core'
import * as github from '@actions/github'
import gql from 'graphql-tag'

const commitMessageQuery = gql`
    query GetCommitMessageFromRepository($repoName: String!, $repoOwner: String!, $prNumber: Int!) {
        repository(name: $repoName, owner: $repoOwner) {
            pullRequest(number: $prNumber) {
                mergeCommit {
                    message
                    messageBody
                    messageBodyHTML
                }
            }
        }
    }
`
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

const lastReleaseQuery = gql`
    query GetLastReleaseQuery($repoName: String!, $repoOwner: String!) {
        repository(name: $repoName, owner: $repoOwner) {
            latestRelease {
                tag {
                    id
                    name
                    prefix
                }
            }
        }
    }
`
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
