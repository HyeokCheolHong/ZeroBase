export function getuserBrithYear(user) {
  const year = new Date().getFullYear()
  // Data().getFullYear : 현재 년도
  return year - user.age
}