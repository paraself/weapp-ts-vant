"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        someNumber: 1,
        someString: 'a'
    },
    onLoad: function () {
    },
    onUnload: function () { },
    onShow: function () { },
    onHide: function () { },
    onReady: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onPageScroll: function (options) {
        console.log(options);
    },
    onResize: function (options) {
        console.log(options);
    },
    onAddToFavorites: function (options) {
        console.log(options);
        var res = {
            title: 'test',
            imageUrl: 'https://test.com/1.jpg',
            query: 'a=1'
        };
        return res;
    },
    onShareAppMessage: function (options) {
        console.log(options);
    },
    onTabItemTap: function (options) {
        console.log(options);
    },
    someFunc: function () { }
});
