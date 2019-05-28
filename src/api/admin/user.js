import request from '@/router/axios'

const baseUserUrl = '/api/user/v1/user/'

export function fetchList(query) {
  return request({
    url: baseUserUrl + 'userList',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: baseUserUrl,
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: baseUserUrl + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: baseUserUrl + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: baseUserUrl,
    method: 'put',
    data: obj
  })
}

export function updateObjInfo(obj) {
  return request({
    url: baseUserUrl + 'updateInfo',
    method: 'put',
    data: obj
  })
}

export function delAllObj(obj) {
  return request({
    url: baseUserUrl + 'deleteAll',
    method: 'post',
    data: obj
  })
}

// 导出
export function exportObj(obj) {
  return request({
    url: baseUserUrl + 'export',
    method: 'post',
    responseType: 'arraybuffer',
    headers: { 'filename': 'utf-8' },
    data: obj
  })
}

