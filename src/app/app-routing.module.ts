import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { BienEditGuard } from './bien-edit.guard';
import { DetailBienGuard } from './detail-bien.guard';
import { AddProjetComponent } from './ms_gestion_bien_et_projet/add-projet/add-projet.component';
import { DetailBienComponent } from './ms_gestion_bien_et_projet/detail-bien/detail-bien.component';
import { DetailsProjetComponent } from './ms_gestion_bien_et_projet/details-projet/details-projet.component';
import { EditBienComponent } from './ms_gestion_bien_et_projet/edit-bien/edit-bien.component';
import { EditProjetComponent } from './ms_gestion_bien_et_projet/edit-projet/edit-projet.component';
import { LesBiensImmobilliersComponent } from './ms_gestion_bien_et_projet/les-biens-immobilliers/les-biens-immobilliers.component';
import { ProjetComponent } from './ms_gestion_bien_et_projet/projet/projet.component';
import { UpdateBienComponent } from './ms_gestion_bien_et_projet/update-bien/update-bien.component';
import { AddContratComponent } from './ms_gestion_clients/add-contrat/add-contrat.component';
import { AddEtatComponent } from './ms_gestion_clients/add-etat/add-etat.component';
import { AddReclamationComponent } from './ms_gestion_clients/add-reclamation/add-reclamation.component';
import { AddVisiteComponent } from './ms_gestion_clients/add-visite/add-visite.component';
import { ContratsComponent } from './ms_gestion_clients/contrats/contrats.component';
import { DetailsContratComponent } from './ms_gestion_clients/details-contrat/details-contrat.component';
import { DetailsEtatComponent } from './ms_gestion_clients/details-etat/details-etat.component';
import { DetailsReclamationComponent } from './ms_gestion_clients/details-reclamation/details-reclamation.component';
import { DetailsVisiteComponent } from './ms_gestion_clients/details-visite/details-visite.component';
import { EditContratComponent } from './ms_gestion_clients/edit-contrat/edit-contrat.component';
import { EditEtatComponent } from './ms_gestion_clients/edit-etat/edit-etat.component';
import { EditReclamationComponent } from './ms_gestion_clients/edit-reclamation/edit-reclamation.component';
import { EditVisiteComponent } from './ms_gestion_clients/edit-visite/edit-visite.component';
import { EtatsComponent } from './ms_gestion_clients/etats/etats.component';
import { ReclamationsComponent } from './ms_gestion_clients/reclamations/reclamations.component';
import { VisitesComponent } from './ms_gestion_clients/visites/visites.component';
import { ClientsComponent } from './ms_gestion_utilisateurs/clients/clients.component';
import { ProprietairesComponent } from './ms_gestion_utilisateurs/proprietaires/proprietaires.component';
import { UtilisateursComponent } from './ms_gestion_utilisateurs/utilisateurs/utilisateurs.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { AddBienComponent } from './ms_gestion_bien_et_projet/add-bien/add-bien.component';
import { LoginComponent } from './ms_gestion_utilisateurs/login/login.component';


const routes: Routes = [
  //{path: 'home', component: PageAcceuilComponent},
  {path: '', redirectTo: 'biens', pathMatch:'full'},
  {path: 'biens', component: LesBiensImmobilliersComponent},
  {path: 'visites', component: VisitesComponent},
  {path: 'reclamations', component: ReclamationsComponent},
  {path: 'etats', component: EtatsComponent},
  {path: 'contrats', component: ContratsComponent},
  {path: 'projets', component: ProjetComponent},
  {path: 'utilisateurs', component: UtilisateursComponent},
  {path: 'proprietaire', component: ProprietairesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'login', component: LoginComponent},

  {path: 'biens/:id', component: DetailBienComponent, canActivate: [DetailBienGuard] },
  {path: 'visites/:id', component: DetailsVisiteComponent},
  {path: 'reclamations/:id', component: DetailsReclamationComponent},
  {path: 'etats/:id', component: DetailsEtatComponent},
  {path: 'contrats/:id', component: DetailsContratComponent},
  {path: 'projets/:id', component: DetailsProjetComponent},

  {path: 'add-user', component: AddUserComponent},
  {path: 'add-visite', component: AddVisiteComponent},
  {path: 'add-contrat', component: AddContratComponent},
  {path: 'add-etat', component: AddEtatComponent},
  {path: 'add-reclamation', component: AddReclamationComponent},
  {path: 'add-projet', component: AddProjetComponent},
  {path: 'add-bien', component: AddBienComponent},


  {path: 'biens/:id/edit', component: EditBienComponent, canDeactivate: [BienEditGuard] },
  {path: 'bienss/:id', component: UpdateBienComponent, canDeactivate: [BienEditGuard] },

  {path: 'updateVisites/:id', component: EditVisiteComponent},
  {path: 'updateReclamations/:id', component: EditReclamationComponent},
  {path: 'updateEtats/:id', component: EditEtatComponent},
  {path: 'updateContrats/:id', component: EditContratComponent},
  {path: 'updateProjets/:id', component: EditProjetComponent},
  
  {path: '**', redirectTo: 'biens', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
