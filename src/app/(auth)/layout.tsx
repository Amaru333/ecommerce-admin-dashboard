"use client";

import Navbar from "@/components/common/navbar/Navbar";
import { AUTO_LOGIN_ROUTE } from "@/constants/apiConstants";
import { AutoAdminUserProps } from "@/interfaces/utilsInterfaces";
import httpRequest from "@/lib/httpRequest";
import { getLocalStorageAuthToken, removeLocalStorageAuthToken } from "@/lib/localStorageFunctions";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AuthLayout({ children }: AutoAdminUserProps) {
  const router = useRouter();
  const [pageLoaded, setPageLoaded] = useState(false);
  const autoLogin = async () => {
    try {
      const res = await httpRequest.get(AUTO_LOGIN_ROUTE);
      console.log(res, "AUTO-LOGIN-RES");
      return res.data;
    } catch (error: any) {
      removeLocalStorageAuthToken();
      toast.error("Error logging", {
        description: error.response.data,
      });
      router.push("/");
      return error;
    }
  };
  const { refetch, isLoading } = useQuery({ queryKey: ["admin-details"], queryFn: () => autoLogin(), enabled: false });
  useEffect(() => {
    if (getLocalStorageAuthToken()) {
      refetch();
    } else {
      console.log("Not logged in");
      router.push("/");
    }
    setPageLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading || !pageLoaded) {
    return <div className="w-screen h-screen flex items-center justify-center bg-black text-white capitalize text-2xl">LOADING</div>;
  } else {
    return (
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    );
  }
}
