#!/bin/bash

git checkout master
yarn install

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
GIT_HOOKS_PATH=$SCRIPT_DIR/.git-hooks
git config core.hooksPath $GIT_HOOKS_PATH || echo 'ошибка установки пути для git hook'
eho "путь для git hook теперь ${GIT_HOOKS_PATH}"