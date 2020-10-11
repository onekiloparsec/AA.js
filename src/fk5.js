import { DEG2RAD } from './constants'
import sexagesimal from './sexagesimal'

function getCorrectionInLongitude (Longitude, Latitude, JD) {
  const T = (JD - 2451545) / 36525
  let Ldash = (Longitude - 1.397 * T - 0.00031 * T * T)

  // Convert to radians
  Ldash = Ldash * DEG2RAD
  Latitude = Latitude * DEG2RAD

  const value = -0.09033 + 0.03916 * (Math.cos(Ldash) + Math.sin(Ldash)) * Math.tan(Latitude)
  return sexagesimal.decimal(0, 0, value)
}

function getCorrectionInLatitude (Longitude, JD) {
  const T = (JD - 2451545) / 36525
  let Ldash = Longitude - 1.397 * T - 0.00031 * T * T

  // Convert to radians
  Ldash = Ldash * DEG2RAD

  const value = 0.03916 * (Math.cos(Ldash) - Math.sin(Ldash))
  return sexagesimal.decimal(0, 0, value)
}

export default {
  getCorrectionInLongitude,
  getCorrectionInLatitude
}
