export class Eleve {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  lieuNaissance: string;
  nomPere: string;
  nomMere: string;
  telPere: number;
  telMere: number;
  profPere: string;
  profMere: string;
  comment: string;

  constructor(id, nom, prenom, dateNaissance, lieuNaissance, nomPere, nomMere, telPere, telMere, profPere, profMere, comment) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.lieuNaissance = lieuNaissance;
    this.nomPere = nomPere;
    this.nomMere = nomMere;
    this.telPere = telPere;
    this.telMere = telMere;
    this.profPere = profPere;
    this.profMere = profMere;
    this.comment = comment;

  }

}
