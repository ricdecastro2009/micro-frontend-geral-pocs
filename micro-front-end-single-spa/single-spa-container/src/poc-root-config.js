import { registerApplication, start } from "single-spa";


// Registra nossas aplicações.
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
    activeWhen: (location) => location.pathname === '/',
    //activeWhen: ["/"],
});

registerApplication({
  name: "@poc/single-spa-react-one",
  app: () =>
    System.import("@poc/single-spa-react-one"),
    activeWhen: (location) => location.pathname === '/one',
});

registerApplication({
  name: "@poc/react-multiples",
  app: () =>
    System.import("@poc/react-multiples"),
    activeWhen: ["/multiples"],
});

registerApplication({
  name: "@poc/react-route",
  app: () =>
    System.import("@poc/react-route"),
    activeWhen: (location) => location.pathname === '/react-route',
});

registerApplication({
  name: "@poc/react-lazy",
  app: () =>
    System.import("@poc/react-lazy"),
    activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@poc/react-header",
  app: () => System.import("@poc/react-header"),
  activeWhen: ['/']
});



// monta e desmonta os microfrontends
start({
  urlRerouteOnly: true,
});
