import { IPaginationList, ISong } from "@/typing/interfaces";
import { http } from "../http.service";
import { IGetSongsParams } from "./interfaces";

export const findSongsReq = async (params: IGetSongsParams) => {
  return http.get<IPaginationList<ISong>>("/songs", { params });
};

export const addToFavoritesReq = async (songId: string) => {
  return http.post<void>(`/songs/${songId}/favorite`);
};

export const removeFromFavoritesReq = async (songId: string) => {
  return http.delete<void>(`/songs/${songId}/favorite`);
};
