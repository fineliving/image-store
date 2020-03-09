## Retina Cesium的安装配置



### 安装cesium项目依赖项

### Webpack配置

#### 配置webpack.base.conf.js文件

进入build 文件夹，编辑webpack.base.conf.js
定义 Cesium 源码路径const cesiumSource = '…/node_modules/cesium/Source’
在output 里加入sourcePrefix: ’ ’ 让webpack 正确处理多行字符串配置 amd参数,
如下图所示：

```js
const cesiumSource = '../node_modules/cesium/Source'
```

在resolve 中设置 别名 ‘cesium’: path.resolve(__dirname, cesiumSource)
定义别名cesium后，cesium代表了cesiumSource的文件路径。

```js
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'cesium': path.resolve(__dirname, cesiumSource)
    }
  },
```

在module 中加入 unknownContextCritical: false, 让webpack 打印载入特定库时候警告：

```js
unknownContextCritical: false
```

#### 配置 webpack.dev.conf.js 文件

进入build文件夹，编辑 webpack.dev.conf.js文件
定义 Cesium 源码路径（注意这里的 node_modules 与webpack.base.conf.js的不同，前面没有 …/ ），
const cesiumSource = ‘node_modules/cesium/Source’
定义 Cesium Workers 路径：
const cesiumWorkers = ‘…/Build/Cesium/Workers’，

```js
const cesiumSource = 'node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'
```

在plugin中加入下面插件,拷贝静态资源

```js
// copy custom static assets
new CopyWebpackPlugin([{
  from: path.resolve(__dirname, '../static'),
  to: config.dev.assetsSubDirectory,
  ignore: ['.*']
}]),
  new CopyWebpackPlugin([{
    from: path.join(cesiumSource, cesiumWorkers),
    to: 'Workers'
  }]),
  new CopyWebpackPlugin([{
    from: path.join(cesiumSource, 'Assets'),
    to: 'Assets'
  }]),
  new CopyWebpackPlugin([{
    from: path.join(cesiumSource, 'Widgets'),
    to: 'Widgets'
  }]),
  new CopyWebpackPlugin([{
    from: path.join(cesiumSource, 'ThirdParty/Workers'),
    to: 'ThirdParty/Workers'
  }]),
  new webpack.DefinePlugin({
  CESIUM_BASE_URL: JSON.stringify('')
})
```

#### 配置 webpack.prod.conf.js 文件

进入 build 文件夹，编辑webpack.prod.conf.js文件
定义 Cesium 源码路径（注意这里的 node_modules 与webpack.base.conf.js的不同，前面没有…/）
const cesiumSource = 'node_modules/cesium/Source’
定义 Cesium Workers 路径
const cesiumWorkers = '…/Build/Cesium/Workers’

```js
const cesiumSource = 'node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'
```

在plugins 中加入下面插件,拷贝静态资源注意这里的CESIUM_BASE_URL: JSON.stringify(’./’)与dev 配置的不同，这是cesium 加载静态资源的路径，配置为相对路径。

```js
// copy custom static assets
new CopyWebpackPlugin([{
  from: path.resolve(__dirname, '../static'),
  to: config.build.assetsSubDirectory,
  ignore: ['.*']
}]),
  new CopyWebpackPlugin([{
    from: path.join(cesiumSource, cesiumWorkers),
    to: 'Workers'
  }]),
  new CopyWebpackPlugin([{
    from: path.join(cesiumSource, 'Assets'),
    to: 'Assets'
  }]),
  new CopyWebpackPlugin([{
    from: path.join(cesiumSource, 'Widgets'),
    to: 'Widgets'
  }]),
  new CopyWebpackPlugin([{
    from: path.join(cesiumSource, 'ThirdParty/Workers'),
    to: 'ThirdParty/Workers'
  }]),
  new webpack.DefinePlugin({
  CESIUM_BASE_URL: JSON.stringify('./')
})
```

#### 配置config/index.js文件

进入config 文件夹，配置index.js文件
这里有 dev 、build 两个 配置项
配置 build 下的assetsPublicPath 为：’’，如下所示：

```js
assetsPublicPath: '',
```

注意此处是retina项目中一个非必须的改动，在项目中不要修改，因为这里面的配置是用来配置整个项目部署的配置，为了不影响其他功能不做修改。

到此，webpack的相关设置完毕，现在我们可以创建vue组件进行cesium的开发工作了。


### cesium使用

#### 引入资源

```js
import * as Cesium from 'cesium/Cesium'
import '../../../../node_modules/cesium/Build/Cesium/Widgets/widgets.css'
```

注意：此处要个Cesium重命名，否则会识别不到Cesium，找不到该类下的资源。

#### 使用资源

在引入的组件中可以使用Cesium类库去完成三维地图的功能。

