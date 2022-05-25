import axios from "axios";
import { Country, Video } from "../../models";
import { countryUrl, videoUrl } from "./urls";

export class CodeHeroApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getCountries(): Promise<Country[]> {
    const url = this.baseUrl + countryUrl;
    return this.fetch<Country[]>(url);
  }

  public async getVideos(countryId: number): Promise<Video[]> {
    const url = this.baseUrl + videoUrl.replace('{countryId}', countryId.toString());
    const videos = await this.fetch<Video[]>(url);
    videos.forEach(video => {
      video.countryId = countryId;
    });
    return videos;
  }

  private async fetch<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;
  }
}