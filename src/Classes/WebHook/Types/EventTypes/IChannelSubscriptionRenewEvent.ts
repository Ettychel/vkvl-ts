import type { IChannel } from "../EntityTypes/IChannel";
import type { IOwner } from "../EntityTypes/IOwner";
import type { ISubscription } from "../EntityTypes/ISubscription";

export interface IChannelSubscriptionRenewEvent {
  channel: IChannel;
  owner: IOwner;
  subscription: ISubscription;
}
