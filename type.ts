interface Smartphone {
  credito: number;
  numeroChiamate: number;
  ricarica(ricaricaEffettuata: number): void;
  chiamata(minutiDurata: number): void;
  getNumeroChiamate(): number;
  chiamata404(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number = 0;
  numeroChiamate: number = 0;
  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
  }
  ricarica(ricaricaEffettuata: number): void {
    this.credito += ricaricaEffettuata;
  }

  chiamata404(): number {
    return this.credito;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  chiamata(minutiChiamata: number): void {
    if (this.credito === 0 || this.credito - minutiChiamata * 0.2 < 0) {
      console.log("non puoi chiamare");
    } else {
      this.credito -= minutiChiamata * 0.2;
      this.numeroChiamate += 1;
    }
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const user1 = new User("Gianmarco", "Arzanese");

user1.ricarica(5);
user1.chiamata(10);
user1.chiamata(8);
console.log(user1.nome, "hai credito residuo di :", user1.chiamata404(), "$");
console.log("chiamata effettuate : ", user1.getNumeroChiamate());

const user2 = new User("Riccardo", "Santilli");

user2.ricarica(10000);
user2.chiamata(200);
user2.chiamata(120);
user2.azzeraChiamate();
user2.chiamata(40);
console.log(
  user2.nome,
  user2.cognome,
  "hai credito residuo di :",
  user2.chiamata404(),
  "$"
);
console.log("chiamata effettuate : ", user2.getNumeroChiamate());
