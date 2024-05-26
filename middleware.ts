import { auth } from "@/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();

  // without login can't go to content
  if (!session && request.nextUrl.pathname.startsWith("/content")) {
    return Response.redirect(
      new URL("/login?from=" + request.nextUrl.pathname, request.url)
    );
  }

  // logged in but no user details, let's login again
  if (session && !session.user) {
    return Response.redirect(
      new URL("/login?from=" + request.nextUrl.pathname, request.url)
    );
  }

  // no need to see login page while logged in
  if (
    session &&
    session.user &&
    request.nextUrl.pathname.startsWith("/login")
  ) {
    return Response.redirect(new URL("/", request.url));
  }

  // with login, only configured users can go to content
  // Todo: users should come from configuration
  // if (
  //   session &&
  //   session.user &&
  //   session.user.email !== "mathura.dakshana15@gmail.com"
  // ) {
  //   return NextResponse.json({ message: "Not authorized" }, { status: 403 });
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
