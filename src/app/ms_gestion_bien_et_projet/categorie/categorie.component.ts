import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/gestion-bien-et-projet/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public categories : Categorie[];

  constructor(private categoriesService: CategorieService) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(t => {
      this.categories = t;
    });
  }

}
