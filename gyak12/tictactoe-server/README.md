KLIENS ÁLTAL KÜLDHETŐ ÜZENETEK

create
Szoba létrehozása.
Paraméterek: szoba azonosítója

join
Szobához való csatlakozás.
Paraméterek: szoba azonosítója
Események: opponent_joined

reqTurn
Aktuális lépés felküldése.
Paraméterek: pozíció, érték (X/O), szoba azonosítója
Események: playerTurn

reqRestart
Játék újraindítása.
Paraméterek: szoba azonosítója
Események: restart

SZERVERTŐL KAPOTT ÜZENETEK

opponent_joined
A másik játékos csatlakozásakor hívódik meg.
Adatok: -

playerTurn
A másik játékos lépése után hívódik meg.
Adatok: pozíció, érték (X/O)

restart
A másik játékos által kezdeményezett új játék indításánál hívódik meg.
Adatok: -