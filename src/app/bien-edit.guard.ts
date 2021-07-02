import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditBienComponent } from './edit-bien/edit-bien.component';

@Injectable({
  providedIn: 'root'
})
export class BienEditGuard implements CanDeactivate<EditBienComponent> {
  canDeactivate( component: EditBienComponent): boolean {
    if(component.bienForm.dirty){ //qlq chose à l'intérieur
      const bienName = component.bienForm.get('hotelName').value || 'Nouveau bien';
      return confirm(`Voulez-vous annuler les changements effectués sur ${bienName}`);
    }
    return true;
  }
  
}
