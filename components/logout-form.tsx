import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { logout } from "@/app/actions";

const LogoutForm = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await logout();
      }}
    >
      <Button type="submit" variant="ghost" className="w-full p-0">
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </Button>
    </form>
  );
};

export default LogoutForm;
