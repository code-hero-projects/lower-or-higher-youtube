import axios from "axios";
import { Country } from "../../models";
import { countryUrl } from "./urls";

export class CodeHeroApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getCountries(): Promise<Country[]> {
    const url = this.baseUrl + countryUrl;
    const countries = axios.get<Country[]>(url).then(response => response.data);
    return countries;
  }
}