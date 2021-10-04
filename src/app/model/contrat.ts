import { Bien } from './bien.model';
import { Reclamation } from './reclamation';
import { Visite } from 'src/app/model/visite';
import { Client } from './client';
export class Contrat {
    idContrat: number;
    caution: number;
    prixEffectif: number;
    dateEffectif: Date;
    dureeEnNbrDeMois: number;
    description: string;
    client: Client;
    bien: Bien
    clientID: number;
    bienImmobiliereID: number;
}
