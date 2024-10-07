var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    User.prototype.ricarica = function (ricaricaEffettuata) {
        this.credito += ricaricaEffettuata;
    };
    User.prototype.chiamata404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.chiamata = function (minutiChiamata) {
        if (this.credito === 0 || this.credito - minutiChiamata * 0.2 < 0) {
            console.log("non puoi chiamare");
        }
        else {
            this.credito -= minutiChiamata * 0.2;
            this.numeroChiamate += 1;
        }
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var user1 = new User("Gianmarco", "Arzanese");
user1.ricarica(5);
user1.chiamata(10);
user1.chiamata(8);
console.log(user1.nome, "hai credito residuo di :", user1.chiamata404(), "$");
console.log("chiamata effettuate : ", user1.getNumeroChiamate());
var user2 = new User("Riccardo", "Santilli");
user2.ricarica(10000);
user2.chiamata(200);
user2.chiamata(120);
user2.azzeraChiamate();
user2.chiamata(40);
console.log(user2.nome, user2.cognome, "hai credito residuo di :", user2.chiamata404(), "$");
console.log("chiamata effettuate : ", user2.getNumeroChiamate());
