import { NextResponse } from "next/server";

import { ROUTES_NAME, ROUTES_NAME_VALUE } from "./utils/constants/routesNames";

/**
 * Middleware function to check if the user is authenticated by verifying the presence of a valid token.
 * This function will check for the `userToken` cookie, and if it is not found, the user will be redirected
 * to the login page. If the token exists, the request proceeds as usual.
 *
 * @param {Request} request - The incoming request object.
 * @returns {NextResponse} - Returns a redirection response to the login page if the token is not found,
 *                            or allows the request to continue if the token is valid.
 */
export function middleware(request) {
  const token = request.cookies.get("userToken");
  const url = request.nextUrl;
  const loginPath = "/" + ROUTES_NAME_VALUE[ROUTES_NAME.login];

  if (!token && url.pathname !== loginPath) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  return NextResponse.next();
}

/**
 * Configuration object for the middleware to specify which paths the middleware should apply to.
 * In this case, the middleware will be applied to the root path ("/").
 *
 * @constant {Object} config - Configuration object for middleware matching.
 * @property {Array} matcher - List of URL paths to match for the middleware to be applied.
 */
export const config = {
  matcher: ["/"]
};
