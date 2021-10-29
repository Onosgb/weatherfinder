import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./weather.service";
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

@Component({
  selector: "weather-finder",
  templateUrl: "./weatherFinder.component.html",
  styleUrls: ["./weatherFinder.component.scss"],
})
export class WeatherFinder implements OnInit {
  cityWeather: CityWeather;
  weatherName = "";
  noResult = false;
  weather: number;
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {}

  searchWeather() {
    this.weatherService
      .getWeather(this.weatherName)
      .subscribe((cityWeather) => {
        if (!!cityWeather.length) {
          this.cityWeather = cityWeather[0];
          this.weather = parseInt(this.cityWeather.weather.split(" ")[0]);
          this.noResult = false;
        } else {
          this.cityWeather = undefined;
          this.noResult = true;
        }
      });
  }
}
