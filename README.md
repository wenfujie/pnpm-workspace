- [安装依赖](#安装依赖)
- [子包管理](#子包管理)
  - [创建](#创建)
  - [安装子包所有依赖](#安装子包所有依赖)
  - [项目内引用子包](#项目内引用子包)

## 安装依赖

安装所有依赖（根目录、所有子包）

```shell
pnpm i
```

安装根目录依赖

```shell
# 本地依赖
pnpm install typescript -Dw

# 生产依赖
pnpm install typescript -Sw
```

packages 下的项目没有安装 ts，但是倘若在项目中使用到，就会通过依赖递归查找的原则逐级往上寻找，自然会找到 monorepo 中根目录的依赖。

安装子包依赖（方式一）

```shell
cd packages/xxx
pnpm i lodash -S
```

安装子包依赖（方式二）

```shell
# 支持指定多个 --filter <package name>
pnpm i lodash --filter test1
```

## 子包管理

### 创建

package.json 的 name 格式如：@pnpm-workspace/share ，需与根目录的 package.json 对齐

### 安装子包所有依赖

```shell
pnpm i -F test1
```

### 项目内引用子包

如 test1 引用 share

```shell
# 安装 share 包
pnpm i -S @pnpm-workspace/share@* -F test1
```

使用

```js
import { isString } from '@pnpm-workspace/share'
console.log(isString('123'))
```
