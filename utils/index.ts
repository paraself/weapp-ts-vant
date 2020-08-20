
export function formatTime(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n: number): string {
  const _n = n.toString()
  return _n[1] ? _n : ('0' + _n)
}

/** 导出AV实例 */
import * as AV_ from './av-weapp-min'
export const AV = AV_