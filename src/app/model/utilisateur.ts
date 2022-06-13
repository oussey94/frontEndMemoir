import { Role } from "./role";

export class Utilisateur {
    
    idUser: number;
    nom: string;
    prenom: string;
    email: string;
    userName: string;
    password: string;
    telephone1: number;
    telephone2: number;
    adresse: string;
    age: number;
    ville: string;
    troles:Role[];

}
