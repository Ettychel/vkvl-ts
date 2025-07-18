import type { IDemand } from "../EntityTypes/IDemand";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelPointsRewardDemandCreateEvent extends IBaseEvent {
  readonly demand: IDemand;
}
