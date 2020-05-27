import request from '../utils/request'

export function getData(params:any) {
  return request({
    method: "get",
    url: `url`,
    params: params
  });
}

export function getPost(params:any) {
  return request({
    method: "post",
    url: `url`,
    params
  });
}