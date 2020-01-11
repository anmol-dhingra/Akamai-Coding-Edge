import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.component.html',
  styleUrls: ['./hotel-dashboard.component.scss']
})
export class HotelDashboardComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }
  hotels;
  searchBarContent: string;
  hotelList;
  enableClearSearch: boolean;
  enableClearFilter: boolean;
  sortHotelAscendingByPrice: boolean = false;
  filterBarContent: string;

  ngOnInit() {
    this.getHotelLists();
  }

  getHotelLists(){
    const endpoint = "hotels";
    this.apiService.get(endpoint).subscribe(
      (response)=>{
        this.hotels = response;
        this.hotelList = response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  getHotelByName(){
    var filterHotels = []
    this.hotels.forEach(
      element => {
        if(element.name.startsWith(this.searchBarContent)){
          filterHotels.push(element);
        }
    });
    this.hotels = filterHotels;
    this.enableClearSearch = true;
  }
  
  clearSearch(){
    this.enableClearSearch = false;
    this.hotels = this.hotelList;
    this.searchBarContent = "";
  }

  sortHotelByPrice(){

    if (this.sortHotelAscendingByPrice === false){
    this.hotels.sort(
      (a, b)=>{
        if(a.price < b.price) return -1;
        if(a.price > b.price) return  1;
      }
    );
    }
  
  else{
    this.hotels.sort(
      (a, b)=>{
        if(a.price > b.price) return -1;
        if(a.price < b.price) return  1;
      }
    );
  }
  this.sortHotelAscendingByPrice = !this.sortHotelAscendingByPrice;
  }

  searchHotelByRegion(){
    var filterHotels = []
    this.hotels.forEach(
      element => {
        if(element.neighbourhood.startsWith(this.filterBarContent)){
          filterHotels.push(element);
        }
    });
    this.hotels = filterHotels;
    this.enableClearFilter = true;
  }
  clearFilter(){
    this.enableClearFilter = false;
    this.hotels = this.hotelList;
    this.filterBarContent = "";
  }

}
