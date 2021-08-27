import { config } from "../../../config/localstorage";
import { api } from "../../../services/api";

const localStorageUser = JSON.parse(
  localStorage.getItem(config.paths.auth.user)
);

const localStorageToken = JSON.parse(
  localStorage.getItem(config.paths.auth.token)
);

if (localStorageUser && localStorageToken)
  api.defaults.headers.authorization = `Bearer ${localStorageToken}`;

const state = {
  user: localStorageUser,
  token: localStorageToken,
};

export { state };
