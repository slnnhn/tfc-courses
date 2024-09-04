// "use server";

// import { createClient } from "../utils/supabase/index";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// export async function logout() {
//   const supabase = createClient();

//   const { error } = await supabase.auth.signOut();

//   if (error) {
//     redirect("/error");
//   }

//   revalidatePath("/", "layout");
//   redirect("/");
// }

"use server";
import { createClient } from "../utils/supabase/server";
import { revalidatePath } from "next/cache";

export const handleSignout = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  console.log("error", error);
  if (error) {
    return { error: true, message: error.message };
  }

  revalidatePath("/");
  return { error: false };
};
