import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LesBiensImmobilliersComponent } from './les-biens-immobilliers/les-biens-immobilliers.component';
import { NotationComponent } from './shared/notation/notation.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { DetailBienComponent } from './detail-bien/detail-bien.component';
import { AddBienComponent } from './add-bien/add-bien.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LesBiensImmobilliersComponent,
    NotationComponent,
    PageAcceuilComponent,
    DetailBienComponent,
    AddBienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
