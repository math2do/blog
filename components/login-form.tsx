import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { login } from "@/app/actions";

const LoginForm = ({ redirectTo }: { redirectTo: string }) => {
  return (
    <form
      action={async () => {
        await login("google", redirectTo);
      }}
    >
      <Button type="submit" variant="outline" className="flex gap-3">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          className="h-6 w-6"
          alt="google image"
          height={24}
          width={24}
        />
        Sign in with Google
      </Button>
    </form>
  );
};

export default LoginForm;
