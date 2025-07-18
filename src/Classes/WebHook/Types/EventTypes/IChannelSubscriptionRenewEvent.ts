import type { ISubscription } from "../EntityTypes/ISubscription";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelSubscriptionRenewEvent extends IBaseEvent {
  readonly subscription: ISubscription;
}
