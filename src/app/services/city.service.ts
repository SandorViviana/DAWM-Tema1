import { Injectable } from "@angular/core";
import { City } from "../model/city.model";
import { of } from "rxjs/internal/observable/of";
import { Observable } from "rxjs/internal/Observable";


@Injectable({
    providedIn: 'root'
  })

  export class CityService{
    cities:City[]=[
        {
          image:"../../../assets/Images/warsaw.jpg",
          name:"Warsaw",
          description:"A must-see on the tourist map of Europe. Check out the charming Old Town, take a stroll down the Royal Route or spend a wild evening by the Vistula. Combining elements of East and West, this is a town of complex character."
        },
        {
          image:"../../../assets/Images/krakow.jpg",
          name:"Krakow",
          description:"By virtue of its peculiar architecture and enthralling history, still present in all corners of the city, Kraków is one of the most stunning and surprising metropolises in Europe."
        },
        {
          image:"../../../assets/Images/gdansk.jpg",
          name:"Gdansk",
          description:"Gdańsk is a place one not only has to visit briefly but also do some sightseeing. The Main Town, Old Town, Wrzeszcz, Oliwa, Sobieszewo Island... Each of these places hides stories worth knowing."
        },
        {
          image:"../../../assets/Images/wroclaw.jpg",
          name:"Wroclaw",
          description:"With an idyllic location on the Odra River, the venerable city comprises 12 islands, 130 bridges and verdant riverside parks. The beautifully preserved Cathedral Island is a treat for lovers of Gothic architecture."
        },
    
        {
          image:"../../../assets/Images/lodz.jpg",
          name:"Lodz",
          description:"For many newcomers and tourists alike, Łódź is an anomaly in many ways. The city is renown for its fantastic film pedigree and dynamic cultural calendar, placing it at the heart of Polish art and counter-culture. "
        },
    
        {
          image:"../../../assets/Images/zakopane.jpg",
          name:"Zakopane",
          description:"Shimmering turquoise alpine lakes, endless mountain peaks, relaxing spas, local food and winter sports all await you at this year-round outdoor adventure playground."
        },
    
        {
          image:"../../../assets/Images/lublin.jpg",
          name:"Lublin",
          description:"Few cities in Europe have the fairytale atmosphere of Lublin - southeastern Poland's cultural pearl. Known as the 'Land of Legends' there's a colourful tale down seemingly every cobblestoned lane of the charming Old Town."
        },
    
        {
          image:"../../../assets/Images/elblag.jpg",
          name:"Elblag",
          description:"The starting point for visiting Elblag Canal and Frombork, Elblag has a rich history dating back to the medieval times and boasts a beautiful Old Town with historic architecture."
        },
    
        {
          image:"../../../assets/Images/bialystock.jpg",
          name:"Bialystok",
          description:"The gateway to many natural attractions of Podlachia, known collectively as the Green Lungs of Poland,  Bialystock offers a beautiful historical center with exquisite palaces. "
        }
    
      ]

      getCities():Observable<City[]>
      {      
       return of(this.cities);
      }

      getCitiesOnPage(page:number)
      {
        return this.cities.slice(6*page, 6*page+6);
      }
  }
