import * as jupiter from '../src/jupiter'

// See AA p.291, Example 42.a, see also SwiftAA
test('check physical details', () => {
  const jd = 2448972.50068

  const earthDec = jupiter.getPlanetocentricDeclinationOfTheEarth(jd)
  expect(earthDec).toBeCloseTo(-2.48)// deg

  const sunDec = jupiter.getPlanetocentricDeclinationOfTheSun(jd)
  expect(sunDec).toBeCloseTo(-2.20)// deg

  // const posAngle = mars.positionAngleOfNorthernRotationPole(jd)
  // expect(posAngle).toBeCloseTo(347.64)// deg
  //
  // const longCentralMeridian = mars.aerographicLongitudeOfCentralMeridian(jd)
  // expect(longCentralMeridian).toBeCloseTo(111.55)// deg
  //
  // const angDefectIllum = mars.angularAmountOfGreatestDefectOfIllumination(jd)
  // expect(angDefectIllum).toBeCloseTo(1.06) // arcsec
  //
  // const posDefectIllum = mars.positionAngleOfGreatestDefectOfIllumination(jd)
  // expect(posDefectIllum).toBeCloseTo(279.91) // deg

  // const apparentDiameter = jupiter.apparentDiameter(jd)
  // expect(apparentDiameter).toBeCloseTo(10.75) // arcsec
})

