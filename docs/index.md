
# TADkit

Main module for TADkit app.


## Installation

First include  in your HTML:

```
<script src="angular.js">
<script src="">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/undefined</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install @X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['TADkit']);
```

With that you&apos;re ready to get started!




## Module Components

### directive

| Name | Description |
| :--: | :--: |
| tkComponentBrowserBiodalliance | <p>Biodalliance browser directive that is replaced on complie</p>  |
| tkComponentBrowserGenoverse | <p>Genoverse browser directive that is replaced on complie</p>  |
| tkComponentBrowserJsorolla | <p>OpenCB/jsorolla/    genome-viewer directive that is replaced on complie</p>  |
| tkComponentBrowser | <p>Genome track browser directive</p>  |
| tkComponent | <p>Dummy components directive that is replaced on complie</p>  |
| tkComponentTrackBarchart | <p>Generates a d3 Barchart from the supplied data.</p>  |
| tkComponentWiggle0 | <p>Track component which generates a d3 graph</p>  |


### service

| Name | Description |
| :--: | :--: |
| App | <p>Load app and initialize.</p>  |
| Components | <p>Components for Storyboards.</p>  |
| Init | <p>Initialize default Objects.</p>  |
| Projects | <p>Projects of Users.</p>  |
| Settings | <p>Settings of App.</p>  |
| Storyboards | <p>Storyboards of Projects.</p>  |
| Users | <p>Users of App.</p>  |






