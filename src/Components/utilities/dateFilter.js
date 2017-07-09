//"2017-03-18T16:40:00+01:00"
export const dateFilter = (start, end, time) => {
  let currentTime = new Date(time)
  let startTime = new Date(start)
  let endTime = new Date(end)
  return (currentTime < endTime && currentTime >= startTime)
}

