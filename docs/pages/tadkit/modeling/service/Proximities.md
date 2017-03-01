



# Proximities











A matrix of proximities for a set of vertices.







  




## Methods
### set
Generate a matrix of proximity between points
from vertices = array of point coordinates components
up to minDistance = threshold for proximity
eg. [u1,v1,z1,w1,y1,z1,x1,u2,v2,w2,x2,y2,z2 ... un,vn,wn,xn,yn,zn]

To be used by THREE.LineSegments( geometry, material )
where LineSegments is the equivalent to GL_LINES in OpenGL terms.
THREE.LineSegments will draw a series of pairs of segments
ie. (u1,v1,w1) to (x1,y1,z1), (u2,v2,w2) to (x2,y2,z2), etc.

Stored in proximities object {positions:[],distances[]}
as vertex components (rather than THREE.Vertex)
for processing as THREE.BufferGeometry attributes:
'position' as positions; 'color' derived from distances.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| vertices | Object | <p>A colleciton of vertices.</p>  |
| settings | Object | <p>Settings to override defaults.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>A collection of proximities.</p>  |




### getMaxDistance
Itterate over a collection of vertices to find the maximum distance between any two.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| vertices | Object | <p>A collection of verices.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| number | <p>A distance in the model&#39;s scale.</p>  |




### get
Get the proximities (for a given particle/position if supplied).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| particle | number | <p>Particle.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>A collection of model proximities.</p>  |




### getCurrent
Get the model proximities for the current particle/position.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>The collection of model proximities.</p>  |










