"use server";

import { signIn, signOut } from "@/auth";

export async function login(provider: string) {
  await signIn(provider);
}

export async function logout() {
  await signOut();
}
