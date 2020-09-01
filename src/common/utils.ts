export const getYear = (date: string) => date.slice(0,4)


export const convertMinToHour = (min: number) => {
  const h = Math.floor(min/60)
  const m = Math.floor(min%60)

  let ret = `${h}h`
  if(m){
    ret += ` ${m}m`
  }

  return ret
}

export const convertOutOf10ToPercentage = (outOf10: number) => {
  return (Math.round(outOf10*10)).toString() + '%'
}