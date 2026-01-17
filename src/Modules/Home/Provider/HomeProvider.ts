import $axios from "../../../api/axiosInterceptor";
import $api from "../../../api/endpoint";
import type { IData } from "../Models/HomeModels";

export const getData = async () => {
  return await $axios.get<IData>($api("get_all_data"));
};
