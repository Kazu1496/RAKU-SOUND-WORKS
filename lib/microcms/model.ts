import { Image, Model } from '@/lib/microcms/client/types/model';
export interface Profile {
  name: string;
  description: string;
  avatar: Image;
}

export interface Tag extends Model {
  name: string;
}
export interface Work extends Model {
  title: string;
  image: Image;
  artistName: string;
  tags: Tag[];
  releasedAt: Date;
  youtubeUrl?: string;
  isPickedUp: boolean;
}
