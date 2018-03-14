# REACT

构建 React 项目示例。通过 `rules` 配置项，添加 `babel-loader` 以及相关 `presets` 和 `plugins`。

**PS: 从 1.7.0 后开始支持。**

## 修改说明

- 添加 `babel` 和 `react` 相关包，见 `.babelrc` 和 `package.json`
- 添加 `rules`，处理 `jsx` 文件

  ```
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        babelrc: true,
      }
    }]
  }
  ```

- 设置 `cssLoaderOptions` 支持 `CSS Modules`

  ```
  {
    module: true, // css-loader 0.14.5 compatible
    modules: true,
    localIdentName: '[name]-[hash:6]'
  }
  ```

## 开始

```bash
# 安装依赖
npm install # 或者使用 yarn install

# 开发模式
npm start

# 构建
npm run build
```
