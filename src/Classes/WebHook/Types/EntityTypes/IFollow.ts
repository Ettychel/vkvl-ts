import type { IUser } from "./IUser";

export interface IFollow {
  follower: IUser;
  started_at: number;
  ended_at?: number;
}
