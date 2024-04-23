import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

const appRoute: Routes =[
  {path:'', component:HomeComponent},
  {path:"About/:id", component:AboutComponent},
  {path:"form/:id", component:FormComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
