import { UtilisateurService } from './../../services/utilisateur.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Utilisateur } from 'src/app/model/utilisateur';

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.css']
})
export class EditUtilisateurComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditUtilisateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Utilisateur
  ) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      telephone1: ['', Validators.required],
      telephone2: ['', Validators.required],
      adresse: ['', Validators.required],
      age: ['', Validators.required],
      ville: ['', Validators.required]
    });

    this.userForm.patchValue({
      nom: this.data.nom,
      prenom: this.data.prenom,
      email: this.data.email,
      userName: this.data.userName,
      password: this.data.password,
      telephone1: this.data.telephone1,
      telephone2: this.data.telephone2,
      adresse: this.data.adresse,
      age: this.data.age,
      ville: this.data.ville
    });
  }

  public editUser(): void {
    this.data.nom = this.userForm.value.nom;
    this.data.prenom = this.userForm.value.prenom;
    this.data.email = this.userForm.value.email;
    this.data.userName = this.userForm.value.userName;
    this.data.password = this.userForm.value.password;
    this.data.telephone1 = this.userForm.value.telephone1;
    this.data.telephone2 = this.userForm.value.telephone2;
    this.data.adresse = this.userForm.value.adresse;
    this.data.age = this.userForm.value.age;
    this.data.ville = this.userForm.value.ville;

    this.dialogRef.close(Object.assign(new Utilisateur(), this.userForm.value));
  }

}
