import { JulianDay, PlanetaryConstants } from '../constants'
import { fractionalYear } from '../dates'

// The value of K must be an integer
function getK(jd: JulianDay): number {
  const decimalYear = fractionalYear(jd)
  return Math.floor(0.00607 * (decimalYear - 2047.5))
}

export function getAphelion(jd: JulianDay): JulianDay {
  const kdash = getK(jd) + 0.5
  return 2468895.1 + 60190.33 * kdash + 0.03429 * kdash * kdash
}

export function getPerihelion(jd: JulianDay): JulianDay {
  const k = getK(jd)
  return 2468895.1 + 60190.33 * k + 0.03429 * k * k
}

// JPL values, see https://ssd.jpl.nasa.gov/?planet_phys_par
export const constants: PlanetaryConstants = {
  equatorialRadius: 24764,
  meanRadius: 24622,
  mass: 102.4126,
  bulkDensity: 1.638,
  siderealRotationPeriod: 0.67125,
  siderealOrbitPeriod: 164.79132,
  visualMagnitude: -6.87,
  geometricAlbedo: 0.41,
  equatorialGravity: 11.15,
  escapeVelocity: 23.56
}