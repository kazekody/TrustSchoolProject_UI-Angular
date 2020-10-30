import { Injectable } from '@angular/core';
import { Classe } from './Classe';

@Injectable({
  providedIn: 'root'
}
)
export class Variables {
  selected = true;
  url = 'http://localhost:8080/InscriptionClasse/enregistrement/';
  url2 = 'http://localhost:4200';
  listeClasse: Classe [] = [];
}
