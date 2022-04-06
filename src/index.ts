import {setFailed} from '@actions/core'
import github from '@actions/github'

try {
    // const pr = github.context.payload.pull_request;
    console.log(JSON.stringify(github, null, '\t'))
} catch (error: any) {
    setFailed(error.message);
}

// example for merged pr
const mergedPr = {
    "_links": {
        "comments": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/issues/8/comments"
        },
        "commits": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/8/commits"
        },
        "html": {
            "href": "https://github.com/amiiit/merge-bump-release/pull/8"
        },
        "issue": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/issues/8"
        },
        "review_comment": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/comments{/number}"
        },
        "review_comments": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/8/comments"
        },
        "self": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/8"
        },
        "statuses": {
            "href": "https://api.github.com/repos/amiiit/merge-bump-release/statuses/bcc8009994e74f29452fcf95154e7456f6229ecf"
        }
    },
    "active_lock_reason": null,
    "additions": 28,
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
            "assignees_url": "https://api.github.com/repos/amiiit/merge-bump-release/assignees{/user}",
            "blobs_url": "https://api.github.com/repos/amiiit/merge-bump-release/git/blobs{/sha}",
            "branches_url": "https://api.github.com/repos/amiiit/merge-bump-release/branches{/branch}",
            "clone_url": "https://github.com/amiiit/merge-bump-release.git",
            "url": "https://api.github.com/users/amiiit"
        }
    },
    "html_url": "https://github.com/amiiit/merge-bump-release/pull/8",
    "id": 899886588,
    "issue_url": "https://api.github.com/repos/amiiit/merge-bump-release/issues/8",
    "labels": [],
    "locked": false,
    "maintainer_can_modify": false,
    "merge_commit_sha": "8e378cb43000999cfb1eed2a5efe9a934e0dda9e",
    "mergeable": null,
    "mergeable_state": "unknown",
    "merged": true,
    "merged_at": "2022-04-05T08:13:23Z",
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
    "node_id": "PR_kwDOHGOmKM41oy38",
    "number": 8,
    "patch_url": "https://github.com/amiiit/merge-bump-release/pull/8.patch",
    "rebaseable": null,
    "requested_reviewers": [],
    "requested_teams": [],
    "review_comment_url": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/comments{/number}",
    "review_comments": 0,
    "review_comments_url": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/8/comments",
    "state": "closed",
    "statuses_url": "https://api.github.com/repos/amiiit/merge-bump-release/statuses/bcc8009994e74f29452fcf95154e7456f6229ecf",
    "title": "Feature/1",
    "updated_at": "2022-04-05T08:13:23Z",
    "url": "https://api.github.com/repos/amiiit/merge-bump-release/pulls/8",
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