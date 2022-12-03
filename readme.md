Star my project if you are using it...
# Guide For vietnamese Full Text Search
## Installation
```docker
docker run hotrungnhan/postgres:tagname

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


# Reference
### Stop Word
* #https://github.com/stopwords/vietnamese-stopwords/blob/master/vietnamese-stopwords.txt

### AFF Word

* https://github.com/wooorm/dictionaries/blob/main/dictionaries/vi/index.aff
### Dict 
* https://github.com/wooorm/dictionaries/blob/main/dictionaries/vi/index.dic
* https://github.com/undertheseanlp/dictionary

### Installation 
* https://stackoverflow.com/questions/30365611/add-new-language-to-postgresql-full-text-search
https://www.postgresql.org/docs/current/textsearch-dictionaries.html#TEXTSEARCH-SYNONYM-DICTIONARY