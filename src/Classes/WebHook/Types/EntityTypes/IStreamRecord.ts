import type { ICategory } from "./ICategory";

export interface IStreamRecord {
  id: string;
  title: string;
  duration: number;
  category: ICategory;
  source_urls: { type: string; url: string }[];
  video_id: number;
  stream_started_at: number;
  created_at: number;
  preview_url: string;
  process_state: "wait" | "original_quality_only" | "done";
}
