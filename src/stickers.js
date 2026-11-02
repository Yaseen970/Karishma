// Small SVG cut-outs that pop up under the cursor. Drawn with currentColor.
const S = {
  moon: '<circle cx="24" cy="24" r="20" fill="currentColor"/><circle cx="17" cy="19" r="4" fill="#07070a" opacity=".25"/><circle cx="30" cy="30" r="5" fill="#07070a" opacity=".2"/>',
  bird: '<path fill="currentColor" d="M4 30c8-2 12-8 14-16 4 6 10 8 16 6-2 4-5 6-8 7 4 2 9 2 14-1-3 7-10 11-18 10C14 36 8 34 4 30z"/>',
  flower: '<g fill="currentColor"><circle cx="24" cy="10" r="8"/><circle cx="38" cy="24" r="8"/><circle cx="24" cy="38" r="8"/><circle cx="10" cy="24" r="8"/></g><circle cx="24" cy="24" r="6" fill="#07070a"/>',
  spark: '<path fill="currentColor" d="M24 2c2 12 10 20 22 22-12 2-20 10-22 22-2-12-10-20-22-22C14 22 22 14 24 2z"/>',
  bolt: '<path fill="currentColor" d="M28 2 8 28h13l-4 18 23-28H26z"/>',
  leaf: '<path fill="currentColor" d="M6 42C6 20 20 6 44 6c0 24-14 38-34 38z"/><path d="M8 40 30 18" stroke="#07070a" stroke-width="2" opacity=".35"/>',
  heart: '<path fill="currentColor" d="M24 42C6 29 4 18 10 12c5-5 12-3 14 3 2-6 9-8 14-3 6 6 4 17-14 30z"/>',
  crown: '<path fill="currentColor" d="M5 36 8 14l10 11 6-13 6 13 10-11 3 22z"/><rect x="5" y="38" width="38" height="5" rx="2" fill="currentColor"/>',
  star: '<path fill="currentColor" d="M24 3l6.2 13.4 14.6 1.7-10.8 10 2.9 14.4L24 35.2 11.1 42.5 14 28.1 3.2 18.1l14.6-1.7z"/>',
  butterfly: '<g fill="currentColor"><path d="M24 24C18 6 4 6 4 16c0 8 8 10 20 8z"/><path d="M24 24C30 6 44 6 44 16c0 8-8 10-20 8z"/><path d="M24 24C16 28 6 32 10 40c4 6 12 0 14-16z" opacity=".85"/><path d="M24 24c8 4 18 8 14 16-4 6-12 0-14-16z" opacity=".85"/></g><rect x="22.5" y="12" width="3" height="26" rx="1.5" fill="#07070a" opacity=".55"/>',
}
export const NAMES = Object.keys(S)
export const svg = n => `<svg viewBox="0 0 48 48" width="100%" height="100%">${S[n]}</svg>`
