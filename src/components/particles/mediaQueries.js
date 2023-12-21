export const breakpoints = {
  xs: 767,
  sm: 768,
  md: 1024,
  lg: 1360,
  xl: 1920,
}

export const size = {
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
  xl: `${breakpoints.xl}px`,
}

export const deviceSizes = {
  xs: `(max-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
}

/* Styles for IE10+ */
export const ie10And11 = {
  all: `all and (-ms-high-contrast: none), (-ms-high-contrast: active)`,
  xs: `all and ${deviceSizes.xs} and (-ms-high-contrast: none), (-ms-high-contrast: active)`,
  sm: `all and ${deviceSizes.sm} and (-ms-high-contrast: none), (-ms-high-contrast: active)`,
  md: `all and ${deviceSizes.md} and (-ms-high-contrast: none), (-ms-high-contrast: active)`,
  lg: `all and ${deviceSizes.lg} and (-ms-high-contrast: none), (-ms-high-contrast: active)`,
  xl: `all and ${deviceSizes.xl} and (-ms-high-contrast: none), (-ms-high-contrast: active)`,
}
