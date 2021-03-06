import { JulianDay, PlanetaryConstants } from '../constants'
import { fractionalYear } from '../dates'

// The value of K must be an integer
function getK(jd: JulianDay): number {
  const decimalYear = fractionalYear(jd)
  return Math.floor(4.15201 * (decimalYear - 2000.12))
}

export function getAphelion(jd: JulianDay): JulianDay {
  const kdash = getK(jd) + 0.5
  return 2451590.257 + 87.96934963 * kdash
}

export function getPerihelion(jd: JulianDay): JulianDay {
  const k = getK(jd)
  return 2451590.257 + 87.96934963 * k
}

// JPL values, see https://ssd.jpl.nasa.gov/?planet_phys_par
export const constants: PlanetaryConstants = {
  equatorialRadius: 2440.53,
  meanRadius: 2439.4,
  mass: 0.330114,
  bulkDensity: 5.4291,
  siderealRotationPeriod: 58.6462,
  siderealOrbitPeriod: 0.2408467,
  visualMagnitude: -0.60,
  geometricAlbedo: 0.106,
  equatorialGravity: 3.70,
  escapeVelocity: 4.25
}