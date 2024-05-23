"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import LoginForm from "@/components/login-form";

const LoginPage = () => {
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
          <LoginForm />
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

export default LoginPage;
