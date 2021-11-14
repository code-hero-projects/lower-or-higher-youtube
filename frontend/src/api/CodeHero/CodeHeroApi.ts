import axios from "axios";
import { Country, Score, Video } from "../../models";
import { countryUrl, scoresUrl, videoUrl } from "./urls";

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

  public getScores(): Promise<Score[]> {
    const url = this.baseUrl + scoresUrl + '?limit=15';
    return this.fetch<Score[]>(url);
  }

  public postScore(score: Score): Promise<void> {
    const url = this.baseUrl + scoresUrl;
    return this.post(url, score);
  }

  private fetch<T>(url: string): Promise<T> {
    return axios.get<T>(url).then(response => response.data);
  }

  private post<T>(url: string, data: T): Promise<void> {
    return axios.post(url, data);
  }
}