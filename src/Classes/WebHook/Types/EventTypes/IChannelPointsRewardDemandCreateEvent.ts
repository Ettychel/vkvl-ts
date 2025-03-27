import type { IChannel } from "../EntityTypes/IChannel";
import type { IDemand } from "../EntityTypes/IDemand";
import type { IOwner } from "../EntityTypes/IOwner";

export interface IChannelPointsRewardDemandCreateEvent {
  channel: IChannel;
  owner: IOwner;
  demand: IDemand;
}
