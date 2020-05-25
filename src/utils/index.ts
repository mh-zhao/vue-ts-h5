import { Toast } from "vant";
//手机号验证
export function verifyPhoneNum(data:string):boolean {
  const reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/g;
  if (!reg.test(data)) {
    Toast({
      message: "手机号格式不正确"
    });
    return false;
  }
  return true;
}
