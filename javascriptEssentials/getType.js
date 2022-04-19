// export : 내보내기
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}