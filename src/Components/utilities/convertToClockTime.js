export const convertToClockTime = (date) => {
  let time = new Date(date)
  const hours = time.getHours().toString()
  const minutes = time.getMinutes().toString()

  return minutes === '0' ? (hours + ':' + minutes + '0') : (hours + ':' + minutes)

}