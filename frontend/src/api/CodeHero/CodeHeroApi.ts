import { Country } from "../../models";
import { CodeHeroApiClient, CountryResponse } from "./CodeHeroApiClient";

export class CodeHeroApi {
  private codeHeroApiClient: CodeHeroApiClient;

  constructor() {
    this.codeHeroApiClient = new CodeHeroApiClient(process.env.REACT_APP_CODE_HERO_API_URL);
  }

  public getCountries(): Promise<Country[]> {
    console.log('called');  
    return this.codeHeroApiClient
      .country()
      .then(countries => countries.map((countryResponse: CountryResponse) => {
        return {
          id: countryResponse.id!,
          name: countryResponse.name!,
          regionCode: countryResponse.regionCode!
        }
      }));
  }
}