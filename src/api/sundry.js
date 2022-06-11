import request from "../utils/request";

export function getBingDailyImage() {
  return request({
    url: "/sundry/getBingDailyImage",
    method: "get",
  });
}
export function getJonasEmotion(data) {
  return request({
    url: "/user/getUserEmotion",
    method: "get",
  });
}
