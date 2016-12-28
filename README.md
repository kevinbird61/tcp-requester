# tcp-requester
A tcp sender program ,which is built by node.js, can use it to send tcp command to the test target server by command-line.

## Components
- `requester`: user can use it to send the tcp data to server which chosen by user.
- `test-server`: if the target has become offline or deprecated , you can use the test-server instead.

## Build and Run
- requester
```shell=bash
> npm run all
```
- test-server
```shell=bash
> npm install net
> node server.js
```
