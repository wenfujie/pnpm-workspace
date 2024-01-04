- [根目录](#根目录)
  - [安装依赖](#安装依赖)
- [子项目](#子项目)
  - [创建子项目](#创建子项目)
  - [安装依赖](#安装依赖-1)
  - [引用其他子项目](#引用其他子项目)

## 根目录

### 安装依赖

共用的依赖都安装到根目录

```shell
pnpm install typescript -D -W
```

packages 下的项目没有安装 ts，但是倘若在项目中使用到，就会通过依赖递归查找的原则逐级往上寻找，自然会找到 monorepo 中根目录的依赖。

## 子项目

### 创建子项目

package.json 的 name 格式如：@pnpm-workspace/share ，需与根目录的 package.json 对齐

### 安装依赖

方式一

```shell
cd packages/xxx
pnpm i lodash -S
```

方式二

```shell
# 支持指定多个 --filter
pnpm i lodash -r --filter @pnpm-workspace/test1
```

### 引用其他子项目

如 test1 引用 share

```shell
# 安装 share 包
pnpm i -S @pnpm-workspace/share@* --filter @pnpm-workspace/test1
```

然后就可以使用了

```js
import { isString } from '@pnpm-workspace/share';
console.log(isString('123'));
```