# Documentazione progetto Chat
1. Introduzione
- Informazioni sul progetto
- Abstract
- Scopo
1. Analisi
- Analisi del dominio
- Analisi dei mezzi
- Analisi e specifica dei requisiti
- Use case Pianificazione
1. Progettazione
- Design dell'architettura del sistema
- Design dei dati e database 
1. Implementazione
2. Test
- Protocollo di test
- Risultati test
- Mancanze/limitazioniu conosciute
1. Consuntivo
2. Conclusioni
- Sviluppi futuri
- Considerazioni personali
1. Sitografia
2. Allegati



# Introduzione
## Docenti di riferimento e responsabile progetto
 - Luca Muggiasca(responsabile di progetto).
 - Geo Pretirni(docente di riferimento).
### Scuola
- Scuola Arti e Mestieri di Trevano.
### Sezione 
- Informatica. 
### Anno
- Terzo.
### Modulo
- 306, Sviluppo progetti.
### Date
- Data di inizio: 02.09.2021
- Data di consegna progetto : 23.12.2021

# Abstract
Nell'ambiente scolastico della scuola arti e mestieri di Trevano non è attualmente presente nessuno tipo di contatto tra i vari studenti se non quello 
fisico tra i corridoi, nelle aulee o nei piazzali. La realizzazione di questo progetto punta a creare un sistema di messaggistica per coloro che sono 
registrati all'interno del sistema. Durante questi 3 mesi di lavoro cercherò di portare a termine un sistema con cui tutti gli allievi della scula
potranno comunicare in sicurezza ed in ogni momento. Il prodotto finale punta ad essere applicabile a qualunque sistema dotato di un AD(active directory)
in cui siano registrate delle persone con l'obbiettivo di poter accorciare i tempi di comunicazioni e di ridurre le barriere sociali scolastiche.
Il prodotto finale sarà un'applicazione web realizzata con ReastJS ed un sistema di memorizzazione dati ad ogetti(MongoDB).

# Scopo 
Questo primo progetto individuale non solo punta ad ampliare le conoscenze tecniche ma servirà da base di esperienza per poi realizzare il lavore di diploma 
del quarto anno. Inoltre grazie a quest'erperienza sarò in grado di combinare molti aspetti teorici appresi fin'ora come la creazione di database, la costruzione 
di interfacce web con linguaggi di markUp, la messa in piedi di strutture di comunicazione e hosting come server e web server ed infine questo lavoro mi insegnerà
cosa significa lavorare ad un ipotetico progetto in una ditta e di come affrontare e documentare ogni passaggio.


# Analsi

## Analisi del dominio
Ci sono molte applicazioni di messaggistica ai giorni d'oggi che offrono anche molte altre possibilità come le funzioni di messaggistica vocale , video etc..
Questo sistema si baserà sull'AD(active directory) scolastica e sarà in grado di fornire all'utente un ambiente accessibile solo ai membri del sistema scolastico per lo scambio di informazioni.

## Analisi e specifica dei requisiti
Il committente ha richiesto un applicativo web basato su un sistema di immagazzinamento dati ad oggetti. L'applicativo deve permettere ad un utente di poter comunicare all'interno di canali che possono essere aggiunti o tolti a piacimento.L'applicativo dispone di una gestione amministrativa dove gli utenti amministratori avranno accesso a delle funzionalità di moderazione aggiuntive quali: ban, monitoraggio log e broadcast di messaggi.

| ID  | REQUISITO 1    | 
| :------------- | :----------: |
| VERSIONE |  1.0  | 
| NOME | CREAZIONE DATABASE    | 
| SUB ID | REQUISITO    |
|  01| il database deve essere ad oggetti. |  
|  02| il database deve essere in MongoDB  | 


| ID  | REQUISITO 2   | 
| :------------- | :----------: |
| PRIORITÀ | 1|
|  NOME| CREAZIONE WEB INTERFACE   | 
| SUB ID | REQUISITO    |
|  01| Deve essere dinamicaa, moderna e accessibile|  

| ID  | REQUISITO 3   | 
| :------------- | :----------: |
| PRIORITÀ | 1|
|  NOME| AGGIUNTA/ELIMINAZIONE CANALI   | 
| SUB ID | REQUISITO    |
|  01| Poter aggiungere o togliere dei canali testuali|

| ID  | REQUISITO 4  | 
| :------------- | :----------: |
| PRIORITÀ | 1|
|  NOME| ELIMINAZIONE MESSAGGI   | 
| SUB ID | REQUISITO    |
|  01|Possibilità di eliminare i messaggi |
|  02| PRIORITÀ 2 |
|    | Log di eliminazione messaggi |  

| ID  | REQUISITO 5   | 
| :------------- | :----------: |
| PRIORITÀ | 1|
|  NOME| MESSAGGIO BROADCAST   | 
| SUB ID | REQUISITO    |
|  01| Utente amministrativo potrà mandare messagi a tutti tramite la bacheca|  


| ID  | REQUISITO 6   | 
| :------------- | :----------: |
| PRIORITÀ | 1|
|  NOME| AUTENTICAZIONE UTENTE  | 
| SUB ID | REQUISITO    |
|  01| Login con password e nome utente|
|  02| Login con Ldap interno alla scuola   |

| ID  | REQUISITO 7  | 
| :------------- | :----------: |
| PRIORITÀ | 1|
|  NOME| LOGIN AMMINISTRATORE  | 
| SUB ID | REQUISITO    |
|  01| Login con password e nome utente|
|  02| Login con Ldap interno alla scuola   |   
|  03| Login con permessi amministrativi   | 

| ID  | REQUISITO 8  | 
| :------------- | :----------: |
| PRIORITÀ | 1|
|  NOME| LOG DATABASE  | 
| SUB ID | REQUISITO    |
|  01| Log eliminazione messaggi(Data, ora, utente)|
|  02| Log invio messaggi (Data, ora, utente)  |    

| ID  | REQUISITO 9   | 
| :------------- | :----------: |
| PRIORITÀ | 1|
|  NOME| INSTALLAZIONE SERVER   | 
| SUB ID | REQUISITO    |
|  01| Comunicazione per autenticare gli utenti con LDAP protocols|

| ID  | REQUISITO 10   | 
| :------------- | :----------: |
| PRIORITÀ | 1|
|  NOME| CREAZIONE WEB SERVER  | 
| SUB ID | REQUISITO    |
|  01| Installazioen Apache|
|  02| Installazione PHP   | 
|  03| Hosting applicazione web|
|  04| Creazione percorsi applicazione web|
|  05| Comunicazione Database|


| ID  | REQUISITO 11  | 
| :------------- | :----------: |
| PRIORITÀ | 2|
|  NOME| AUTO ELIMINAZIONE MESSAGGI   | 
| SUB ID | REQUISITO    |
| 01 | Possibilità di impostare un timer per l'auto cancellazione dei messaggi |


| ID  | REQUISITO 10 |  
| :------------- | :----------: |
| PRIORITÀ | 3|
|  NOME| MAPPA UNICODE    | 
| SUB ID | REQUISITO    |
|  01| Un utente deve avere a disposizione tutta la mappa unicode di caratteri per messaggiare| 

| ID  | REQUISITO 11   | 
| :------------- | :----------: |
| PRIORITÀ | 3|
|  NOME| EMOTICON   | 
| SUB ID | REQUISITO    |
|  01| Aggiunta emoticon nelle conversazioni|

| ID  | REQUISITO 12  | 
| :------------- | :----------: |
| PRIORITÀ | 3|
|  NOME| INVIO IMMAGINI   | 
| SUB ID | REQUISITO    |
|  01| Possibilità di incorporare messaggi multimediatici|


















|  |    | 