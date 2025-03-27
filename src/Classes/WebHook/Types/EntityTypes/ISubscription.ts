import type { ISubscriptionLevel } from "./ISubscriptionLevel";
import type { IUser } from "./IUser";

export interface ISubscription {
  subscriber: IUser;
  level: ISubscriptionLevel;
  amount: number;
  days_duration: number;
  kind?: "first_subscription" | "upgrade_from_follow" | "subscription_recovery";
  started_at: number;
  ended_at?: number;
  renewed_at?: number;
  changed_at?: number;
  previous_level?: ISubscriptionLevel;
}
