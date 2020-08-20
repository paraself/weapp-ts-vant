"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = void 0;
function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
exports.formatTime = formatTime;
function formatNumber(n) {
    var _n = n.toString();
    return _n[1] ? _n : ('0' + _n);
}
