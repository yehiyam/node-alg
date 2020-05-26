# First build

FROM node:10
LABEL maintainer="hkube.dev@gmail.com"

ADD . /hkube/algo
WORKDIR /hkube/algo

CMD ["node", "app"]
