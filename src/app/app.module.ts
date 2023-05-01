import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {AccountListComponent} from "./accounts/account-list.component";
import {AccountAddComponent} from "./accounts/account-add.component";
import {AccountEditComponent} from "./accounts/account-edit.component";
import {AccountTransactionComponent} from "./accounts/account-transaction.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountListComponent,
    AccountAddComponent,
    AccountEditComponent,
    AccountTransactionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
