import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatAddComponent } from './cat-add/cat-add.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { CatlistComponent } from './catlist/catlist.component';

const routes: Routes = [
  {path:"",component:CatlistComponent},
  {path:"catlist",component:CatlistComponent},
  {path:"cat-add",component:CatAddComponent},
  {path:"edit/:id",component:CatEditComponent},
  {path:"details/:id",component:CatDetailsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
