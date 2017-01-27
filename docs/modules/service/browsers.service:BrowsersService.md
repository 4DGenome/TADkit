



# browsers.service:BrowsersService











Service loading Browser APIs for Track management







## Dependencies


* https://code.angularjs.org/1.3.16/docs/api/ng/service/$log
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$document
* https://code.angularjs.org/1.3.16/docs/api/ng/service/$q
* Files



  




## Methods
### init
Loads available browsers from file.
Waits for promise.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Browsers as promise.</p>  |




### load
A function that initializes the specified browser API with the supplied config.
Uses $q.all to ensure all are loaded before returning.

** Available browsers library located...
** Each browser have list of assets...
** Each browser list own special config params...
** Service loads assets, configures and runs...






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array | <p>results of appending the files. [ null &#124; undefined &#124; String &#124; Array &#124; Object &#124; don&#39;t know ].</p>  |










