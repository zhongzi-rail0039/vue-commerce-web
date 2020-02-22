#### 项目版本

- `2.6` 版本

> 需求拆解

- 购物车实现

- 地址选择实现

> Node环境 -- 升级和降级

- 1：使用n模块来管理Node版本 （前提是已经安装`node`）

- 2：安装NVM, 通过NVM来安装和卸载Node （再未安装`node`进行安装）

- 3： 先卸载, 再安装

> Vue.js 生命周期 （8个方法）钩子函数

```
new Vue() 进行开始初始化，
```

- 1：创建之前 `beforeCreate()`  进行项目初始化阶段

- 2：创建之后 `created()`

- 3：`beforMount()`

- 4：`mounted()`

- 5：`beforeUpdate()`  （数据更新的时候）

- 6：`updated()`

- 7：销毁 `beforeDestroy()`

- 8：`destroyed()`

> 项目基本架构设计

- 安装项目需要的插件

```
  1: vue-router → 路由插件
  2: axios → 请求插件，是一个库，并不是vue中的插件，需要进行原型上绑定
  3: vue-axios → axios集成到Vue.js的小包装器
```

- 创建规范的目录结构

- 添加项目基本配置

- 编写基本的框架代码，公共机制


