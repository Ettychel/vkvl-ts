import type { ISubscription } from "../EntityTypes/ISubscription";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelSubscriptionDeleteEvent extends IBaseEvent {
  readonly subscription: ISubscription;
}
