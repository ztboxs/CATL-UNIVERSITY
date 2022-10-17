# 🕷CSUFT SPIDER🕷

```
├─src
|  ├─access.ts
|  ├─app.tsx
|  ├─global.less
|  ├─global.tsx
|  ├─manifest.json
|  ├─service-worker.js
|  ├─typings.d.ts
|  ├─services
|  |   ├─ant-design-pro
|  |   |    ├─api.ts
|  |   |    ├─index.ts
|  |   |    ├─login.ts
|  |   |    └typings.d.ts
|  ├─plugins
|  |   └globleRequest.ts
|  ├─pages
|  |  ├─404.tsx
|  |  ├─Admin.tsx
|  |  ├─Course.tsx
|  |  ├─document.ejs
|  |  ├─Grade.tsx
|  |  ├─Welcome.less
|  |  ├─Welcome.tsx
|  |  ├─user
|  |  |  ├─Login
|  |  |  |  ├─index.less
|  |  |  |  └index.tsx
|  |  ├─Index
|  |  |  ├─data.d.ts
|  |  |  ├─index.tsx
|  |  |  ├─service.ts
|  |  |  ├─style.less
|  |  |  ├─_mock.ts
|  |  |  ├─utils
|  |  |  |  └utils.less
|  |  |  ├─components
|  |  |  |   ├─TagSelect
|  |  |  |   |   ├─index.less
|  |  |  |   |   └index.tsx
|  |  |  |   ├─StandardFormRow
|  |  |  |   |     ├─index.less
|  |  |  |   |     └index.tsx
|  |  |  |   ├─AvatarList
|  |  |  |   |   ├─index.less
|  |  |  |   |   └index.tsx
|  |  ├─Grade
|  |  |  ├─Year
|  |  |  |  ├─index.less
|  |  |  |  └index.tsx
|  |  |  ├─Term
|  |  |  |  ├─index.less
|  |  |  |  └index.tsx
|  |  |  ├─Level
|  |  |  |  ├─index.less
|  |  |  |  └index.tsx
|  |  |  ├─Basic
|  |  |  |  ├─index.less
|  |  |  |  └index.tsx
|  |  |  ├─Analysis
|  |  |  |   ├─index.less
|  |  |  |   └index.tsx
|  |  ├─Exam
|  |  |  ├─index.tsx
|  |  |  ├─components
|  |  |  |   └UpdateForm.tsx
|  |  ├─Course
|  |  |  ├─index.less
|  |  |  └index.tsx
|  |  ├─Admin
|  |  |  ├─UserManage
|  |  |  |   ├─index.less
|  |  |  |   └index.tsx
```

前端由 AntDesign Pro🎁 + Umi3🍚 构建

### 使用方法 🍖

首先克隆仓库

```bash
git clone https://github.com/yilinyo/CsuftSpiderFront
```

然后使用 yarn 或者 npm 下载依赖

```bash
yarn
#或者
npm install
```

如果希望修改接口请在 plugins 目录下 globleRequest.ts 修改请求拦截器的请求端口

```typescript
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  //请求接口
  prefix: process.env.NODE_ENV === 'production' ? 'http://localhost:8082' : undefined,
  // requestType: 'form',
});
```

项目运行

```bash
npm run start
```

### 后端部署 🍗

后端请参考 [CsuftSpider 后端部署](https://github.com/yilinyo/CsuftSpiderBackend)

### 注意 🧀

前端开发不太规范请谅解
