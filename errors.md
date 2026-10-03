### Feil funnet under testing

En test for mellomrom feilet: mellomrom ble kryptert til en stor bokstav ("C") i stedet for en liten ("c").

Årsak: Sjekken `char === char.toUpperCase()` er sann for alle tegn uten stor/liten variant, inkludert mellomrom. Mellomrom ble derfor behandlet som en stor bokstav og hentet fra det store alfabetet.

Løsning: Endret sjekken til `char !== char.toLowerCase()`, som bare er sann for ekte store bokstaver. Mellomrom hentes nå fra det lille alfabetet, slik at resultatet matcher oppgavens eksempel.

For gammel versjon av Node gjorde at ts ikke kjørte. Oppdaterte node til nyere versjon.

- Endret fra console.log til process.stdout.write for å få tilbake nøyaktig originalteksten
- Endret fra å kun sjekke best key til å lage candidates liste med lagring av x kandidater med minst avvik i forhold til english frequencies
- Endret fra å lagre key, score og text spearat til å ha et større objekt
