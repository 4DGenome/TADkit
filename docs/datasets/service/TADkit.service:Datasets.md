



# TADkit.service:Datasets











Datasets of Projects.







## Dependencies


* https://code.angularjs.org/1.3.16/docs/api/ng/service/$log
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$q
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$http
* https://github.com/monicao/angular-uuid4



  




## Methods
### load
Loads Datset from supplied file or default.
Waits for promise.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| filename | string | <p>Filename for file of type JSON and extension .json.</p>  |
| clear | boolean | <p>Clear loaded datasets.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets as resolved promise.</p>  |




### import
Imports supplied data and adds to Datasets.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| data | Object | <p>Data Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### import
Imports previewed data and adds to Datasets.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| data | Object | <p>Preview data Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### unique
Check the data and ID are unique in Datasets.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| dataset | Object | <p>Dataset Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### add
Adds dataset to Datasets from supplied data.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| dataset | Object | <p>Object.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### clear
Clears Datasets Object.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### remove
Removes dataset at supplied index from Datasets.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| index | number | <p>Index of dataset.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets Object.</p>  |




### set
Sets current dataset from those loaded in Datasets.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| index | number | <p>Index of dataset.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Newly set current dataset.</p>  |




### get
Get Datasets.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets.</p>  |




### getDataset
Get Datasets.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Datasets.</p>  |




### getModel
Get model from ref or current id no ref supplied. eg. { ref:1 , data:1,2,3 }


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| ref | number | <p>Model reference.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Model.</p>  |










