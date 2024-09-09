"use client";
import { createClient } from "../utils/supabase/client";
import { redirect } from "next/navigation";

export const signUpWithEmail = async (email, password, firstName, lastName) => {
  const supabase = createClient();
  console.log("email,", email);
  console.log("email,", password);
  console.log("email,", firstName);
  console.log("email,", lastName);
  // const { error } = await supabase.auth.signUp({
  //   email: email,
  //   password: password,
  //   options: {
  //     data: {
  //       first_name: firstName,
  //       last_name: lastName,
  //     },
  //   },
  // });

  // if (error) {
  //   console.log("error", error);
  //   return error;
  // }

  // return redirect("/dashboard");
};
