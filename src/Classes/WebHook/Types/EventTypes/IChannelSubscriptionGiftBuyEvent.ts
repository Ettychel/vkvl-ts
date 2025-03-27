import type { IChannel } from "../EntityTypes/IChannel";
import type { IGiftSubscription } from "../EntityTypes/IGiftSubscription";
import type { IOwner } from "../EntityTypes/IOwner";

export interface IChannelSubscriptionGiftBuyEvent {
  channel: IChannel;
  owner: IOwner;
  gift_subscription: IGiftSubscription;
}
