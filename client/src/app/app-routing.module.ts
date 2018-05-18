import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetNewComponent } from './pet/pet-new/pet-new.component';
import { PetShowComponent } from './pet/pet-show/pet-show.component';
import { PetEditComponent } from './pet/pet-edit/pet-edit.component';
import { PetComponent } from './pet/pet.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	
	{ path: 'pet', component: PetComponent, children: [
		{ path: '', pathMatch: 'full', component: PetListComponent }, 
		// localhost:6789/pets/new
		{ path: "new", component: PetNewComponent},
		// localhost:6789/pets/id
		{ path: "new/:id", component: PetShowComponent},
		// localhost:6789/edit/98237988sfd89s7f98dsf
		{ path: 'edit/:id', component: PetEditComponent},
	]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
