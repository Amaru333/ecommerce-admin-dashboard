import { ADMIN_LOGIN_ROUTE } from "@/constants/apiConstants";
import { IAdminLogin } from "@/interfaces/adminInterfaces";
import httpRequest from "@/lib/httpRequest";
import { setLocalStorageAuthToken } from "@/lib/localStorageFunctions";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

//LOGIN ADMIN
const loginUser = async (user: IAdminLogin) => {
  try {
    const res = await httpRequest.post(ADMIN_LOGIN_ROUTE, user, { params: { auth: false } });
    console.log(res.headers);
    setLocalStorageAuthToken(res.headers["auth-token"]);
    toast.success("Logged in", {
      description: "Successfully logged in. Please wait",
    });
    return res.data;
  } catch (error: any) {
    toast.error("Error logging in", {
      description: error.response.data,
    });
    return error;
  }
};
export const useAdminLogin = (userDetails: IAdminLogin) => {
  return useQuery({ queryKey: ["user-details"], queryFn: () => loginUser(userDetails), enabled: false });
};
