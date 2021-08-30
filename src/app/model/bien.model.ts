import { Categorie } from './categorie';
import { Projet } from "./projet";
import { Proprietaire } from './proprietaire';

export class Bien{
    /*
    id: number;
    hotelName: string;
    description: string;
    price: number;
    imageUrl: string;
    rating: number;
    projet: Projet;
    categorie: Categorie;
    proprietaire: Proprietaire;
    */

    id: number;
    nomBien: string;
    available: boolean;
    photoName: string;
    prix: number;
    localisation: string;
    selected: boolean;
    taille: number;
    description: string;
    rating: number;

}