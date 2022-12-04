
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hotrungnhan/docker_postgres_fts_vietnamese)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/repository/docker/hotrungnhan/postgres)


Make Vietnamese Great Again !!!
# Vietnamese Full Text Search Dictionary for Postgres
Due to lack of FTS support for vietnamese in postgres. I've make this project to archive it with by collect all the dictionary in the internet, prebuild it for fastest usage.

For more this image is base on [postgres image](https://hub.docker.com/_/postgres). As an consequence, fts-image will share the same config and enviroment with postgres, as well.


> If you are in docker hub, open github to read the latest guideline
# Getting Started 
## Installation
Docker image will share the same environment with postgres
```docker
docker run hotrungnhan/postgres:alpine
```
Install full text search dictionary via run sql in database
```sql
-- add dictionary
CREATE TEXT SEARCH DICTIONARY vietnamese_hunspell (
    TEMPLATE = ispell,
    DictFile = "vietnamese",
    AffFile = "vietnamese",
    Stopwords = "vietnamese"
  );
-- add configuration
CREATE TEXT SEARCH CONFIGURATION vietnamese(
    COPY = english
);
-- alter parser mapping
ALTER TEXT SEARCH CONFIGURATION vietnamese
ALTER MAPPING FOR asciiword, asciihword, hword_asciipart, word, hword, hword_part
WITH vietnamese_hunspell;

----------------------------------------
```

## For builder
### Login docker
```bash
docker login
```
### Build 

> change `IMAGE_REPOSITORY` in upgrade.py to your repository
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