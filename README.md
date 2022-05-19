# merge-bump-release

GitHub action to be applied on merged pull-request, to bump a semver and create a new release.

## Setting up in your workflow:

The best explanation is by example. Please have a look at this project's [`pr.yml` file](./.github/workflows/pr.yml)
to see how this project is dogfooding the action in order to bump-release itself. Your example
may be a bit different, depending on your circumstances.

## Features

Out of the box, this action will always bump your release with a patch, unless configured
to do otherwise. This action can decide what part of the SemVer so increment depending on 
the way it's configured.

**If provided with `bump: <patch | minor | major>`** as input it will use this input to bump and ignore any other configuration.

**If provided with `infer_bump_from_commit: true`** as input it will try to guess the right one depending on the commit message. Right now the logic is a commit header that starts with the words _'patch', 'minor' or 'major'_.

## Options

Please refer to [`action.yml`] in this repository to see all available options.

## Contributing

If you need more features, please submit an issue or a pull request.