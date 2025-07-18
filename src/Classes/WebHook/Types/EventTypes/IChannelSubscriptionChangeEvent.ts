import type { ISubscription } from "../EntityTypes/ISubscription";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelSubscriptionChangeEvent extends IBaseEvent {
  readonly subscription: ISubscription;
}
