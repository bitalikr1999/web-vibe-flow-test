import { http } from "../http.service";
import { TokenResponse } from "./interfaces";

export const singInReq = (email: string, password: string) => {
  return http.post<TokenResponse>("auth/sign-in", { email, password });
};
