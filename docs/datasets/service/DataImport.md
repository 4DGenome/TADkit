



# DataImport











Import datasets to Projects.







## Dependencies


* https://code.angularjs.org/1.3.16/docs/api/ng/service/$log
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$q
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$http



  




## Methods
### import
Process for importing data


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| data | Object | <p>Data Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### parse
Parse file data into JSON object


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| data | Object | <p>Data Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### validate
check with User feedback... first row pulldown
is it a set of xyz, scores, imaging data, ...
is it a point cloud, an array....
note a matrix is a ???
if isNumber also check if integer or float
if col2 integer check that is higher than col1
if yes use as coordinates...
1D(e.g numerals, strings etc)
2D(e.g. pixel color info of an image)
3D(e.g data table)
or any n Dimensions.
if not classify as value... but check with User feedback


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| data | Object | <p>Data Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### filter
data [[row1col1,row1col2...],[row2col1,row2col2...]...]
Remove rows/cols marked false in selection.rows/.cols arrays


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| data | Object | <p>Data Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### describe
Formats data for dataset.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| details | Object | <p>Data Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Formatted data.</p>  |




### create
Create new dataset object


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| data | Object | <p>Data Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |










