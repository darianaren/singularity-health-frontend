import { ROUTES_NAME, ROUTES_NAME_VALUE } from "@/utils/constants/routesNames";

export const NAV_ROUTES = [
  { name: "Location", path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.location] },
  { name: "Blog", path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.blog] },
  { name: "Services", path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.services] },
  {
    name: "About Us",
    path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME["about-us"]]
  },
  {
    name: "Franchise with Us",
    path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.franchise]
  }
];
