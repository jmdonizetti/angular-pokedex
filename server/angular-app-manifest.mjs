
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jmdonizetti.github.io/angular-pokedex/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/pages.module.ts": [
    {
      "path": "chunk-6Z3PGLFP.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 13917, hash: '9806ff6e4a1ef1bfaef522a315fc41969543b575ae2272ad01aa78678e2ac943', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11722, hash: '24b9fb55be43fcf50c83ad2844d7857ddbad3c7460d8bcbadf7d9154d36a54d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-W2BEGLRD.css': {size: 6813, hash: 'KyP8HalFUtg', text: () => import('./assets-chunks/styles-W2BEGLRD_css.mjs').then(m => m.default)}
  },
};
