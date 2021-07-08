# redux-saga + ts 的小案例

## 启动

1. git clone
2. yarn
3. yarn start
4. 访问 http://localhost:3000

## 案例

1. 一个是计数器，实现了同步的增减，和异步的增减
2. 一个是用户登录流程，
   > 使用 saga 去调用用户登录的网络请求，避免污染了 action，这正是 saga 比 thunk 优秀的一点
