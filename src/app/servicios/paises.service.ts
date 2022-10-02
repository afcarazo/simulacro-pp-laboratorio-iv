import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient:HttpClient) { }
 
  APIKEY: string = '194455130f2dd427bf238f34d9710740';
  COUNTRYAPIKEY: string = 'c5b93f59bbfa227d88e0e02d916bf9ca';

  obtenerPaises()
  {
    return this.httpClient.get('https://restcountries.com/v3.1/all');
  }
 
}
