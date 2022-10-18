import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatlistComponent } from './catlist/catlist.component';
import { CatAddComponent } from './cat-add/cat-add.component';

import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CatlistComponent,
    CatAddComponent,
    CatDetailsComponent,
    CatEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
