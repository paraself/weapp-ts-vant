"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@/utils");
Page({
    data: {
        logs: []
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return utils_1.formatTime(new Date(log));
            })
        });
    }
});
