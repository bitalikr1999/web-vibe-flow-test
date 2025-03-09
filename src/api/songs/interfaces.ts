import { IPagination, ISong } from "@/typing/interfaces";

export interface IGetSongsParams extends IPagination {
  isFavorite: boolean;
}
