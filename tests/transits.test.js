import * as transits from '../src/transits'
import * as julianday from '../src/julianday'
import { DEG2H } from '../src/constants'

describe('transits of exoplanets', () => {
  it('get transit for H = 0', () => {
    // Roughly: La Silla (Chile)
    // const siteCoordinates = { latitude: -30, longitude: -70 }
    // // Corot 10 b
    // const targetCoordinates = {
    //   'system': 'ICRS',
    //   'right_ascension': 291.0625,
    //   'right_ascension_units': 'degrees',
    //   'declination': 0.7461111,
    //   'declination_units': 'degrees',
    //   'epoch': 2451545.0
    // }
    // const tzero_primary_transit = 2454273.3436

    const alt = transits.transitAltitude(291.0625 * DEG2H, 0.7461111, -70, -30)
    expect(alt).toBeCloseTo(59.2538889, 5)
  })

  it('get transit for a given transit time', () => {
    // Roughly: La Silla (Chile)
    // const siteCoordinates = { latitude: -30, longitude: -70 }
    // // Corot 10 b
    // const targetCoordinates = {
    //   'system': 'ICRS',
    //   'right_ascension': 291.0625,
    //   'right_ascension_units': 'degrees',
    //   'declination': 0.7461111,
    //   'declination_units': 'degrees',
    //   'epoch': 2451545.0
    // }
    const tzeroPrimaryTransit = 2454273.3436
    const alt = transits.transitAltitude(291.0625 * DEG2H, 0.7461111, -70, -30, tzeroPrimaryTransit)
    expect(alt).toBeCloseTo(-47.615535, 5)
  })
})


test('circumpolar transit', () => {
  // const siteCoordinates = { latitude: -70, longitude: 0 }
  // // Fake very low target
  // const targetCoordinates = {
  //   'system': 'ICRS',
  //   'right_ascension': 0,
  //   'right_ascension_units': 'degrees',
  //   'declination': -89.23,
  //   'declination_units': 'degrees',
  //   'epoch': 2451545.0
  // }

  const results = transits.riseSetTransitJulianDays(julianday.getJulianDay(), 0, -89.23, 0, -70)
  expect(results.isCircumpolar).toBeTruthy()
  expect(results.isTransitAboveHorizon).toBeTruthy()
  expect(results.isTransitAboveAltitude).toBeTruthy()
  expect(results.utcRise).toBeUndefined()
  expect(results.utcSet).toBeUndefined()
})


// See AA p 103
test('approximate Venus on 1988 March 20 at Boston', () => {
  // const siteCoordinates = { latitude: 42.3333, longitude: -71.0833 }
  // const targetCoordinates = {
  //   'system': 'ICRS',
  //   'right_ascension': 41.73129,
  //   'right_ascension_units': 'degrees',
  //   'declination': 18.44092,
  //   'declination_units': 'degrees',
  //   'epoch': 2451545.0
  // }

  const date = new Date(Date.UTC(1988, 2, 20))
  const results = transits.riseSetTransitJulianDays(julianday.getJulianDay(date), 41.73129 * DEG2H, 18.44092, -71.0833, 42.3333)

  expect(results.isCircumpolar).toBeFalsy()
  expect(results.isTransitAboveHorizon).toBeTruthy()
  expect(results.isTransitAboveAltitude).toBeTruthy()
  expect(results.utcRise).toBeCloseTo(12.43608, 0.000001)
  expect(results.utcTransit).toBeCloseTo(19.6716, 0.000001)
  expect(results.utcSet).toBeCloseTo(2.90712, 0.000001)
  expect(results.julianDayRise < results.julianDayTransit).toBeTruthy()
  expect(results.julianDayTransit < results.julianDaySet).toBeTruthy()
})
