// import { NextResponse } from "next/server";
// import { createClient } from "";

// export async function middleware(request) {
//   const { supabase, response } = createClient(request);
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user && request.nextUrl.pathname.startsWith("/login")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   return response;
// }

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
// };

// import { updateSession } from "./app/utils/supabase/middleware";

// export async function middleware(request) {
//   return await updateSession(request);
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };

import { updateSession } from "./app/utils/supabase/middleware";

export async function middleware(request) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
