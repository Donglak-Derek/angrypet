import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Pet } from './pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
title = 'Pet Shelter';
  pets: any = [];
  pet = "";
  newPet: any;
  editPet: any;
  isEdit: boolean= false;
  
  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
    this.getPetsFromService();

        //without data
    this.newPet = { title: "", description: "" }

      // initialize data already
    // this.newPet = {title: "Learn Angular Forms", description: "Two way binding is awesome!"}
    this.editPet = {title: "", description: ""}
    // this.editPet = {title: "data.title", description: "data.description"}
  }

  getPetsFromService(){
    let observable = this._httpService.getPets()
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.pets = data;
      
    })
  }

  onSubmit() {
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newPet = { title: "", description: "" }
    })
  }

  toggleEdit(pet){

    // this.editPet._id = pet._id;
    console.log(pet._id);
    this.editPet = {_id: pet._id, title: pet.title, description: pet.description}
    this.isEdit = !this.isEdit;
  }

  delete(pet){
    let observabel = this._httpService.deletePets(pet);
    observabel.subscribe(data => {
      console.log("Delete data form database", pet)
    })
  }

  onEditSubmit(editPet){
    console.log(this.editPet, "in Edit");
    let observabel = this._httpService.editPets(this.editPet);
    observabel.subscribe(data => {
      console.log("Edit data form database", data)
      this.editPet = { title: this.editPet.title, description: this.editPet.description}
      console.log("After Edit data form database", this.editPet)
    })
  }

}