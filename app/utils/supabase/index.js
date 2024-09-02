/**
 * The `createClient` function creates a Supabase client with cookie handling for server-side rendering
 * in a Next.js environment.
 * @returns The `createClient` function returns a Supabase client created using the
 * `createServerClient` function from the `@supabase/ssr` package. The client is configured to use
 * cookies for managing authentication and session information.
 */
// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export const createClient = () => {
//   const cookieStore = cookies();
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

//     {
//       cookies: {
//         get(name) {
//           return cookieStore.get(name)?.value;
//         },
//         set(name, value, options) {
//           try {
//             cookieStore.set({ name, value, ...options });
//           } catch (error) {
//             // The `set` method was called from a Server Component.
//             // This can be ignored if you have middleware refreshing
//             // user sessions.
//           }
//         },
//         remove(name, options) {
//           try {
//             cookieStore.set({ name, value: "", ...options });
//           } catch (error) {
//             // The `delete` method was called from a Server Component.
//             // This can be ignored if you have middleware refreshing
//             // user sessions.
//           }
//         },
//       },
//     }
//   );
// };

import { createServerClient } from "@supabase/ssr";
import { createClient as _createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export const createClient = () => {
  //   return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const cookieStore = cookies();
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
      set(name, value, options) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
      remove(name, options) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch (error) {
          // The `delete` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};
