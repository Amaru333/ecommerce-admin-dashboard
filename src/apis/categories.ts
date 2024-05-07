import { CATEGORIES_ROUTE } from "@/constants/apiConstants";
import { ICategory } from "@/interfaces/dataInterfaces";
import { SidebarCategoryProps } from "@/interfaces/widgetInterfaces";
import httpRequest from "@/lib/httpRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const createNewCategory = (category: SidebarCategoryProps) => {
  return httpRequest.post(CATEGORIES_ROUTE, category, { headers: { "Content-Type": "multipart/form-data" } });
};

export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewCategory,
    onSuccess: (data) => {
      console.log(data, "MUTATION-DATA");
      queryClient.setQueryData(["categories"], (oldData: { data: [ICategory] }) => {
        return { ...oldData, data: [...oldData.data, data.data] };
      });
    },
  });
};

const getCategories = () => {
  return httpRequest.get(CATEGORIES_ROUTE);
};
export const useGetCategories = () => {
  return useQuery({ queryKey: ["categories"], queryFn: getCategories, refetchOnMount: false, staleTime: Infinity });
};
