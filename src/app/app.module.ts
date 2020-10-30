import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewClasseComponent } from './new-classe/new-classe.component';
import { SuccessClasseComponent } from './success-classe/success-classe.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {Variables} from './Variables';
import { NewEleveComponent } from './new-eleve/new-eleve.component';
import { SuccessEleveComponent } from './success-eleve/success-eleve.component';
import { NewEleve2Component } from './new-eleve2/new-eleve2.component';
import { ListEleveComponent } from './list-eleve/list-eleve.component';
import { ListClasseComponent } from './list-classe/list-classe.component';




const routes: Routes = [
  {path: 'ListEleve', component: ListEleveComponent},
  {path: 'ListClasse', component: ListClasseComponent},
  {path: 'NewClasse', component: NewClasseComponent},
  {path: 'SuccessClasse', component: SuccessClasseComponent},
  {path: 'NewEleve/1', component: NewEleveComponent},
  {path: 'NewEleve/2', component: NewEleve2Component},
  {path: 'SuccessEleve', component: SuccessEleveComponent},
];

export const ROUTING = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    NewClasseComponent,
    SuccessClasseComponent,
    NewEleveComponent,
    SuccessEleveComponent,
    NewEleve2Component,
    ListEleveComponent,
    ListClasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
