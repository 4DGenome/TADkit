



# bioinformatics.service:FeaturesEnsembl











Import and manage Genomic features (eg. genes) from Ensembl etc.







## Dependencies


* ONLINE
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$log
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$q
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$http



  




## Methods
### ping
Ping the Ensebl server to check if it is online
Use before requesting data.
https://github.com/Ensembl/ensembl-rest/wiki/Writing-Your-First-Client






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>Online status.</p>  |




### load
Load genomic features from Emsembl.
Use supplied address within layer format.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| layer | Array | <p>Array of URL path separators.</p>  |
| address | Object | <p>Object containing URL path.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>Online status.</p>  |




### setBiotypeStyle
Add property biotypeStyle as biotype in lowercase.
Used to idenify and color for CSS.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| genes | Object | <p>Genes list (see FeaturesEnsembl.load).</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>genes Genes list with added biotypeStyle property.</p>  |




### setLengthBP
Sum base pair lengths from top level regions.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| top_level_region | Object | <p>Genes list (see FeaturesEnsembl.load).</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| number | <p>lengthBP Length.</p>  |




### get
Get FeaturesEnsembl.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>features FeaturesEnsembl.</p>  |










