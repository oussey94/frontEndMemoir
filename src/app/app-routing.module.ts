import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { BienEditGuard } from './bien-edit.guard';
import { DetailBienGuard } from './detail-bien.guard';
import { DetailBienComponent } from './detail-bien/detail-bien.component';
import { EditBienComponent } from './edit-bien/edit-bien.component';
import { LesBiensImmobilliersComponent } from './les-biens-immobilliers/les-biens-immobilliers.component';
import { AddVisiteComponent } from './ms_gestion_clients/add-visite/add-visite.component';
import { DetailsVisiteComponent } from './ms_gestion_clients/details-visite/details-visite.component';
import { EditVisiteComponent } from './ms_gestion_clients/edit-visite/edit-visite.component';
import { VisitesComponent } from './ms_gestion_clients/visites/visites.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';

const routes: Routes = [
  {path: 'home', component: PageAcceuilComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'biens', component: LesBiensImmobilliersComponent},
  {path: 'visites', component: VisitesComponent},

  {     path: 'biens/:id', component: DetailBienComponent, 
        canActivate: [DetailBienGuard]  },
  {path: 'visites/:id', component: DetailsVisiteComponent},

  {path: 'add-user', component: AddUserComponent},
  {path: 'add-visite', component: AddVisiteComponent},

  {    path: 'biens/:id/edit', component: EditBienComponent, 
       canDeactivate: [BienEditGuard]
  },
  {path: 'updateVisites/:id', component: EditVisiteComponent},
  
  {path: '**', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
