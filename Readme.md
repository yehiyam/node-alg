# node-js algorithm example (complete with dockerfile)

### build docker for hkube
```console
npm i
docker build -t yehiyam/node-alg:v0.0.1 .
docker push yehiyam/node-alg:v0.0.1
```
add algorithm as image to hkube

### run locally for debug
```console
npm i
```
1. add debug to hkube ui
2. set env for debug
```json
"env": {
    "WORKER_SOCKET_URL":"ws://playground.hkube.io/hkube/debug/node-alg"
}
```
3. start debugging and enjoy 