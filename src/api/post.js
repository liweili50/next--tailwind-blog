import request from "../utils/request";

export function getPostsList(data) {
  return request({
    url: "/posts/getPostsList",
    method: "get",
    params: data,
  });
}
export function getPostById(id) {
  return request({
    url: "/posts/getPostById",
    method: "get",
    params: { id },
  });
}
export function getArchiveList() {
  return request({
    url: "/posts/getArchiveList",
    method: "get",
  });
}
export function getTagList() {
  return request({
    url: "/posts/getTagsList",
    method: "get",
  });
}
export function getPostsByTag(data) {
  return request({
    url: "/posts/getPostsByTag",
    method: "get",
    params: data,
  });
}
