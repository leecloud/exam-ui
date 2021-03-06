import request from '@/router/axios'

const baseRouteUrl = '/api/user/v1/route/'

export function routeList() {
  return request({
    url: baseRouteUrl + 'routeList',
    method: 'get'
  })
}

export function fetchList(query) {
  return request({
    url: baseRouteUrl + 'routeList',
    method: 'get',
    params: query
  })
}

export function getObj(id) {
  return request({
    url: baseRouteUrl + id,
    method: 'get'
  })
}

export function addObj(obj) {
  return request({
    url: baseRouteUrl,
    method: 'post',
    data: obj
  })
}

export function putObj(obj) {
  return request({
    url: baseRouteUrl,
    method: 'put',
    data: obj
  })
}

export function delObj(id) {
  return request({
    url: baseRouteUrl + id,
    method: 'delete'
  })
}

export function delAllObj(obj) {
  return request({
    url: baseRouteUrl + 'deleteAll',
    method: 'post',
    data: obj
  })
}

export function refresh() {
  return request({
    url: '/api/route/refresh',
    method: 'get'
  })
}
