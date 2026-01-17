interface IEntiponts {
  login: string;
  get_all_data: string;
}

const endpoints: IEntiponts = {
  login: "/login",
  get_all_data: "/v1/gun",
};

const $api = (key: keyof IEntiponts) => {
  return endpoints[key];
};
export default $api;
