
export default {
  basePath: 'https://jmdonizetti.github.io/angular-pokedex',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
