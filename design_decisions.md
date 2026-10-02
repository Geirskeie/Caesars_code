### Valg av språk/rammeverk

Min løsning: Ren TypeScript
Hvorfor: Det jeg er mest kjent med, enkelt å implementere, gjør koden tydeligere med typesjekking, enkel testing, og kan gjenbrukes i en webapplikasjon uten store endringer.
Alternativ: TypeScript med Next.js, C#, Python
Hvorfor ikke:
Next.js: Ville vært overkill for en så liten applikasjon, for mye rutinglogikk osv.
Python: Godt alternativ, ville sannsynligvis vært mitt andrevalg for denne oppgaven. Python hadde vært litt enklere for en ren terminalapp, med mindre oppsett. Jeg valgte likevel TypeScript fordi det er der jeg skriver best kode, og ekstrakostnaden var bare noen minutter med oppsett.
C#: Mer oppsett enn nødvendig for en liten applikasjon. Bedre egnet for en større backendapplikasjon.

### Alfabet

Min løsning: 29 bokstaver (30 med spcace)
Hvorfor: Oppgaveeksempelet er på norsk
Alternativ: Bare bruke 26 bokstaver (det engelske alfabetet)
Hvorfor ikke: En versjon med 26 bokstaver ville vært enklere, men de tre siste bokstavene (ÆØÅ) ville enten gått gjennom ukryptert eller ødelagt systemet helt (ikke ideelt).

### Wrapping

Hver bokstavs posisjon forskyves med x og pakkes rundt med modulo, slik at alfabetet "starter på nytt" når det når slutten.
Eksempel: x=1, Å=A

### Space

Min løsning: Gjøre det samme som oppgaveeksempelet og legge til mellomrom som tegn nummer 30.
Hvorfor: For å kunne løse oppgaver i samme format som oppgaveeksempelet
Alternativ: Behandle mellomrom som vanlig mellomrom, slik som i den opprinnelige Cæsars kode
Hvorfor ikke: Enklere og samsvarer med den opprinnelige definisjonen, men resultatet ville ikke samsvart med oppgaveeksempelet, så jeg ville ikke kunne bruke det til å verifisere løsningen min.
Sidegevinst (som ikke påvirket beslutningen min): Koden blir vanskeligere å knekke når man ikke vet hvor mange ord det er, og hvor ordene starter og slutter.

### Spesialtegn

Min løsning: Sendes gjennom uendret.
Hvorfor: Både originalen og oppgaveeksempelet har lite eller ingen tegnsetting, så det finnes ingen gode eksempler på hvordan det skal håndteres. Jeg ser også at linjeskift er uendret fra eksempelet til dekrypteringen, noe som får meg til å tro at det er slik de fleste spesialtegn bør håndteres.
Alternativ: Fjerne spesialtegnene eller kryptere dem
Hvorfor ikke: Å fjerne dem ville gitt et renere resultat, men vi ville mistet verdifull informasjon. Tegnsetting ville forsvunnet, noe som kan endre hvordan teksten oppfattes.
Å kryptere tegnene ville betydd å legge flere tegn til alfabetet, noe som ikke er i samsvar med oppgaveeksempelet.

### Store og små bokstaver

Min løsning: Beholde original store/små bokstaver
Hvorfor: Samsvarer med både oppgaveeksempelet og eksempelet med Cæsars kode
Alternativ: Konvertere til store eller små bokstaver
Hvorfor ikke: Informasjon ville fort gått tapt. Egennavn, setningsstart og forkortelser (f.eks. "Bergen" eller "NAV") blir små bokstaver, så å kryptere og dekryptere gir ikke tilbake den opprinnelige teksten.

# Testing

Min løsning: Valgte å bruke Vitest
Hvorfor: Kan syntaxen fra før av via Jest, og gir bedre utskrifter enn Node sin innebygde test runner
Alternativ: Jest og Node sin innebygde test runner
Hvorfor ikke: Jest er litt eldre, mens Vitest er mer moderne og raskere. Node sin innebygde test runner er litt dårligere feilmeldinger og har en annerledes syntax enn jeg er vant til fra jest. Node har fordelen med at den ikke har noen avhengigheter,
