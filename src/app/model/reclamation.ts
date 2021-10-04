import { Contrat } from "./contrat";
import { Etat } from "./etat";

export class Reclamation {
    idReclamation: number;
    commentaire: string;
    //contrat_id: number;
    contrat: Contrat;
    //etat_id: number;
    etat: Etat
}

//https://frontbackend.com/spring-boot/angular-11-spring-boot-2-mysql
