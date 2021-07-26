import { Contrat } from "./contrat";
import { Etat } from "./etat";

export class Reclamation {
    idReclamation: number;
    commentaire: string;
    contrat: Contrat;
    etat: Etat
}
