



# TADkit.service:Components











Components for Storyboards.







## Dependencies


* https://code.angularjs.org/1.3.16/docs/api/ng/service/$log
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$q
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$http
* https://github.com/monicao/angular-uuid4



  




## Methods
### load
Loads default components from file.
Waits for promise.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Components as promise.</p>  |




### add
Adds component to components Object derived from supplied parameters.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| details | Array | <p>Array of parameters for component. [uuid,id,title,type,state{width,height,margin,position},view{}]</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Components Object.</p>  |




### remove
Removes component from components Object.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| index | number | <p>Index of component.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Components Object.</p>  |




### set
Sets current component.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| index | number | <p>Index of component.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>The current component.</p>  |




### init
Initializes component.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| index | number | <p>Index of component.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Components.</p>  |




### setViewpoint
Adds component to components Object.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| chromStart | number | <p>Viewpoint start of component.</p>  |
| chromEnd | number | <p>Viwepoint end coordinate of component.</p>  |
| scaleOrig | number | <p>Viewpoint scale of component.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Components.</p>  |




### get
Get components Object.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| list | Array | <p>Array of components to get.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Components.</p>  |




### getComponent
Get component from components Object. Returns current component if no component index supplied.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| index | number | <p>Index of component.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Component.</p>  |




### getComponentById
Get component from components Object by ID (required).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| id | number | <p>Component ID (Note: not component index).</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Component if found.</p>  |




### getComponentByType
Get component from components Object by Type (required),


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| id | number | <p>Component ID (Note: not component index).</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Component if found.</p>  |










