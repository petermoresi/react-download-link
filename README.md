# react-download-link

A simple component to download data from a client-side cache (e.g. flux, redux).

Design to be used with browserify or webpack.

Install with:

```sh
npm install --save react-download-link
```

Include with:

```js
import DownloadLink from "react-download-link";
```

Use:

```xml
<DownloadLink
	label="Save"
	filename="myfile.txt"
	exportFile={() => "My cached data"}
/>
```

Or with Promises:

```xml
<DownloadLink
	label="Promise to Save"
	filename="myfile.txt"
	exportFile={() => Promise.resolve("My cached data")}
/>
```

The component will default to an anchor tag, but the tagName prop will accept a string of any other HTML tag you prefer, such as 'button'.
