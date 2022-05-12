var commitMessageQuery = "query GetCommitMessageFromRepository($repoName: String!, $repoOwner: String!, $prNumber: Int!) {\n    repository(name: $repoName, owner: $repoOwner) {\n        pullRequest(number: $prNumber) {\n            mergeCommit {\n                message\n                messageBody\n                messageBodyHTML\n            }\n        }\n    }\n}";

var lastReleaseQuery = "query GetLastReleaseQuery($repoName: String!, $repoOwner: String!) {\n    repository(name: $repoName, owner: $repoOwner) {\n        latestRelease {\n            tag {\n                id\n                name\n                prefix\n            }\n        }\n    }\n}";

const core = require('@actions/core');
const github = require('@actions/github');
const repoDetails = {
    repoName: github.context.repo.repo,
    repoOwner: github.context.repo.owner,
};
const start = async () => {
    try {
        const octokit = github.getOctokit(core.getInput('github_token'));
        const commitMessage = await octokit.graphql(commitMessageQuery, {
            ...repoDetails,
            prNumber: github.context.payload.pull_request?.number
        });
        console.log('commit message from gql', JSON.stringify(commitMessage, null, '\t'));
        const latestRelease = await octokit.graphql(lastReleaseQuery, {
            ...repoDetails
        });
        console.log('LatestReleaseQueryResponse', JSON.stringify(latestRelease, null, '\t'));
    }
    catch (error) {
        core.setFailed(error.message);
    }
};
start();
