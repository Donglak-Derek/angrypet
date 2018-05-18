import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Service
import { HttpService } from './http.service';

//Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetNewComponent } from './pet/pet-new/pet-new.component';
import { PetShowComponent } from './pet/pet-show/pet-show.component';
import { PetEditComponent } from './pet/pet-edit/pet-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetListComponent,
    PetNewComponent,
    PetShowComponent,
    PetEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
