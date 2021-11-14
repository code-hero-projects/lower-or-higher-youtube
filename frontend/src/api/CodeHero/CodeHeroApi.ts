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

  public getVideos(countryId: number): Promise<Video[]> {
    const url = this.baseUrl + videoUrl.replace('{countryId}', countryId.toString());
    return this.fetch<Video[]>(url);
  }

  private fetch<T>(url: string): Promise<T> {
    return axios.get<T>(url).then(response => response.data);
  }
}