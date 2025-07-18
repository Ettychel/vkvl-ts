import { ConvertSnakeToCamel, snakeToCamel } from "../../../Util/SnakeToCamel";
import { IChannelPointsRewardDemandCreateEvent, IDemand } from "../Types";
import { BaseEvent } from "./BaseEvent";

export class ChannelPointsRewardDemandCreateEvent
  extends BaseEvent
  implements ConvertSnakeToCamel<IChannelPointsRewardDemandCreateEvent>
{
  constructor(event: IChannelPointsRewardDemandCreateEvent) {
    super(event);
    this.demand = snakeToCamel(event.demand);
  }

  readonly demand: ConvertSnakeToCamel<IDemand>;
}
