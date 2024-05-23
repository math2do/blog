"use client";

import MaxWidthWrapper from "@/components/max-widht-wrapper";
import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { login } from "../actions";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import LoginForm from "@/components/login-form";

const LoingPage = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from");
  console.log("RedirectTo", redirectTo);

  return (
    <MaxWidthWrapper className="mt-20 flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Currently only login by google is supported.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <LoginForm redirectTo={redirectTo} />
        </CardContent>
        {/* <CardFooter className="flex justify-center">
          <Button variant="link">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </CardFooter> */}
      </Card>
    </MaxWidthWrapper>
  );
};

export default LoingPage;
