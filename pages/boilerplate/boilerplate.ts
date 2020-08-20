/**
 * 小程序空白的页面，已经把全部的生命周期都罗列出来了，创建新页面的时候，只需要把这个页面复制过去就好了
 */
// @ts-expect-error
import { app } from '@/app'

/** 页面的自定义数据类型 */
interface IPageData {
  someString: string
  someNumber: number
}
/** 页面的自定义方法 */
interface IPageFunctions {
  someFunc: () => void
}

Page<IPageData, IPageFunctions>({
  data: {
    someNumber: 1,
    someString: 'a'
  },
  // #region 小程序页面生命周期
  onLoad() {
  },
  onUnload() {},
  onShow() {},
  onHide() {},
  onReady() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onPageScroll(options: WechatMiniprogram.Page.IPageScrollOption) {
    /** 页面滚动参数 */
    console.log(options)
  },
  onResize(options: WechatMiniprogram.Page.IResizeOption) {
    /** 页面尺寸参数 */
    console.log(options)
  },
  onAddToFavorites(options: WechatMiniprogram.Page.IAddToFavoritesOption) {
    console.log(options)
    const res: WechatMiniprogram.Page.IAddToFavoritesContent = {
      /** 自定义标题，默认值：页面标题或账号名称 */
      title: 'test',
      /** 自定义图片，显示图片长宽比为 1：1，默认值：页面截图 */
      imageUrl: 'https://test.com/1.jpg',
      /** 自定义query字段，默认值：当前页面的query */
      query: 'a=1'
    }
    return res
  },
  onShareAppMessage(options: WechatMiniprogram.Page.IShareAppMessageOption) {
    /** 分享发起来源参数 */
    console.log(options)
  },
  onTabItemTap(options: WechatMiniprogram.Page.ITabItemTapOption) {
    /** tab 点击参数 */
    console.log(options)
  },
  // #endregion
  // #region 自定义方法
  someFunc() {}
  // #endregion
})
