import { Reclamation } from './reclamation';
import { Visite } from 'src/app/model/visite';
import { Client } from './client';
export class Contrat {
    idContrat: number;
    caution: number;
    prixEffectif: number;
    dateEffectif: Date;
    dureeEnNbreDeMois: number;
    description: string;
    visite: Visite;
    reclamation: Reclamation;
    client: Client;
}
