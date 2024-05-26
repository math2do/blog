"use server";

import { signIn, signOut } from "@/auth";

export async function login(provider: string, redirectTo: string) {
  await signIn(provider, { redirect: true, redirectTo: redirectTo });
}

export async function logout() {
  await signOut();
}
