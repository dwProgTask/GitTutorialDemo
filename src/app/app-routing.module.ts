import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountListComponent} from "./accounts/account-list.component";
import {AccountAddComponent} from "./accounts/account-add.component";
import {AccountEditComponent} from "./accounts/account-edit.component";
import {AccountTransactionComponent} from "./accounts/account-transaction.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'accounts', component: AccountListComponent},
  {path: 'add-account', component: AccountAddComponent},
  {path: 'account/:id', component: AccountEditComponent},
  {path: 'account/transaction/:accountNumber', component: AccountTransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
