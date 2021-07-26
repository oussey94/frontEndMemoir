import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LesBiensImmobilliersComponent } from './ms_gestion_bien_et_projet/les-biens-immobilliers/les-biens-immobilliers.component';
import { NotationComponent } from './shared/notation/notation.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { DetailBienComponent } from './ms_gestion_bien_et_projet/detail-bien/detail-bien.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditBienComponent } from './ms_gestion_bien_et_projet/edit-bien/edit-bien.component';
import { VisitesComponent } from './ms_gestion_clients/visites/visites.component';
import { EditVisiteComponent } from './ms_gestion_clients/edit-visite/edit-visite.component';
import { DetailsVisiteComponent } from './ms_gestion_clients/details-visite/details-visite.component';
import { ContratsComponent } from './ms_gestion_clients/contrats/contrats.component';
import { EditContratComponent } from './ms_gestion_clients/edit-contrat/edit-contrat.component';
import { DetailsContratComponent } from './ms_gestion_clients/details-contrat/details-contrat.component';
import { ReclamationsComponent } from './ms_gestion_clients/reclamations/reclamations.component';
import { EditReclamationComponent } from './ms_gestion_clients/edit-reclamation/edit-reclamation.component';
import { DetailsReclamationComponent } from './ms_gestion_clients/details-reclamation/details-reclamation.component';
import { EtatsComponent } from './ms_gestion_clients/etats/etats.component';
import { EditEtatComponent } from './ms_gestion_clients/edit-etat/edit-etat.component';
import { DetailsEtatComponent } from './ms_gestion_clients/details-etat/details-etat.component';
import { AddVisiteComponent } from './ms_gestion_clients/add-visite/add-visite.component';
import { AddEtatComponent } from './ms_gestion_clients/add-etat/add-etat.component';
import { AddContratComponent } from './ms_gestion_clients/add-contrat/add-contrat.component';
import { AddReclamationComponent } from './ms_gestion_clients/add-reclamation/add-reclamation.component';
import { CategorieComponent } from './ms_gestion_bien_et_projet/categorie/categorie.component';
import { ProjetComponent } from './ms_gestion_bien_et_projet/projet/projet.component';
import { DetailsProjetComponent } from './ms_gestion_bien_et_projet/details-projet/details-projet.component';
import { EditProjetComponent } from './ms_gestion_bien_et_projet/edit-projet/edit-projet.component';
import { AddProjetComponent } from './ms_gestion_bien_et_projet/add-projet/add-projet.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LesBiensImmobilliersComponent,
    NotationComponent,
    PageAcceuilComponent,
    DetailBienComponent,
    AddUserComponent,
    EditBienComponent,
    VisitesComponent,
    EditVisiteComponent,
    DetailsVisiteComponent,
    ContratsComponent,
    EditContratComponent,
    DetailsContratComponent,
    ReclamationsComponent,
    EditReclamationComponent,
    DetailsReclamationComponent,
    EtatsComponent,
    EditEtatComponent,
    DetailsEtatComponent,
    AddVisiteComponent,
    AddEtatComponent,
    AddContratComponent,
    AddReclamationComponent,
    CategorieComponent,
    ProjetComponent,
    DetailsProjetComponent,
    EditProjetComponent,
    AddProjetComponent
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
