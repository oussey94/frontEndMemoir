import { Time } from "@angular/common";
import { Bien } from "./bien.model";
import { Client } from "./client";
import { Contrat } from "./contrat";

export class Visite {
    idVisite: number;
    dateVisite: Date;
    heureVisite: Time;
    bien: Bien;
    contrat: Contrat;
    clent: Client;
}
