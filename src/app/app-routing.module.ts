import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './lender/login/login.component';
import { RegisterComponent } from './lender/register/register.component';
import { ListComponent } from './bike/list/list.component';
import { EditComponent } from './bike/edit/edit.component';
import { AddComponent } from './bike/add/add.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"bike/list",component:ListComponent,canActivate:[AuthGuardService]},
  {path:"bike/edit/:id",component:EditComponent,canActivate:[AuthGuardService]},
  {path:"save",component:AddComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
