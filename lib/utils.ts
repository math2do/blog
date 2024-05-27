import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitialize(input: string): string {
  const words = input.split(" ");

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

export async function sleep(s: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve, s * 1000);
  });
}
