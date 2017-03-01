



# Clusters











Clustering of spatial datasets







## Dependencies


* https://code.angularjs.org/1.3.16/docs/api/ng/service/$log



  




## Methods
### load
Loads Datset from supplied file or default.
Waits for promise.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| dataset | string | <p>Dataset to load cluster from</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Clusters as resolved promise.</p>  |




### groupClusters
Group clusters of current dataset.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Clusters.</p>  |




### setCluster
Sets the current cluster for the current dataset.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| ref | number | <p>Cluster reference.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array | <p>Newly set current cluster.</p>  |




### setCentroid
Sets the current centroid for the current cluster.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| ref | number | <p>Centroid reference.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array | <p>Newly set current centroid.</p>  |




### setModel
Sets the current mdoel for the current dataset.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| ref | number | <p>Model reference.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array | <p>Newly set current model.</p>  |




### getGroupedClusters
Get groups clusters.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Clusters.</p>  |




### getCluster
Get clusters of ref or current.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| ref | number | <p>Cluster reference.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>A cluster.</p>  |




### getClusterModels
Get model ref for cluster.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| ref | number | <p>Cluster reference.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Clusters.</p>  |




### getCentroidRef
Get centroid ref from cluster ref.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| ref | number | <p>Cluster reference.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| number | <p>Model ref.</p>  |




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




### getModelData
Get model data from model of ref.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| ref | number | <p>Model reference.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array | <p>Array of vertices.</p>  |










