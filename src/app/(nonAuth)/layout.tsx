"use client";

import { AUTO_LOGIN_ROUTE } from "@/constants/apiConstants";
import { AutoAdminUserProps } from "@/interfaces/utilsInterfaces";
import httpRequest from "@/lib/httpRequest";
import { getLocalStorageAuthToken, removeLocalStorageAuthToken } from "@/lib/localStorageFunctions";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function NonAuthLayout({ children }: AutoAdminUserProps) {
  const router = useRouter();
  const [pageLoaded, setPageLoaded] = useState(false);
  const autoLogin = async () => {
    try {
      const res = await httpRequest.get(AUTO_LOGIN_ROUTE);
      console.log(res, "AUTO-LOGIN-RES");
      return res.data;
    } catch (error: any) {
      removeLocalStorageAuthToken();
      toast.error("Error logging in", {
        description: error.response.data,
      });
      return error;
    }
  };
  const { refetch, isLoading } = useQuery({ queryKey: ["admin-details"], queryFn: () => autoLogin(), enabled: false });
  useEffect(() => {
    if (getLocalStorageAuthToken()) {
      refetch();
      router.push("/dashboard");
    } else {
      console.log("Not logged in");
    }
    setPageLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading || !pageLoaded) {
    return <div className="w-screen h-screen flex items-center justify-center bg-black text-white capitalize text-2xl">LOADING</div>;
  } else {
    return <div>{children}</div>;
  }
}
