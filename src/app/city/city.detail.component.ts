import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CityService} from './city.service';

@Component({
    selector:"item.detail",
    templateUrl: "./city.detail.html",
    providers: [CityService]
})
export class CityDetailComponent implements OnInit{

    activateRoute;
    router;
    itemService;

    itemId;
    weather = {main:{}, weather:[{main:[]}]}; // INITIALISATION IS NEEDED!

    constructor(activateRoute: ActivatedRoute, router: Router, ItemService: CityService){
        this.activateRoute = activateRoute;
        this.router = router;
        this.itemService = ItemService;
    }

    ngOnInit(){

        this.activateRoute.params.subscribe(params => {
          this.itemId = params['id'];
        });

        this.getStuff();

    }

    getStuff(){
            var that = this;
            this.itemService.getWeather(
                                        that.itemId,
                                        function(response){
                                            console.log("SUCCESS!");
                                            console.log(response);
                                            
                                            var responseJSON = (JSON.parse(response._body));

                                            //make first letter uppercase
                                            var c = responseJSON.weather[0].description.charAt(0).toUpperCase();
                                            var weatherDescriptionArray = responseJSON.weather[0].description.split('');
                                            weatherDescriptionArray[0] = c;
                                            weatherDescriptionArray = weatherDescriptionArray.join('');
                                            responseJSON.weather[0].description = weatherDescriptionArray;
                                            
                                            that.weather = responseJSON;
                                            console.log(that.weather)
                                        },
                                        function(response){
                                            console.log("ERROR!");
                                            console.log(response);
                                        }
            );
    }

    goBack(){
         this.router.navigate(['/city']);
    }


}