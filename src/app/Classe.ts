export class Classe {
  libelle: string;
  filiere: string;
  niveau: number;

  constructor(filiere = ' ', libelle = ' ', niveau = 1) {
    this.filiere = filiere;
    this.libelle = libelle;
    this.niveau = niveau;
  }

}
