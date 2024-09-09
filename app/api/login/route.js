// app/api/login/route.js
import { headers } from "next/headers";
import { createClient } from "../../utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = createClient();
  const origin = headers().get("origin");

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  return NextResponse.json({ url: data.url });
}
