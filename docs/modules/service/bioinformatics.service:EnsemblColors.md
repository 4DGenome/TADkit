



# bioinformatics.service:EnsemblColors











Import and manage Genomic feature colors (eg. genes) from Ensembl etc.







## Dependencies


* ONLINE
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$log
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$q
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$http



  




## Methods
### load
Load feature colors as used in Emsembl.
Derived from remote INI or local JSON






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>colorData List of colors categorized by feature object type.</p>  |




### get
Get colors ().


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| ref | number | <p>Reference to EnsemblColors object property.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| colors | <p>All colors or speccific from ref.</p>  |




### colorsFromIni
Extract colors from (Ensembl) INI files
For example:
https://raw.githubusercontent.com/Ensembl/ensembl-webcode/release/75/conf/ini-files/COLOUR.ini
https://cdn.rawgit.com/Ensembl/ensembl-webcode/release/75/conf/ini-files/COLOUR.ini
or in TADkit:
assets/defaults/ensembl-webcode-COLOUR.ini


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| text | number | <p>data.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Generate &#39;colors list&#39; Object from INI data.</p>  |










