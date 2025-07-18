import type { ISubscription } from "../EntityTypes/ISubscription";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelSubscriptionCreateEvent extends IBaseEvent {
  readonly subscription: ISubscription;
}
