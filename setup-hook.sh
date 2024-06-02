#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
GIT_HOOKS_PATH=$SCRIPT_DIR/.git-hooks
git config core.hooksPath $GIT_HOOKS_PATH || echo 'error'
eho GIT_HOOKS_PATH