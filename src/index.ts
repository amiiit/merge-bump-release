import * as core from '@actions/core'
import * as github from '@actions/github'


const gqlQuery = `
query {
  repository(name: $repoName, owner: $repoOwner) {
    pullRequest(number: $prNumber) {
      labels {
        nodes {
          name
        }
      }
      mergeCommit {
        message
        messageBody
        messageBodyHTML
      }
    }
  }
}
`
const start = async () => {
    try {
        const octokit = github.getOctokit(core.getInput('github_token'))
        const pr = github.context.payload.pull_request as typeof pr1
        // const fullPRResponse = await octokit.rest.pulls.get({
        //     pull_number: pr.number,
        //     repo: github.context.repo.repo,
        //     owner: github.context.repo.owner,
        // })
        //
        const commitMessage = await octokit.graphql(gqlQuery, {
            repoName: github.context.repo.repo,
            repoOwner: github.context.repo.owner,
            prNumber: github.context.payload.pull_request?.number
        })
        console.log('commit message from gql', commitMessage)
    } catch (error: any) {
        core.setFailed(error.message);
    }
}

start()
const pr1 = {
    "_links": {
        "comments": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/issues/12/comments"
        },
        "commits": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/12/commits"
        },
        "html": {
            "href": "https://github.com/amiiit/merge-bump-release/pull/12"
        },
        "issue": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/issues/12"
        },
        "review_comment": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/comments{/number}"
        },
        "review_comments": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/12/comments"
        },
        "self": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/12"
        },
        "statuses": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/statuses/9ef02f3a4dc874172e1e0554d0c2db3e62279671"
        }
    },
    "active_lock_reason": null,
    "additions": 2,
    "assignee": null,
    "assignees": [],
    "author_association": "OWNER",
    "auto_merge": null,
    "base": {
        "label": "amiiit:main",
        "ref": "main",
        "repo": {
            "allow_auto_merge": false,
            "allow_forking": true,
            "allow_merge_commit": false,
            "allow_rebase_merge": false,
            "allow_squash_merge": true,
            "allow_update_branch": true,
            "archive_url": "https://api.github.com/repos/amiiit/merge-bump-release/{archive_format}{/ref}",
            "archived": false,
            "site_admin": false,
            "starred_url": "https://api.github.com/users/amiiit/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/amiiit/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/amiiit"
        }
    },
    "html_url": "https://github.com/amiiit/merge-bump-release/pull/12",
    "id": 901412588,
    "issue_url": "https://api.github.com/repos/amiiit/merge-bump-release/issues/12",
    "labels": [],
    "locked": false,
    "maintainer_can_modify": false,
    "merge_commit_sha": "054623428b1a0c3acd057920bfb773e31c858a45",
    "mergeable": null,
    "mergeable_state": "unknown",
    "merged": true,
    "merged_at": "2022-04-06T11:52:48Z",
    "merged_by": {
        "avatar_url": "https://avatars.githubusercontent.com/u/2736813?v=4",
        "events_url": "https://api.github.com/users/amiiit/events{/privacy}",
        "followers_url": "https://api.github.com/users/amiiit/followers",
        "following_url": "https://api.github.com/users/amiiit/following{/other_user}",
        "gists_url": "https://api.github.com/users/amiiit/gists{/gist_id}",
        "gravatar_id": "",
        "html_url": "https://github.com/amiiit",
        "id": 2736813,
        "login": "amiiit",
        "node_id": "MDQ6VXNlcjI3MzY4MTM=",
        "organizations_url": "https://api.github.com/users/amiiit/orgs",
        "received_events_url": "https://api.github.com/users/amiiit/received_events",
        "repos_url": "https://api.github.com/users/amiiit/repos",
        "site_admin": false,
        "starred_url": "https://api.github.com/users/amiiit/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/amiiit/subscriptions",
        "type": "User",
        "url": "https://api.github.com/users/amiiit"
    },
    "milestone": null,
    "node_id": "PR_kwDOHGOmKM41unbs",
    "number": 12,
    "patch_url": "https://github.com/amiiit/merge-bump-release/pull/12.patch",
    "rebaseable": null,
    "requested_reviewers": [],
    "requested_teams": [],
    "review_comment_url": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/comments{/number}",
    "review_comments": 0,
    "review_comments_url": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/12/comments",
    "state": "closed",
    "statuses_url": "https://api.github.com/repos/amiiit/merge-bump-release/statuses/9ef02f3a4dc874172e1e0554d0c2db3e62279671",
    "title": "0.1.8",
    "updated_at": "2022-04-06T11:52:49Z",
    "url": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/12",
    "user": {
        "avatar_url": "https://avatars.githubusercontent.com/u/2736813?v=4",
        "events_url": "https://api.github.com/users/amiiit/events{/privacy}",
        "followers_url": "https://api.github.com/users/amiiit/followers",
        "following_url": "https://api.github.com/users/amiiit/following{/other_user}",
        "gists_url": "https://api.github.com/users/amiiit/gists{/gist_id}",
        "gravatar_id": "",
        "html_url": "https://github.com/amiiit",
        "id": 2736813,
        "login": "amiiit",
        "node_id": "MDQ6VXNlcjI3MzY4MTM=",
        "organizations_url": "https://api.github.com/users/amiiit/orgs",
        "received_events_url": "https://api.github.com/users/amiiit/received_events",
        "repos_url": "https://api.github.com/users/amiiit/repos",
        "site_admin": false,
        "starred_url": "https://api.github.com/users/amiiit/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/amiiit/subscriptions",
        "type": "User",
        "url": "https://api.github.com/users/amiiit"
    }
}
