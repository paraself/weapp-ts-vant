// logs.js
import { formatTime } from '../../utils/index'

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return formatTime(new Date(log))
      })
    })
  }
})
