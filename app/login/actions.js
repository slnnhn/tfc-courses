"use server";
import { createClient } from "../utils/supabase/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const handleSignout = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
};
