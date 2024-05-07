"use client";

import React, { useState } from "react";
import FormInput from "@/components/widgets/FormInput";
import UIButton from "@/components/widgets/UIButton";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAdminLogin } from "@/apis/auth";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const data = useAdminLogin(loginData);
  const onSubmit = () => {
    data
      .refetch()
      .then((res) => {
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error, "LOGIN-ERROR");
      });
  };
  return (
    <div className="bg-white rounded shadow-lg p-4 text-black">
      <p className="text-4xl">login</p>
      <FormInput className="min-w-80" icon={<MdEmail />} label="email" id="email" type="email" placeholder="abc@xyz.com" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
      <FormInput className="min-w-80" icon={<RiLockPasswordFill />} label="password" id="password" type="password" placeholder="••••••••" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
      <div className="mt-8 flex justify-center">
        <UIButton onClick={onSubmit} className="px-16" loading={false} theme="secondary">
          login
        </UIButton>
      </div>
    </div>
  );
};

export default LoginForm;
