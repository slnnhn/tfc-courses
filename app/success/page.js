import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/index";

const SuccessPage = async () => {
  const supabase = createClient();

  return <div>welcome to the home page!</div>;
};

export default SuccessPage;