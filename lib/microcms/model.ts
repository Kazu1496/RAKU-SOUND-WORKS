import { Image, Model, Tag } from '@/lib/microcms/client/types/model';

export interface Profile {
  name: string;
  description: string;
  avatar: Image;
}

export interface Work extends Model {
  title: string;
  image: Image;
  description: string;
  tags: Tag[];
}
