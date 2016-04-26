# react-download-link

A simple component to download data from a client-side cache (e.g. flux, redux).

Design to be used with browserify or webpack.

Install with:

	npm install --save react-download-link

Include with:

```js
import DownloadLink from 'react-download-link'
```

Use:

```html
<DownloadLink
	filename="myfile.txt"
	label="Save to disk"
	exportFile={() => "My cached data"} />
```

Or with Promises:

```html
<DownloadLink
	filename="myfile.txt"
	label="Save to disk"
	exportFile={() => Promise.resolve("My cached data")} />
```
