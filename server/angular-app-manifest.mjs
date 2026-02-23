
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portafolio-david-silva/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portafolio-david-silva"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 688, hash: 'ad7b82af606b7a09dd4782c3fa4df410760da4dce6263cb8b736fc18884c9788', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 981, hash: '45f449926878aff6b2217a3e36d9762c1aa8d37334a39f6d3105fc0bb40be314', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27076, hash: '94d497803419bce8dc200ba30929dc94b05bc7c77e1f9b523f8b598bcd21c2d8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IBIRISEQ.css': {size: 95, hash: 'cyTt0GbQY2I', text: () => import('./assets-chunks/styles-IBIRISEQ_css.mjs').then(m => m.default)}
  },
};
