"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../utils/index");
Page({
    data: {
        logs: []
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return index_1.formatTime(new Date(log));
            })
        });
    }
});
