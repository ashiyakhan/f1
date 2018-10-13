import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ListingsComponent } from './listings/listings.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostpropertyComponent } from './postproperty/postproperty.component';
import { SearchhomeComponent } from './common/searchhome/searchhome.component';
import { SinglepropertyComponent } from './singleproperty/singleproperty.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { PricingComponent } from './pricing/pricing.component';
import {RouterModule,Routes} from '@angular/router';
import{HttpClientModule}from'@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes =[
  {"path":"home","component":HomeComponent},
  {"path":"aboutus","component":AboutusComponent},
  {"path":"signin","component":SigninComponent},
  {"path":"listings","component":ListingsComponent},
  {"path":"singleproperty","component":SinglepropertyComponent},
  {"path":"contact","component":ContactComponent},
  {"path":"blogs","component":BlogsComponent},
  {"path":"signup","component":SignupComponent},
  {"path":"","redirectTo":"home","pathMatch":"full"},
  {"path":"**","component":PagenotfoundComponent}];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    BlogsComponent,
    ListingsComponent,
    ContactComponent,
    SignupComponent,
    SigninComponent,
    ForgotpwdComponent,
    PagenotfoundComponent,
    PostpropertyComponent,
    SearchhomeComponent,
    SinglepropertyComponent,
    ResetpwdComponent,
    PricingComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes,{useHash:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export const routingComponent =[HomeComponent,AboutusComponent,ListingsComponent,]