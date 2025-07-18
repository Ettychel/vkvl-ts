import { ConvertSnakeToCamel, snakeToCamel } from "../../../Util/SnakeToCamel";
import type { IFollow } from "../Types/EntityTypes/IFollow";
import type { IChannelFollowCreateEvent } from "../Types/EventTypes/IChannelFollowCreateEvent";
import { BaseEvent } from "./BaseEvent";

export class ChannelFollowCreateEvent
  extends BaseEvent
  implements ConvertSnakeToCamel<IChannelFollowCreateEvent>
{
  constructor(event: IChannelFollowCreateEvent) {
    super(event);
    this.follow = snakeToCamel(event.follow);
  }

  readonly follow: ConvertSnakeToCamel<IFollow>;
}
