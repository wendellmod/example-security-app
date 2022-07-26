import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthenticateComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,

    // --
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
