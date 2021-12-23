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
|  NOME| LOG DATABASE  | 
| SUB ID | REQUISITO    |
|  01| Log eliminazione messaggi(Data, ora, utente)|
|  02| Log invio messaggi (Data, ora, utente)  |    

| ID  | REQUISITO 8  | 
| :------------- | :----------: |
| PRIORITÀ | 2|
|  NOME| AUTO ELIMINAZIONE MESSAGGI   | 
| SUB ID | REQUISITO    |
| 01 | Possibilità di impostare un timer per l'auto cancellazione dei messaggi |


| ID  | REQUISITO 9 |  
| :------------- | :----------: |
| PRIORITÀ | 3|
|  NOME| MAPPA UNICODE    | 
| SUB ID | REQUISITO    |
|  01| Un utente deve avere a disposizione tutta la mappa unicode di caratteri per messaggiare| 

| ID  | REQUISITO 10   | 
| :------------- | :----------: |
| PRIORITÀ | 3|
|  NOME| EMOTICON   | 
| SUB ID | REQUISITO    |
|  01| Aggiunta emoticon nelle conversazioni|

| ID  | REQUISITO 11  | 
| :------------- | :----------: |
| PRIORITÀ | 3|
|  NOME| INVIO IMMAGINI   | 
| SUB ID | REQUISITO    |
|  01| Possibilità di incorporare messaggi multimediatici|


## Use Case
 pending.


 ## Pianificazione
 - Per realizzare questo prodotto ho scelto un a programmazione di tipo waterfall che viene illustrata nella seguente immagine tramite le fasi del progetto
  
  ![image](imageSource/GanttProgetto.PNG)

## Analisi requisiti
| Prodotto | Caratteristiche   | 
| :------------- | :----------: |
| Computer| XXX|
| Account Scolastico| nome utente e password | 
| Monitor | XXX|
| Mouse  | XXX |
| Tastiera | XXX |
| Node JS | v16.0.6|
| Visual Studio Code|Editor|
| Insomnia | testing API|
| MongDB | DBMS| 

## Librerie necessarie
 - mongoose
 - React JS
 - Express
 - morgan
 - nodemon
 - bcrypt
 - dotenv
 - helmet


## Progettazione 
 ### Interfaccia Web<br> 
 L'interfaccia web si deve distinguere per essere user friendly, dinamica e con uno stile moderno(segue uno schizzo del risultato finale).
 
  ![image](imageSource/UserInterface.png)

  Nella barra di sinistra troveremo i canali testuali di ogni utente. in fondo alla lista dei canali troveremo un pulsante per aggiungere delle nuove conversazioni.
  Il riquadro principale a destra sarà invece la finestra di comunicazione tra gli utenti con una barra per scrivere. In fondo a destra della barra troviamo anche un opzione di timing per i messaggi.
  A fianco della barra troviamo 3 tasti
  - invio, per inviare messaggi.
  - gli emoticon, da integrare al messaggio.
  - i file, per importare i file(immagini/GIF/video) nel messaggio. <br><br>
  Nella sezione in alto troviamo i 3 normali pulsanti di ogni interfaccia web(ridimensionare, nascondere e chiudere).
  Si trova anche un bottone bacheca che una volta cliccato aprirà una nuova finestra dove potremo vedere gli annunci fatti dalla segreteria.
  Un bottone di logout dal quale un utente potrà disconnettersi ed infine una barra di ricerca per cercare altri utenti con cui messagiare.
  Inoltre, cliccando sul logo dell'utente in alto a sinistra potremo accedere al profilo utente.

### Profilo utente
  ![image](imageSource/ProfiloUtente.png)

  In questo riquadro troveremo l'immagine profilo dell'utente(di defaul sarà stilizzata) che ognuno potrà cambiare.
  Subito sotto troveremo un riquadro dove un utente potrà inserire Una descrizione personale.
  In alto a sinistra comparirà una freccia per tornare alle chat, funzione che sarà richiamata anche solo cliccando sui canali(posti lateralmente) che non scompariranno.
  in alto a destra(solo per chi avrà i permessi amministratori) troveremo il pulsante per accedere alle impostazioni.

  ### Bacheca
  ![image](imageSource/bacheca.png)
  Il riquadro bacheca si aprirà cliccando sopra la voce "bacheca" nel menù principale. Si aprirà una pagina dove vedremo gli annunci della segreteria.
  Gli utenti "segretariato" avranno un ruolo speciale e saranno gli unici a poter scrivere nell'interfaccia della bacheca.



  ### Use case
  <br>
  livello di dettaglio: basso
  
  ![image](imageSource/useCase.png)
  - studente: <br>
Uno studente una volta fatto l'accesso potrà usare l'applicazione con l'unico scopo di chattare, leggere la bacheca e modificare il proprio profilo.

- segreteria <br>
Un utente segretariato, effetuato il login, potrà avere accesso alla chat(e dunque a tutte le funzioni disponibili all'utente: studente). Inoltre sarà l'uncio utente ad avere accesso sia in lettura che in scrittura alla bacheca.

- admin/docenti <br>
  Un utente admin, effetuato il login, potrà avere accesso alla chat(e dunque a tutte le funzioni disponibili all'utente: studente). 
  Avrà accesso ad un pannello amministrativo dal quale potrà:
   - bannare un utente.
   - mandare un warning all'utente.
<br>




# Implementazione

La fase successiva alla progettazione consiste nella realizzazione dell'applicazione che in questo specifico caso può essere suddivisa in due parti prinicpali:

- REST API , ovvero il back-end dell'applicativo che interagisce con l'applicativo e il database.
- REACT , la parte visiva dell'applicativo.

## REST API

Per questa prima sezione dell'applicativo ho deciso di svilluppare una REST API di modo che l'applicativo avesse un supporto che potesse gestire le 
comunicazioni tra DB, aplicativo WEB e che fosse in grado di poter elaborare le richieste fatte dagli utenti. Per sviluppare il back-end ho usato un alibreria di npm 
chiamata `express` (libreria per la gestione delle richieste http).

- source: `index.js`

![image](imageSource/APP.PNG)

In questa immagine vediamo come poter inizializzare l'applicazione fornendogli una connessione con un database a cui facciamo riferimento 
e mettendo in ascolto express su una determinata porta che decidiamo noi: in quest o caso la `8080`.
In questo pezzo di codice inizializziamo anche dei `middelware` che ci permettono di agevolare le comunicazioni tra i vari protocolli.

Una Rest API funziona tramite richieste http e per esempio se nel nostro applicativo volessimo poter fare una richiesta specifica dovremmo 
creare delle `routes` , ovvero dei link a cui risponde il server che abbiamo creato prima. Per richiamare una route usiamo il comando: `app.use("link", route);`
Ogni route ha delle funzioni specifiche che ci permettono di interagire correttamente con l'applicativo:
- Get
- Post
- Delete
- Put
- Patch

esempio Route;

![image](imageSource/Route.PNG)
<br>
 
 Le routes della Rest API si occupano di comunicare con il database per gestire gli eventi dell'applicativo. Dunque ad esempio per mandare un messaggio ad un altro utente
 avremo una route che si occpuerà di mandare la richiesta al server e di mandare le informazioni al database.

## MongoDB database

Come base per la raccolta dati ho usato un DB object oriented che in questo caso è stato MongoDB.
Per fare ciò ho creato un cloud su `https://cloud.mongodb.com/`. una volta avuto accesso allo spazio messo a disposizione ho creato una `collection`
nella quale mi è stato possibile salvare i dati delle richieste fatte tra back-end e server.
Ad per la registrazione di un utente, tramite un testing software che si chiama `insomnia` sono stato in grado di registrare utenti e di poi vedere comparire i loro dati sul cloud.

esempio MongoDB Schema:

![image](imageSource/SchemaDB.PNG)
<br>
Qui risciamo a vedere come l'oggetto User è identificato da un attributo username che può avere diverse proprietà. In oltre con questo tipo di schematizzazione ad oggetti 
il salvataggio dei dati e i relativi controlli di corretta formazione sono semplificati dalle regole che possiamo imporre ad esempio con il comando `required` o con quello
`unique`.

esempio registrazione utente sul cloud:

![image](imageSource/usersDB.PNG)
<br>
Come possiamo vedere un utente viene salvato come oggetto avente attributi ed in questo caso possiamo vedere come per esempio le email siano perforza diverse grazie ai vincoli imposti sullo schema 
in precedenza. Un altro aspetto importante è che con questo tipo di database possiamo gentire anche degli eventuali permessi: come da esempio, se salvassi un utente come admin questo poi nell'applicativo avrebbe i relativi permessi.
Si hanno anche molte altre informazioni utili come data creazione e modifica che ci permetteranno poi di loggare eventuali cambiamenti.



## REACT
React è la libreria di javascript che ho usato per realizzare l'interfaccia grafica. È una libraria piuttosto prestazionale che permette di creare user interface interattive.
Questa libreria permette di creare dei `components` che velocizzano ed ottimizzano il lavoro dell'applicazione. Si può immaginare che un componente sia un elemento html che viene però
viene creato in base alle proprie necessità.

Un esempio: 

![image](imageSource/react.PNG)
<br>
Nella main App abbiamo richiamato un componente <Toolbar> che è stato definito in precedenza da noi.


## Test

### Protocollo di test

  |Test Case      | TC-001                               |
  |---------------|--------------------------------------|
  |**Nome**       |creazione DB  |
  |**Riferimento**|Req - 1                               |
  |**Descrizione**| avere un DB ad oggetti.|
  |**Risultati attesi** | Esiste un spazio di archiviazione funzionante. |

  |Test Case      | TC-002                               |
  |---------------|--------------------------------------|
  |**Nome**       |WEB interface |
  |**Riferimento**|Req - 2                               |
  |**Descrizione**| Avere una UI dinamica e moderna|
  |**Risultati attesi** | La UI deve essere moderna e dinamica |


  |Test Case      | TC-003                               |
  |---------------|--------------------------------------|
  |**Nome**       |Creazione/eliminazione canali|
  |**Riferimento**|Req - 3                               |
  |**Descrizione**| Si può creare o eliminare un canale.|
  |**Risultati attesi** | un utente può creare ed eliminare canali. |


  |Test Case      | TC-004                               |
  |---------------|--------------------------------------|
  |**Nome**       |Eliminazione messagi|
  |**Riferimento**|Req - 4                               |
  |**Descrizione**| eliminare un messaggio.|
  |**Risultati attesi** | L'utente può eliminare un messaggio. |

  |Test Case      | TC-005                               |
  |---------------|--------------------------------------|
  |**Nome**       |messaggio broadcast|
  |**Riferimento**|Req - 5                               |
  |**Descrizione**| Un admin manda un messaggio in broadcast.|
  |**Risultati attesi** | L'utente admin può mandare un messaggio in broadcast. |

 |Test Case      | TC-006                               |
  |---------------|--------------------------------------|
  |**Nome**       |Login utente|
  |**Riferimento**|Req - 6                               |
  |**Descrizione**| Login con ldap|
  |**Risultati attesi** | L'utente può fare login con ldap. |


  |Test Case      | TC-007                               |
  |---------------|--------------------------------------|
  |**Nome**       |log Database|
  |**Riferimento**|Req - 7                               |
  |**Descrizione**| Il database tiene dei log.|
  |**Risultati attesi** | Il DB manager può tenere conto dei log(messaggi eliminati). |

  |Test Case      | TC-008                               |
  |---------------|--------------------------------------|
  |**Nome**       |Auto purge messaggio|
  |**Riferimento**|Req - 9                               |
  |**Descrizione**| Un messaggio si può eliminare da solo.|
  |**Risultati attesi** | L'utente può impostare un timer di eliminazione automatico per i messaggi. |

  |Test Case      | TC-009                               |
  |---------------|--------------------------------------|
  |**Nome**       |Mappa Unicode|
  |**Riferimento**|Req - 6                               |
  |**Descrizione**| messaggiare con qualunque carattere.|
  |**Risultati attesi** | L'utente può mandare un messaggi con tutti i caratteri unicode. |

  |Test Case      | TC-010                               |
  |---------------|--------------------------------------|
  |**Nome**       |Emoticon|
  |**Riferimento**|Req - 10                               |
  |**Descrizione**|Un utente può usare le emoticon.|
  |**Risultati attesi** | L'utentepuò mandare un messaggio con emoticon. |

  |Test Case      | TC-011                               |
  |---------------|--------------------------------------|
  |**Nome**       |Invio Immagini|
  |**Riferimento**|Req - 11                               |
  |**Descrizione**| Inviare immagini.|
  |**Risultati attesi** | Un utente può inviare immagini. |

# Risulatati

  |Test Case      | TC-001                               |
  |---------------|--------------------------------------|
  |**Nome**       |creazione DB |
  |**Descrizione**|Il database è in piedi e funziona.|
  |**Passato**|✔                     |

  |Test Case      | TC-002                               |
  |---------------|--------------------------------------|
  |**Nome**       |WEB interface |
  |**Descrizione**| Avere una UI dinamica e moderna.|
  |**Passato**| X non completata                   |


  |Test Case      | TC-003                               |
  |---------------|--------------------------------------|
  |**Nome**       |Creazione/eliminazione canali. |
  |**Descrizione**| Si puÒ creare o eliminare un canale. |
  |**Passato**|✔                     |

  |Test Case      | TC-004                               |
  |---------------|-------------------------------------- |
  |**Nome**       | Eliminazione messaggio.|
  |**Descrizione**| eliminare un messaggio. |
  |**Passato**|✔    

  |Test Case      | TC-005                               |
  |---------------|-------------------------------------- |
  |**Nome**       | Messaggio broadcast|
  |**Descrizione**| Un admin manda un messaggio in broadcast.  |
  |**Passato**| X 

  |Test Case      | TC-006                               |
  |---------------|-------------------------------------- |
  |**Nome**       | Login LDAP |
  |**Descrizione**| L'utente può fare login con ldap. |
  |**Passato**|X    

  |Test Case      | TC-007                               |
  |---------------|-------------------------------------- |
  |**Nome**       | log Database |
  |**Descrizione**| Il database tiene dei log. |
  |**Passato**|✔ 

  |Test Case      | TC-008                               |
  |---------------|-------------------------------------- |
  |**Nome**       | Auto purge messaggio |
  |**Descrizione**| Un messaggio si può eliminare da solo. |
  |**Passato**|X  

   |Test Case      | TC-009                               |
  |---------------|-------------------------------------- |
  |**Nome**       | Mappa Unicode |
  |**Descrizione**| Messaggiare con qualunque carattere. |
  |**Passato**|✔ 

   |Test Case      | TC-010                               |
  |---------------|-------------------------------------- |
  |**Nome**       | Emoticon |
  |**Descrizione**| L'utentepuò mandare un messaggio con emoticon |
  |**Passato**|X 

  |Test Case      | TC-011                               |
  |---------------|-------------------------------------- |
  |**Nome**       | Invio Immagini |
  |**Descrizione**| Gli utenti non possono essere gestiti |
  |**Passato**| Circa: può postare un immagine |


# Mancanze o limitazioni conosciute
L'interfaccia grafica dell'applicazione non è completa, anzi appena iniziata.

# Consuntivo
Il Gantt consuntivo è completamente diverso rispetto a quello preventivo sia in termini di tempistiche ma addirittura le task stesse sono diverse.
Imparando a conoscere come affrontare il progetto mi sono accorto che molte delle supposizioni che avevo fatto, sia tempistiche che non, erano completamente diverse rispetto 
a quello che mi ero propositato. La parte che più si discosta a livello temporale dal Gantt originale è la tempistica di studio delle varie fasi, cosa che ha richiesto molto più tempo del previsto.
  

# Conclusioni
Il progetto per intero non è funzionante: l'utenza non ha a disposizione un'interfaccia grafica che gli permette di interagire secondo lo scopo del progetto. Se venisse terminata l'interfaccia grafica
e visto che il back-end è funzionante ed è testato si potrebbe arrivare ad una soluzione che faccia funzionare l'applicativo.

# Considerazioni personali
Con questo primo progetto mi sono addentrato nel mondo del full-stack development per quello che riguarda il mondo degli applicativi web. Ho imparato nuovi tipi di programmazione che sono sicuro mi torneranno molto utili ma che anche mi sono piaciuti.
Ho imparato anche come strutturare un database ad oggetti con MongoDB, cosa che ultimamente sta prendendo molto piede e che dunque mi potrà aiutare più avanti.
Purtroppo, date le scarse conoscenze nell'ambito e, in parte anche dovuto alle quarantena da covid, il tempo per portare avanti tutto il progetto fino alla fine non è stato abbastanza.
penso che pian piano porterò comunque avanti il tutto cercando di arrivare ad un applicativo funzionante, anche solo per piacere personale.

# Sitografia
https://www.mongodb.com/cloud/atlas/lp/general/try?utm_source=compass&utm_medium=produc MongoDB
https://docs.mongodb.com/manual/tutorial/getting-started/ MongoDB
https://www.w3schools.com/nodejs/ Node JS
https://expressjs.com/it/ Express JS
https://it.reactjs.org/tutorial/tutorial.html React js
https://dev.to/kmcknight91/how-to-use-insomnia-to-test-api-endpoints-1lad Insomnia
