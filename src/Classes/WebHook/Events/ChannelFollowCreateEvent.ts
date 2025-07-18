import { ConvertSnakeToCamel, snakeToCamel } from "../../../Util/SnakeToCamel";
import type { IFollow } from "../Types";
import type { IChannelFollowCreateEvent } from "../Types";
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
