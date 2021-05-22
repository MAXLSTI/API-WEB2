import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey="981012124efd0991d8c92ce4af6dcf20";
  URI: string="";

  constructor(private httpClient:HttpClient) {
    this.URI=`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`

   }

   getWeather(cityName:string,cityCode:string){
     return this.httpClient.get(`${this.URI}${cityName},${cityCode}`)

   }
}
