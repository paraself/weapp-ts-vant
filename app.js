"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var index_1 = require("./utils/index");
index_1.AV.init({
    appId: 'xxxxxx',
    appKey: 'xxxxxxx',
    serverURL: 'https://leancloud.cn'
});
exports.app = getApp();
App({
    globalData: {},
    onLaunch: function () {
        var _this = this;
        index_1.AV.Cloud.getServerDate().then(function (res) { return console.log(res); });
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            }
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        }
                    });
                }
            }
        });
    },
    userInfoReadyCallback: function () { }
});
