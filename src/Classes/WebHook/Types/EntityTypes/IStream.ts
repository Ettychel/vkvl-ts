import type { ICategory } from "./ICategory";

export interface IStream {
  id: string;
  title: string;
  category: ICategory;
  video_id: number;
  started_at: number;
  ended_at: number;
  preview_url: string;
}
