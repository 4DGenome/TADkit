



# generic.service:Color











Color processing beyond that covered by the THREEjs and d3js APIs.







  




## Methods
### testIfHex
Test if color value is a CSS hex color value
see https://chromium.googlesource.com/apps/libapps/+/master/libdot/js/lib_colors.js


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| v | value | <p>The color value to test.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>true or false.</p>  |




### rgbToHex
Convert RGB color triplet to CSS hex color value.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| rgb | string | <p>The RGB color value to convert eg. &quot;rgb(64,128,192)&quot;</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>The corresponding CSS hex color eg. &quot;#336699&quot;</p>  |




### nameToHex
Convert X11 color name to CSS hex color value.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The color name to convert eg.red</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>The corresponding CSS hex color eg.#ff0000</p>  |




### THREEColorsFromHex
Convert Array of CSS hex color value to Array of THREE Colors
eg. [#rrggbb,#rrggbb,#rrggbb,...] >>> [Color,Color,Color...]


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| data | Array | <p>Array of CSS hex colors.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array | <p>The corresponding THREE Color to Array of THREE Colors</p>  |




### vertexColorsFromTHREEColors
Convert Float32 Array of RGB color components (for THREE Vertex Colors) from Array of THREE Colors
eg. [#rrggbb,#rrggbb,#rrggbb,...] >>> [Color,Color,Color...]


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| colors | Array | <p>Array of THREE Colors.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Float32Array | <p>Float32 Array of RGB color components</p>  |










