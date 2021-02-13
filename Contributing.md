# Git Workflow

This project is a monorepo that uses lerna to link dependencies.

https://github.com/lerna/lerna

This mono repo should contain the commits from all of the packages.

Each package has it's own repo.

## Packages

Each package is in the packages directory.

Code changes that touch multiple modules should be done on the multicore repo.
This way one branch can update multiple modules.

Lengthy developments on a single package should be done on that package's repo.
Once the package is at a good point, it should be merged into the monorepo

## Updating Packages From Their Own Repo

The monorepo packages can be updated via git subtrees, then submitted to the multicore repo as a MR

Example:

```sh
git co -b feature/multicore-node-update
git subtree pull --prefix=packages/multicore-node git@github.com:bitpay/multicore-node.git branchToPull
git push -u origin feature/multicore-node-update
# Create MR from origin:feature/multicore-node-update to upstream:multicore
```

## Updating Repos from Bitcore Package

Changes to the mono repo can be pushed to the package repo.

```sh
git subtree push --prefix=packages/multicore-node git@github.com:micahriggan/multicore-node.git branchToPush
```

## Adding New Packages from Existing Repos

Packages can be added via Lerna or via git subtrees.

```sh
lerna import ~/somedir/path-to-multicore-repo --flatten
# OR
git subtree add --prefix=packages/multicore-repo-to-add git@github.com:bitpay/multicore-repo-to-add.git branchToAdd
```

This will merge all of the commits into the multicore history

## Dev Dependencies

Dev dependencies that are used on multiple packages can be hoisted to the top-level

Linters, formatters, and other standards can be defined top-level for the monorepo

This allows reuse of eslint/tslint/prettier standards for all projects.
