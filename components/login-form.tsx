import React from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { login } from "@/app/actions";
import { redirect } from "next/navigation";

const LoginForm = ({ redirectTo }: { redirectTo: string | null }) => {
  return (
    <form
      action={async () => {
        await login("google");
        if (redirectTo) {
          return redirect(redirectTo);
        }
        redirect("/");
      }}
    >
      <Button type="submit">
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </form>
  );
};

export default LoginForm;
