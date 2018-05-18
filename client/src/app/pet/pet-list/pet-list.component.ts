import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
	pets: Pet[];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	this.pets = [];
  	this.getPets();
  }
	getPets(): void {
      let observable = this._httpService.getPets();
   	 observable.subscribe( (pets: Pet[]) => {
   	 	console.log("Got our Pets!")
   	 	this.pets = pets;
   	});
   	}
   	info(pet) : void {
   		this._httpService.pet = pet;
   	}
}
