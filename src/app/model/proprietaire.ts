import { Role } from './role';
import { Utilisateur } from './utilisateur';


export class Proprietaire {

    idProprietaire: number;
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
    roles:Role[];

}
