module.exports={
    plugins:{
        autoprefixer:{},
        "postcss-px-to-viewport":{
            viewportWidth:375,//视口的宽度,对应的是我们的设计稿的宽度(750 retina:一个点两个像素)
            viewportHeight:667,//视口的高度,对应的是我们设计稿的高度(也可以不设置)
            unitPrecision:5,//指定'px'转换成视窗单位的小数位数(很多时候无法整除)
            viewportUnit:'vw',//指定需要转换成的视窗单位,建议使用vw
            selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
            minPixelValue:1,//小于或等于'1px'不转换成视窗单位
            mediaQuery:false,//允许在媒体查询中转换'px'
            exclude:[/TabBar/]//用正则表达式匹配不需要转换单位的文件
        }
    }
}