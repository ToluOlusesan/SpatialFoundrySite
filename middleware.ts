import { NextResponse, type NextRequest } from "next/server";

// While the site is in "coming soon" mode, every route is redirected to the
// home page so none of the in-progress inner pages are reachable. Set
// NEXT_PUBLIC_COMING_SOON=false to open the full site.
const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON !== "false";

export function middleware(request: NextRequest) {
  if (!isComingSoon) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (pathname === "/") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  // Run on every path except Next internals and public assets so the home
  // page can still load its image, logo, fonts, and favicons.
  matcher: ["/((?!_next/|favicons/|images/|logo/|videos/|.*\\.[\\w]+$).*)"],
};
