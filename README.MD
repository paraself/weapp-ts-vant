# TypeScript + Vant UI 模板示例项目

看到不少朋友都不知道如何在小程序中同时配置ts和vant ui, 于是就写了个这个项目帮大家快速开始搭建项目。

使用步骤：
1. 安装依赖`npm i`
2. 在开发工具里点击`构建npm`
3. 执行命令`npm run dts` 以便将vant ui的定义文件拷贝到miniprogram_npm中
4. 在小程序开发工具里打开本项目，并配置自定义预编译命令为`npm run build`
5. 也可以`npm run dev`进入开发模式，可以实时监控编译错误和lint错误

其他：
1. 加入了页面的boilerplate文件，需要创建页面的ts文件的时候，可以直接复制一份这个文件
2. 或者使用全局的code snippet功能，触发词为pp，即可在页面内填充好空页面的内容
3. 加入了eslint，基于standard规则进行了简单的修改，同时配置了git hook，会在commit之前进行一次带有自动修复的lint。如果你不喜欢lint，可以将`package.json`里的`husky`键删掉。

注意：有的时候，小程序开发工具会有bug，打开项目之后，依旧提示无法编译。这时，在开发工具里，点击关闭项目，然后重新打开项目应该就好了。