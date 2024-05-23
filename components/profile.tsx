import React from "react";
import Link from "next/link";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { LogOut, User } from "lucide-react";
import { logout } from "@/app/actions";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import LogoutForm from "./logout-form";

const Profile = async () => {
  const session = await auth();
  // show login button for not logged in user
  if (!session) {
    return (
      <Link
        href="/login"
        className="text-sm hover:underline hover:underline-offset-4"
      >
        Login
      </Link>
    );
  }

  // no user details, let's login again
  if (!session.user) {
    return redirect("/login");
  }

  console.log("{session.user.image}", session.user.image);
  const image = session.user.image as string;
  return (
    <div className="h-full">
      <div className="flex h-full items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={image}
              alt="profile pic"
              height={30}
              width={30}
              className="cursor-pointer rounded-full object-cover object-center ring-1 ring-offset-1"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-3 py-4">
            <DropdownMenuItem className="cursor-not-allowed">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="h-10 cursor-pointer">
              <LogoutForm />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Profile;
