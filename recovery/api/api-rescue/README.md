# Sauvegarde approfondie de l’API Warships

## Résultat

Documentation publique retrouvée : https://backend.acetech.cloud/api_documentation

La spécification expose **13 routes GET**. Leurs schémas et toutes les réponses récupérées sont sauvegardés. Cela couvre les routes de cette spécification, pas une garantie d’absence de routes non documentées.

**6950 requêtes / représentations archivées, 6079 réponses HTTP 200.** Les réponses JSON et JSON-LD d’une même URL peuvent avoir des enregistrements distincts. Les essais de documentation en échec sont inclus dans ce total.

- **175** items
- **699** warship_items
- **5577** item_stats
- **35** warship_ranks
- **93** seasons
- **49** crab_events

**5576 fiches de statistiques disposent d’un bloc rawData.** Les statistiques intégrées à `/items` sont complétées par les fiches individuelles, sans inventer les champs absents.

## Où commencer

- `openapi.json` : spécification OpenAPI extraite du Swagger public.
- `api-contracts.d.ts` : 36 contrats TypeScript générés à partir des schémas (pas le code source original).
- `export/recovered.sqlite3` : base SQLite autonome, une table par type de ressource, avec les objets complets dans `data` et une table de provenance `requests`.
- `export/*.json` et `export/*.csv` : exports dédupliqués des objets, niveaux, statistiques, rangs, saisons et événements.
- `export/raw-data.json` : données brutes et corrections métier exposées par les fiches de statistiques.
- `export/source-rows/` : lignes regroupées par fichier source déclaré dans `rawData.file`.
- `responses/` : corps HTTP originaux, y compris réponses d’erreur.
- `manifest.json` : URL, Accept, horodatage UTC, statut HTTP, en-têtes, durée, fichier et SHA-256.
- `endpoints.csv` : matrice des endpoints testés, lisible dans Excel.

Les exports CSV des fichiers source comprennent des colonnes `_statId`, `_itemId` et `_level` pour conserver la provenance. Ce sont des lignes récupérées, pas une copie garantie complète ni un ordre identique des CSV d’origine. `raw-effective.csv` contient les valeurs effectives après héritage, tandis que `raw-row.csv` préserve les valeurs brutes.

## Couverture des routes

| Route GET | Requêtes JSON enregistrées | Résultats |
|---|---:|---|
| `/api/crab_events` | 1 | 200: 1 |
| `/api/item_details/{name}` | 175 | 200: 175 |
| `/api/item_stats` | 2 | timeout: 2 |
| `/api/item_stats/{id}` | 6142 | 200: 5577, 404: 565 |
| `/api/items` | 1 | 200: 1 |
| `/api/items/{id}` | 450 | 200: 175, 404: 275 |
| `/api/seasons` | 1 | 200: 1 |
| `/api/seasons/current` | 1 | 200: 1 |
| `/api/seasons/leaderboard` | 1 | 200: 1 |
| `/api/seasons/{seasonNumber}` | 93 | 200: 93 |
| `/api/warship_items/{id}` | 1 | 200: 1 |
| `/api/warship_ranks` | 1 | 200: 1 |
| `/api/warship_ranks/{id}` | 35 | 200: 35 |

`/api/warship_items/{id}` renvoie un tableau vide sur la fiche testée. Les **699 niveaux** utiles sont récupérés dans les réponses `/items`, qui les embarquent avec leurs identifiants, prix et statistiques. Le schéma Swagger individuel `WarshipItem-none` n’expose pas de propriétés ; répéter les 699 fiches vides n’apporterait pas d’information.

La collection globale `/api/item_stats` a échoué (erreur serveur observée puis délais d’attente, y compris un essai de pagination). La collecte ne relance pas cette requête coûteuse. Elle utilise `/api/item_stats/{id}`. Le mode `--all-stats` teste initialement les IDs de **1 à 3294**, borne issue de `/items`. La collecte complémentaire a trouvé des statistiques jusqu’à l’ID **6078** et testé jusqu’à **6142**, puis s’est arrêtée après 64 réponses 404 consécutives. Cette limite empirique ne prouve pas l’absence d’IDs plus élevés ou disjoints.

Les statistiques contiennent **259 valeurs `itemId`** qui ne correspondent pas à une fiche d’objet récupérée dans `/api/items` (exemples : 136, 224, 225, 226, 227, 272, 273, 274, 285, 286). Les routes correspondantes ont été testées ; ces références ne suffisent pas à reconstituer les objets. Cela peut refléter un périmètre ou des identifiants différents, ou des relations anciennes ; la cause n’est pas établie. Liste complète dans `verification.json`.

Les lignes de recherche `artifact_epics.csv` sont exportées séparément dans `export/research-csv/`. Les configurations Warships, sources de bonus, corrections et références croisées disposent aussi d’exports dédiés. Voir `raw-extraction-summary.json`.

## Données brutes par source

- `spells.csv` : 564 lignes
- `buildings.csv` : 881 lignes
- `characters.csv` : 2569 lignes
- `traps.csv` : 64 lignes
- `hero_abilities.csv` : 946 lignes

## Utiliser la base

Exemples SQL :

```sql
SELECT id, json_extract(data, '$.name') AS name FROM items;
SELECT id, item_id, level, source_file FROM stats_by_item ORDER BY item_id, level;
SELECT json_extract(data, '$.rawData') FROM item_stats WHERE id = '510';
```

Les clés de jointure principales sont `items.id`, `warship_items.itemId`, `warship_items.stats.id` et `item_stats.itemId`. Les relations sont conservées dans les JSON ; les classements restent embarqués dans les saisons et événements.

## Reprendre une collecte interrompue

Depuis le dossier Warship :

```powershell
python .\recovery\api-resume.py --all-stats
python .\recovery\api-export.py
python .\recovery\api-schema.py
python .\recovery\api-report.py
```

La reprise conserve les succès et les 404, et retente les échecs transitoires. Elle limite le débit à 6 démarrages de requête/seconde, avec deux travailleurs, sauvegarde chaque réponse immédiatement et s’arrête après deux groupes comportant plusieurs erreurs. Aucun appel d’écriture, identifiant de connexion ou contournement d’authentification n’est utilisé. Les snapshots déjà récupérés ne sont pas rafraîchis automatiquement.

Le code backend, les migrations et le schéma physique original de la base ne sont pas récupérables par ces réponses publiques. La base SQLite constitue un export de secours des données exposées.
