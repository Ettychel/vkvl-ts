import type { ISubscriptionLevel } from "./ISubscriptionLevel";
import type { IUser } from "./IUser";

export interface IGiftSubscription {
  donator?: IUser;
  subscriber?: IUser;
  level: ISubscriptionLevel;
  count?: number;
  amount: number;
  is_anonymous: boolean;
  bought_at: number;
  given_at?: number;
  started_at?: number;
  ended_at?: number;
}
