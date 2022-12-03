
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hotrungnhan/docker_postgres_fts_vietnamese)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/repository/docker/hotrungnhan/postgres)

Please open github readme to have the latest guideline
# Vietnamese Full Text Search Dictionary for Postgres
Base on [postgres image](https://hub.docker.com/_/postgres). As an consequence, fts-image will share the same config and enviroment with postgres image.
# Getting Started 
## Installation
Docker image will share the same environment with postgres
```docker
docker run hotrungnhan/postgres:alpine
```
Install full text search dictionary via run sql in database
```sql
CREATE TEXT SEARCH DICTIONARY public.vietnamese (
    TEMPLATE = pg_catalog.simple,
    STOPWORDS = 'vietnamese'
);
CREATE TEXT SEARCH CONFIGURATION vietnamese(
    COPY = english
)
ALTER TEXT SEARCH CONFIGURATION vietnamese 
ALTER MAPPING FOR asciiword, word, numword, asciihword, hword,numhword, hword_asciipart ,hword_part, hword_numpart, uint, email
WITH vietnamese;
```

## For builder
### Login docker
```bash
docker login
```
### Build 
#### Variable 

> Due to knowledge limited on writing bash script ==)) we'll need install [Nodejs](https://nodejs.org/en/) first, Hope somebody else could help me on this. You are welcome to push an PR.

Then

> change `IMAGE_REPOSITORY` in upgrade.js to your repository
>
And
```bash
./run.sh
```
> Notes: builder will be auto create cross-platform-builder if not existed

# Reference
### Stop Word
* https://github.com/stopwords/vietnamese-stopwords/blob/master/vietnamese-stopwords.txt

### AFF Word

* https://github.com/wooorm/dictionaries/blob/main/dictionaries/vi/index.aff
### Dict 
* https://github.com/wooorm/dictionaries/blob/main/dictionaries/vi/index.dic
* https://github.com/undertheseanlp/dictionary

### Installation 
* https://stackoverflow.com/questions/30365611/add-new-language-to-postgresql-full-text-search
https://www.postgresql.org/docs/current/textsearch-dictionaries.html#TEXTSEARCH-SYNONYM-DICTIONARY

# Lisence
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Ho Trung Nhan