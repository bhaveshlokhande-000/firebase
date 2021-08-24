import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire"
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
  ]
})
export class UsersModule { }
