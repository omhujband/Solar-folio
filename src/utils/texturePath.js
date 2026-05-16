/**
 * Resolves a texture path relative to Vite's BASE_URL.
 *
 * In local dev, BASE_URL is '/' so paths resolve as-is.
 * On GitHub Pages (base: '/Solar-folio/'), BASE_URL becomes '/Solar-folio/'
 * which makes all texture paths resolve correctly without 404s.
 *
 * Usage:
 *   texture: t('/textures/2k_sun.jpg')
 *   // dev  → '/textures/2k_sun.jpg'
 *   // prod → '/Solar-folio/textures/2k_sun.jpg'
 */
export function t(path) {
  // import.meta.env.BASE_URL always ends with '/'
  // path always starts with '/', so strip the leading slash to avoid double slash
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}
