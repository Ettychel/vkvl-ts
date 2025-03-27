import type { IReward } from "./IReward";
import type { IUser } from "./IUser";

export interface IDemand {
  id: number;
  created_at: number;
  message_parts: any[];
  reward: IReward;
  user: IUser;
}
