import { IChild } from "./child";
export interface IFamily {
  id: number;
  picture: string;
  family_name: string;
  favoriteChild: number;
  children: IChild[];
}
