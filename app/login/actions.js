// "use server";
// import { createClient } from "../utils/supabase/client";
// import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";

// export const handleSignout = async () => {
//   const supabase = createClient();

//   console.log("signing out");
//   const { error } = await supabase.auth.signOut();
//   console.log("error", error);
//   if (error) {
//     redirect("/error");
//   }
//   revalidatePath("/", "layout");
//   redirect("/");
// };
// import { redirect } from "next/navigation";
// import { headers } from "next/headers";
// import { createClient } from "../utils/supabase/server";
// const supabase = createClient();

// export const loginWithGoogle = async e => {
//   const origin = headers().get("origin");

//   const { error, data } = await supabase.auth.signInWithOAuth({
//     provider: "google",
//     options: {
//       redirectTo: `${origin}/auth/callback`,
//     },
//   });

//   if (error) {
//     console.log("error is", error);
//   } else {
//     return redirect(data.url);
//   }
// };

"use client";
import { createClient } from "../utils/supabase/client";
import { redirect } from "next/navigation";

export const loginWithEmail = async (email, password) => {
  console.log("logging in with email");
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: "test@test.com",
    password: "123456",
  });

  if (error) {
    console.log("error", error);
    return error;
  }

  return redirect("/dashboard");
};
