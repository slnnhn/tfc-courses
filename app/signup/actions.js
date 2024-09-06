"use client";
import { createClient } from "../utils/supabase/client";
import { redirect } from "next/navigation";

export const signUpWithEmail = async (email, password) => {
  const supabase = createClient();
  const { error } = await supabase.auth.signUp({
    email: "test@test.com",
    password: "123456",
  });

  if (error) {
    console.log("error", error);
    return error;
  }

  return redirect("/dashboard");
};
