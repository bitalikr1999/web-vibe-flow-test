export class ISong {
  id: string;
  title: string;
  artist: string;
  duration: number;
  mimeType: SongMimeType;
  size: number;
  isFavorite?: boolean;
  createdAt: Date;
}

export enum SongMimeType {
  MP3 = "mp3",
  WAV = "wav",
  FLAC = "flac",
  AAC = "aac",
  OGG = "ogg",
}
