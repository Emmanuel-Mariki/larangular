import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }from '@angular/forms';

import { LoginService } from './login/login.service';
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login";
import { RegisterService } from './register/register.service';
import { RegisterComponent } from "./register/register";
import { ForgotPassComponent } from "./forgot/forgot.pass";
import { AuthRouting, AuthRouteProviders }  from './auth.routing'

@NgModule({
  imports:     
  [
    AuthRouting,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations:
  [ 
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
    
  ],
  exports:      
  [ 
    AuthComponent, 
  ],
  providers:    
  [RegisterService,LoginService,AuthRouteProviders ]
})

export class AuthModule{

}