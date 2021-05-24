import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBienComponent } from './add-bien/add-bien.component';
import { DetailBienGuard } from './detail-bien.guard';
import { DetailBienComponent } from './detail-bien/detail-bien.component';
import { LesBiensImmobilliersComponent } from './les-biens-immobilliers/les-biens-immobilliers.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';

const routes: Routes = [
  {path: 'home', component: PageAcceuilComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'biens', component: LesBiensImmobilliersComponent},
  {path: 'biens/:id', component: DetailBienComponent, canActivate:[DetailBienGuard]},
  {path: 'add-bien', component: AddBienComponent},
  {path: '**', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
