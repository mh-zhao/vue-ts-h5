//fastclick
import FastClick from "fastclick";
/**
 * 解决移动端300ms 延迟（此方法修复ISO input无法正常获焦问题）
 * @param {EventTarget|Element} targetElement
 */
/* eslint-disable */
FastClick.prototype.focus = function (targetElement:any) {
  var length;
  	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
  let deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
  	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	let deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
  // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  if (
    deviceIsIOS &&
    targetElement.setSelectionRange &&
    targetElement.type.indexOf("date") !== 0 &&
    targetElement.type !== "time" &&
    targetElement.type !== "month" &&
    targetElement.type !== "email"
  ) {
    length = targetElement.value.length;
    targetElement.focus(); // 加入这一句话
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};
FastClick.attach(document.body);