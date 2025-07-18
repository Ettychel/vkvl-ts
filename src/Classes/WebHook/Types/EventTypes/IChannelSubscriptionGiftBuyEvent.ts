import type { IGiftSubscription } from "../EntityTypes/IGiftSubscription";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelSubscriptionGiftBuyEvent extends IBaseEvent {
  readonly gift_subscription: IGiftSubscription;
}
