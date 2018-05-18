import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
	pet: Pet;
	errors: string[];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	// this.newPet = { name: "", type: "", description: "", skill01: "", skill02: "", skill03: ""};
  	this.pet = new Pet();
  	this.errors = [];
  }
  onSubmit() {
	let observable = this._httpService.addPet(this.pet);
	  	observable.subscribe(
	  		(pet) => {
	  			console.log(pet);
	  			// this.pet = pet;
	  		}, 
	  		(err) => {
	  			this.errors = err.error;
	  			console.log(this.errors);
	  		});
	  }
    // this.pet = { name: "", type: "", description: "", skill01: "", skill02: "", skill03: ""};
    
  }

