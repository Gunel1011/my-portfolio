import * as HomeProvider from "../Provider/HomeProvider";

export class HomeService {
  static async dataList() {
    return await HomeProvider.getData().then((res) => {
      return {
        ...res.data,
        profile_image: `${import.meta.env.VITE_IMAGE_URL}/${
          res.data.profile_image
        }`,
      };
    });
  }
}
