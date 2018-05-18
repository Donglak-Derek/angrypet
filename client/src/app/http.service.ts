import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet} from './pet/pet';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	pet: Pet;

  constructor(private _http: HttpClient) { 
  	 this.getPets();

  }
  	getPets(){
   		 return this._http.get('/pets');
}
	addPet(newPet){
    	return this._http.post('/pets', newPet)
}

	deletePets(pet){
		console.log("in service.ts", pet);
		return this._http.delete(`/pets/${pet._id}`, pet)
}

	editPets(editPet){
		console.log("Edit in service.ts", editPet._id);
		return this._http.patch(`/pets/${editPet._id}`, editPet)
}

}