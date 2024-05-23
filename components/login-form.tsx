import React from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { login } from "@/app/actions";

const LoginForm = () => {
  return (
    <form
      action={async () => {
        await login("google");
      }}
    >
      <Button type="submit">
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </form>
  );
};

export default LoginForm;
