import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { ApplicationsComponent } from './applications/applications.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CustomerDetailService } from './customer-detail.service';
import { CustomersComponent } from './customers/customers.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { FeaturesComponent } from './features/features.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IncomeFormComponent } from './income-form/income-form.component';
import { LoanformComponent } from './loanform/loanform.component';
import { PropertyformComponent } from './propertyform/propertyform.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},

  {path:'userpage/:id',redirectTo:'homepage',pathMatch:'full'},
  {path:'adminpage/:id',redirectTo:'homepage',pathMatch:'full'},
  {path:"userlogin",component:UserLoginComponent},
  {path:"features",component:FeaturesComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"userpage/:id/incomeform/:id",component:IncomeFormComponent},
  {path:"userpage/:id",component:UserpageComponent},
  {path:"adminpage/:id",component:AdminpageComponent},
  {path:"userpage/:id/incomeform/:id/propertyform/:id",component:PropertyformComponent},
  {path:"userpage/:id/incomeform/:id/propertyform/:id/document/:id/loanform/:id",component:LoanformComponent},
  {path:"userpage/:id/incomeform/:id/propertyform/:id/document/:id",component:DocumentFormComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"userpage/:id/applicationStatus/:id",component:ApplicationStatusComponent},
  {path:"userpage/:id/balance/:id/applicationStatus/:id",component:ApplicationStatusComponent},
  {path:"userpage/:id/applicationStatus/:id/balance/:id",component:AccountBalanceComponent},
  {path:"userpage/:id/balance/:id",component:AccountBalanceComponent},
  {path:"adminpage/:id/customers/applications",component:ApplicationsComponent},
  {path:"adminpage/:id/applications/:id",component:ApplicationsComponent},
  {path:"applications/:id",component:ApplicationsComponent},
  {path:"adminpage/:id/applications/customers/:id",component:CustomersComponent},
  {path:"adminpage/:id/customers/:id",component:CustomersComponent},
  {path:"adminpage/:id/accounts/:id",component:AccountsComponent},
  {path:"customers/:id",component:CustomersComponent},
  {path:"accounts/:id",component:AccountsComponent},
  {path:"adminpage/:id/features",component:FeaturesComponent},
  {path:"adminpage/:id/aboutus",component:AboutUsComponent},
  {path:"adminpage/:id/calculator",component:CalculatorComponent},
  {path:"userpage/:id/features",component:FeaturesComponent},
  {path:"userpage/:id/aboutus",component:AboutUsComponent},
  {path:"userlogin/registration",component:RegistrationComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"homepege",component:HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
