import { Categorie } from './categorie';
import { Projet } from "./projet";
import { Proprietaire } from './proprietaire';

export class Bien{
    id: number;
    hotelName: string;
    description: string;
    price: number;
    imageUrl: string;
    rating: number;
    projet: Projet;
    categorie: Categorie;
    proprietaire: Proprietaire;
}