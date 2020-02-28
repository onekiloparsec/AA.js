// https://gist.github.com/wteuber/6241786
Math.fmod = function (a, b) {
  return Number((a - (Math.floor(a / b) * b)).toPrecision(8))
}

Math.isNumber = function (v) {
  return !isNaN(parseFloat(v)) && isFinite(v)
}

export const DEGREES_TO_RADIANS = 0.017453292519943295769236907684886
export const RADIANS_TO_DEGREES = 57.295779513082320876798154814105
export const RADIANS_TO_HOURS = 3.8197186342054880584532103209403
export const HOURS_TO_RADIANS = 0.26179938779914943653855361527329
export const HOURS_TO_DEGREES = 15
export const DEGREES_TO_HOURS = 0.06666666666666666666666666666666666

export const SPEED_OF_LIGHT = 299792.458
export const SPEED_OF_LIGHT_MS = 299792458.0
export const SPEED_OF_LIGHT_APPROX_MS = 300000000.0

export const ONE_RAD_IN_DEGREES = 57.29577951308232
export const ONE_RAD_IN_HOURS = 3.8197186342054881					// = 180/pi * 24/360
export const ONE_DEG_IN_RADIANS = 0.017453292519943295					// = pi/180
export const ONE_DEG_IN_HOURS = 0.06666666666666666666666666666		// = 24/360
export const ONE_HOUR_IN_RADIANS = 0.26179938779914941					// = 360/24 * pi/180
export const ONE_ARCSEC_IN_RADIANS = 4.8481368110953598e-06				// = pi/(180*3600)

export const SIDEREAL_OVER_SOLAR_RATE = 1.0027379093	// Sidereal / solar rate.
export const AVERAGE_JULIAN_YEAR = 365.25		// See Observer's handbook (1999 - RAS of Canada).
export const AVERAGE_GREGORIAN_YEAR = 365.2425		//
export const AVERAGE_SIDEREAL_YEAR = 365.256363	// Fixed star to fixed star.
export const AVERAGE_ANOMALISTIC_YEAR = 365.259635	// Perihelion to perihelion.
export const AVERAGE_TROPICAL_YEAR = 365.242190	// Equinox to equinox.
export const AVERAGE_ECLIPSE_YEAR = 346.620075	// Lunar mode to lunar mode.

export const ONE_YEAR_IN_SECONDS = 31556952.0	// AVERAGE_GREGORIAN_YEAR * 86400;
export const ONE_MONTH_IN_SECONDS = 2635200.0	// 30.5 * 86400 || IMPRECISE!!!
export const ONE_WEEK_IN_SECONDS = 604800.0		// 7*86400;
export const ONE_DAY_IN_SECONDS = 86400.0
export const ONE_DAY_IN_MINUTES = 1440.0
export const ONE_DAY_IN_HOURS = 24.0
export const ONE_HOUR_IN_SECONDS = 3600.0
export const ONE_HOUR_IN_MINUTES = 60.0
export const ONE_MINUTE_IN_SECONDS = 60.0
export const HALF_DAY_IN_HOURS = 12.0

export const NOT_A_SCIENTIFIC_NUMBER = -999999999999999.0

export const ECLIPTIC_OBLIQUITY_J2000_0 = 23.4392911	// In degrees, see p.92 of AA.
export const ECLIPTIC_OBLIQUITY_B1950_0 = 23.4457889	// In degrees, see p.92 of AA.

export const JULIAN_YEAR = 365.25		// See p.133 of AA.
export const BESSELIAN_YEAR = 365.2421988	// See p.133 of AA.
export const JULIAN_DAY_B1950_0 = 2433282.4235	// See p.133 of AA.

export const GALACTIC_NORTH_POLE_ALPHA_B1950_0 = 192.25
export const GALACTIC_NORTH_POLE_DELTA_B1950_0 = 27.4

export const EARTH_EQUATORIAL_RADIUS = 6378.14		// See p82 of AA.
export const EARTH_RADIUS_FLATTENING_FACTOR = 1. / 298.257	// See p82 of AA.

export const ONE_UA_IN_KILOMETERS = 149597870.691
/*
 http://neo.jpl.nasa.gov/glossary/au.html
 Definition: An Astronomical Unit is approximately the mean distance between the Earth and the Sun. It is a derived 
 constant and used to indicate distances within the solar system. Its formal definition is the radius of an unperturbed 
 circular orbit a massless body would revolve about the sun in 2*(pi)/k days (i.e., 365.2568983.... days), where k is 
 defined as the Gaussian constant exactly equal to 0.01720209895. Since an AU is based on radius of a circular orbit, 
 one AU is actually slightly less than the average distance between the Earth and the Sun (approximately 150 million 
 km or 93 million miles).
*/

export const ONE_PARSEC_IN_UA = 206264.80624548031 // = 1.0/tan(1./3600.0*M_PI/180.);
export const ONE_PARSEC_IN_LIGHTYEAR = 3.263797724738089 // = pc*ua/SPEED_OF_LIGHT/(ONE_DAY_INSECONDS*365.0)

//http://physics.nist.gov/cuu/index.html
export const PLANCK_CONSTANT = 6.62606957e-34 // Joule * seconds;
export const BOLTZMANN_CONSTANT = 1.3806488e-23 // Joule/Kelvin

// http://nssdc.gsfc.nasa.gov/planetary/factsheet/
// http://solarscience.msfc.nasa.gov

export const ONE_SOLAR_MASS = 1.98855e30 // kg;
export const ONE_MASS_OF_JUPITER = 1.8990e27 // kg;
export const ONE_MASS_OF_NEPTUNE = 1.0243e26 // kg;
export const ONE_MASS_OF_EARTH = 5.9736e24 // kg;

export const ONE_MASS_OF_JUPITER_IN_NEPTUNE_MASS = 18.539490383676657
export const ONE_MASS_OF_JUPITER_IN_EARTH_MASS = 317.8987545198875

// EQUATORIAL RADII. See http://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html
export const ONE_SOLAR_RADIUS_IN_KILOMETERS = 695990.0 // km;
export const ONE_JUPITER_RADIUS_IN_KILOMETERS = 71492.0//
export const ONE_NEPTUNE_RADIUS_IN_KILOMETERS = 24764.0//
export const ONE_EARTH_RADIUS_IN_KILOMETERS = 6378.137//

export const HUBBLE_CONSTANT = 72.0

export const ABSOLUTE_ZERO_TEMPERATURE_CELSIUS = -273.15
