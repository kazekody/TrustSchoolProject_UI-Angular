import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewClasseComponent } from './new-classe/new-classe.component';
import { SuccessClasseComponent } from './success-classe/success-classe.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {Variables} from './Variables';




const routes: Routes = [
  {path: 'NewClasse', component: NewClasseComponent},
  {path: 'SuccessClasse', component: SuccessClasseComponent},
];

export const ROUTING = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    NewClasseComponent,
    SuccessClasseComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
  ],
  providers: [Variables],
  bootstrap: [AppComponent]
})
export class AppModule { }
