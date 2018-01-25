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
	exportFile={() => "My cached data"}
>
		Save to disk
</DownloadLink>
```

Or with Promises:

```html
<DownloadLink
	filename="myfile.txt"
	exportFile={() => Promise.resolve("My cached data")}
>
		Save to disk
</DownloadLink>
```
