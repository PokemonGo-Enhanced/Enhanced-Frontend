#!/bin/sh

# envs
DOCKER_USER="<feel user in>"
PKG_VERSION=`cat package.json | json version`
PKG_NAME=`cat package.json | json name`
TAG_NAME=v${PKG_VERSION}
IMAGE="${DOCKER_USER}/${PKG_NAME}"

# if anything fails now - crash
set -e

# compile app
echo "compile app"
npm run deploy:prod

# build docker machine
BRANCH_NAME=$(echo $GIT_BRANCH | sed -e "s/origin\///g" | sed -e "s/\//-/g")
docker build -t "${IMAGE}:${BRANCH_NAME}-${TAG_NAME}" .

if [ x"$CI" = x"true" ]; then
  # if we have master -> push to :latest tag as well
  if [ x"$BRANCH_NAME" = x"master" ]; then
    set +e
    git ls-remote --tags 2>/dev/null | grep "${TAG_NAME}" 1>/dev/null
    if [ x"$?" = x"0" ]; then
      echo "Git tag ${TAG_NAME} exists."
      exit 1
    fi

    set -e

    docker tag "${IMAGE}:${BRANCH_NAME}-${TAG_NAME}" "${IMAGE}:latest"
    docker tag "${IMAGE}:${BRANCH_NAME}-${TAG_NAME}" "${IMAGE}:${PKG_VERSION}"

    # push all tags on the image
    docker push "${IMAGE}"

    # push tag to github
    git tag -a $TAG_NAME -m "Release $TAG_NAME"
    git push origin $TAG_NAME
  else
    # push intermidiate build
    docker push "${IMAGE}"
  fi
fi
