import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  //request('/admin/api/rest/getData')
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}
