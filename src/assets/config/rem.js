/**
 * Created by Administrator on 2016/8/17.
 */
(function (win) {
  const doc = win.document
  const docEl = doc.documentElement
  const objhtml = doc.getElementsByTagName('html')[0]
  const width = docEl.clientWidth > 750 ? 750 : docEl.clientWidth
  const size = 'fontSize'
  const html = function (obj, key, value) {
    let rem = obj.style[key] = value + 'px'
    return rem
  }
  html(objhtml, size, width / 3.75)
  win.onresize = function () {
    html(objhtml, size, width / 3.75)
  }
})(window)
