import { Plan } from "@/framework/types/types";
import { API_ROUTES } from "@/utilities/api-routes";
import { http } from "@/utilities/axios";
import { useQuery } from "react-query";



export const getPlans = async () => {
    const { data } = await http.get(API_ROUTES.PLANS);
    return data;
}

export const usePlansQuery = () => {
    return useQuery<Plan[], Error>([API_ROUTES.PLANS], () =>
        getPlans(),
        {
            retry: false,
        }
    );
};