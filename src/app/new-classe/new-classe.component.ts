import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Variables} from '../Variables';

@Component({
  selector: 'app-new-classe',
  templateUrl: './new-classe.component.html',
  styleUrls: ['./new-classe.component.scss']
})
export class NewClasseComponent implements OnInit {

  response: any;
  link = [];
  public url = 'http://localhost:8080/InscriptionClasse/enregistrement/';

  constructor(private router: Router, private http: HttpClient, private variable: Variables) {
  }

  ngOnInit() {
  }

  Valider(newClasse) {
    console.log(newClasse);
    this.http.post(this.url + newClasse.libelle + '/' + newClasse.filiere + '/' + newClasse.niveau, newClasse.libelle).subscribe(
      (response) => {
        this.response = response;
        if (this.response.returnMsg === 'success') {
          console.log('Enregistrement reussi !');
          this.link = ['SuccessClasse'];
          this.router.navigate(this.link);
        } else {
          console.log('Echec !');
        }

      },
      (error) => {
        console.log('Erreur', error, HttpErrorResponse);
      },
      () => {
        console.log('Enregistrement reussi et termine !');
      }
    );
  }
}

