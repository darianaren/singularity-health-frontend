import { ROUTES_NAME, ROUTES_NAME_VALUE } from "@/utils/constants/routesNames";

export const NAV_ROUTES = Object.freeze([
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
]);

export const FOOTER_ELEMENTS = ({ constructionMessage, newsletterMessage }) =>
  Object.freeze([
    {
      id: "footer-about",
      title: "About",
      links: [
        {
          name: "Locations",
          path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.location]
        },
        {
          name: "Franchise With Us",
          path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.franchise]
        },
        {
          name: "Partners",
          action: constructionMessage
        },
        {
          name: "About Us",
          path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME["about-us"]]
        },
        {
          name: "Make Fetch Happen!",
          action: constructionMessage
        }
      ]
    },
    {
      id: "footer-resources",
      title: "Resources",
      links: [
        {
          name: "Reviews",
          action: constructionMessage
        },
        {
          name: "Pet Resource Center",
          action: constructionMessage
        },
        {
          name: "Media Fact Sheet",
          action: constructionMessage
        },
        {
          name: "Blog",
          path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.blog]
        },
        {
          name: "News",
          action: constructionMessage
        }
      ]
    },
    {
      id: "footer-others",
      title: "",
      links: [
        {
          name: "Gift Cards",
          action: constructionMessage
        },
        {
          name: "Services",
          path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.services]
        },
        {
          name: "Franchisee Login",
          path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.login]
        },
        {
          name: "Term of Use",
          action: constructionMessage
        },
        {
          name: "Privacy Policy",
          action: constructionMessage
        }
      ]
    },
    {
      id: "footer-newsletter",
      title: "NewsLetter",
      subtitle: "Sign up to receive the Fetch! Family Newsletter",
      submitInput: {
        placeholder: "Email Adress",
        submit: newsletterMessage
      }
    }
  ]);
