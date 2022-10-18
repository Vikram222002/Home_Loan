import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { PropertyformComponent } from './propertyform/propertyform.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { LoanformComponent } from './loanform/loanform.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ApplicationsComponent } from './applications/applications.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { HomepageComponent } from './homepage/homepage.component';
import { IncomeFormComponent } from './income-form/income-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserpageComponent,
  
    PropertyformComponent,
    DocumentFormComponent,
    LoanformComponent,
    AdminLoginComponent,
    AdminpageComponent,
    ApplicationsComponent,
    CustomersComponent,
    
    AboutUsComponent,
    FeaturesComponent,
    CalculatorComponent,
    RegistrationComponent,
    AccountBalanceComponent,
    ApplicationStatusComponent,
    AccountsComponent,
    HomepageComponent,
    IncomeFormComponent
    
  ],
  imports: [
    BrowserModule,
 AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule, ValidateEqualModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
