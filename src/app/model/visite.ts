import { Time } from "@angular/common";
import { Bien } from "./bien.model";
import { Client } from "./client";
import { Contrat } from "./contrat";

export class Visite {
    idVisite: number;
    dateVisite: Date;
    heureVisite: Time;
    clientBean: Client;
    bienImmobiliereBean: Bien
    clientID: number;
    bienImmobiliereID: number;
}
