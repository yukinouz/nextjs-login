"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/lib/auth";

/**
 * メールアドレスとパスワード(Credentials)で Auth.js のログインを行う。
 */
export const signInWithCredentials = async (formData: FormData) => {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      redirect("/login?error=credentials");
    }

    throw error;
  }
};

/**
 * Auth.js のセッションを破棄してトップへ戻す。
 */
export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};
