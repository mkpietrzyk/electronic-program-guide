export const time = "2017-03-18T16:20:00+01:00"

export const dateFilter = (start, end) => {
  let currentTime = new Date(time)
  let startTime = new Date(start)
  let endTime = new Date(end)
  return (currentTime < endTime && currentTime >= startTime || currentTime.setMinutes(currentTime.getMinutes()+60) < endTime && currentTime >= startTime)
}

