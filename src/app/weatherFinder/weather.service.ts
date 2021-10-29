import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";
interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}
interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  urlRoot = "https://jsonmock.hackerrank.com/api/weather?name=";
  constructor(private http: HttpClient) {}

  getWeather(weatherName: string) {
    console.log(this.urlRoot + weatherName);
    return this.http
      .get<ApiResponse>(this.urlRoot + weatherName)
      .pipe(pluck("data"));
  }
}
