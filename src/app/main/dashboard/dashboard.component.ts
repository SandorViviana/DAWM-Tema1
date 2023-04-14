import { Component } from '@angular/core';
import { City } from 'src/app/model/city.model';
import { Service } from 'src/app/model/service.model';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
constructor(private cityService:CityService){}
cities!:City[]
ngOnInit()
{
  this.cityService.getCities().subscribe(
    (cities:City[]) =>{
       this.cities=cities;
     }
   );
}
emittedCity:string="New adventure";
search:string='';
setReceivedCity(event: any) {
  this.emittedCity=event;
  }
  ourservices: Service[] =
  [
    {
      category: "travel",
      title:"A ranking created to indicate the best",
      description:"Tourists pondering about who to entrust the organization of their holiday have more and more tools to make the best choice." 
      
    },
    {
      category: "travel arrangements",
      title:"Accommodation and transportation",
      description:"All of our transport options and accommodation meet the requirements within our externally verified Safety Management System."
    },
    {
      category: "our professional guide",
      title:"Meet professional travellers",
      description:"Meeting a client's expectations and interests within budget and time schedule is our top priority "
    },
    {
      category: "activities",
      title:"Things to do",
      description:"Explore attractions, tours and more"
    }
  ]

  filteredCities: City[] = [];

setSearch(search: string) {
  this.filteredCities = this.cities.filter(city => city.name.startsWith(search) && search!='');
}
page:number=0;
disabledPrev:boolean=true;
disabledNext:boolean=false;

prevPage()
{
  this.page--;
  this.disabledPrev=(this.page==0);
  this.disabledNext=(this.cities.length < (this.page + 1) * 6)
}

nextPage()
{
  this.page++;
  this.disabledNext=(this.cities.length < (this.page + 1) * 6)
  this.disabledPrev=(this.page==0);
}
getCitiesOnPage(page:number)
{
  return this.cities.slice(6*page, 6*page+6);
}

 
}
