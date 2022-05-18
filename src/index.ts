import bump from "./bump";

const core = require('@actions/core')
const github = require('@actions/github');

import commitMessageQuery from 'inline!./src/GetCommitMessageFromRepository.query.graphql'
import lastReleaseQuery from 'inline!./src/GetLastReleaseQuery.query.graphql'

type CommitMessageQueryResponse = {
    repository: {
        pullRequest: {
            mergeCommit: {
                message: string
                messageBody: string
                messageHeadline: string
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

        const latestVersion = latestRelease.repository.latestRelease.tag.name
        const nextVersion = bump((latestVersion || 'v0') as string, 'patch')
        const nextReleaseTag = core.getInput('tag_prefix') + nextVersion

        const releaseResult  = await octokit.request('POST /repos/{owner}/{repo}/releases', {
            repo: repoDetails.repoName,
            owner: repoDetails.repoOwner,
            tag_name: nextReleaseTag,
            target_commitish: 'main',
            name: commitMessage.repository.pullRequest.mergeCommit.messageHeadline,
            body: commitMessage.repository.pullRequest.mergeCommit.messageBody,
            draft: false,
            prerelease: false,
            generate_release_notes: false
        })

        console.log('releaseResult', releaseResult)
    } catch (error: any) {
        core.setFailed(error.message);
    }

}

start()
