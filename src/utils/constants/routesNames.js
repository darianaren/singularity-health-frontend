export const ROUTES_NAME = Object.freeze({
  blog: Symbol("Path showing the 'blog' section"),
  home: Symbol("Path showing the 'home' section"),
  login: Symbol("Path showing the 'login' section"),
  location: Symbol("Path showing the 'location' section"),
  services: Symbol("Path showing the 'services' section"),
  franchise: Symbol("Path showing the 'franchise' section"),
  "about-us": Symbol("Path showing the 'abput us' section")
});

export const ROUTES_NAME_VALUE = Object.freeze({
  [ROUTES_NAME.blog]: "blog",
  [ROUTES_NAME.home]: "home",
  [ROUTES_NAME.login]: "login",
  [ROUTES_NAME.location]: "location",
  [ROUTES_NAME.services]: "services",
  [ROUTES_NAME.franchise]: "franchise",
  [ROUTES_NAME["about-us"]]: "about-us"
});

export const VALID_ROUTES_NAME = Object.freeze([
  ROUTES_NAME_VALUE[ROUTES_NAME.blog],
  ROUTES_NAME_VALUE[ROUTES_NAME.home],
  ROUTES_NAME_VALUE[ROUTES_NAME.login],
  ROUTES_NAME_VALUE[ROUTES_NAME.location],
  ROUTES_NAME_VALUE[ROUTES_NAME.services],
  ROUTES_NAME_VALUE[ROUTES_NAME.franchise],
  ROUTES_NAME_VALUE[ROUTES_NAME["about-us"]]
]);
