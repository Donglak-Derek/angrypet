import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-show',
  templateUrl: './pet-show.component.html',
  styleUrls: ['./pet-show.component.css']
})
export class PetShowComponent implements OnInit {
	pet: Pet;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  	const pet = this._httpService.pet;
	if (pet) {
  		this.pet = pet;
  	}
  	
  }

}
