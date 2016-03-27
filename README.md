#RespondTo utility

<p align="center">
    <img height="271" width="405" src="https://raw.githubusercontent.com/jpgcode/respondTo/master/intro.jpg">
</p>

> Method to detect breakpoints with Javascript. 

It returns "true" if the conditions defined are met. This utiliy uses mobile-fist methodology.


##Support

Internet Explorer 10+. It uses [window.matchmedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

##Usage

Detect mobile breakpoint (max-width: 767px):

```js
respond.to('mobile');
```


Detect tablet breakpoint (min-width: 767px) and (max-width: 1023px):

```js
respond.to('tablet');
```

Detect desktop breakpoint (min-width: 1023px):

```js
respond.to('desktop');
```

Custom breakpoint. Just send a number with the breakpoint you want to use. It will use it in a max-width conditional:

```js
respond.to(1280);
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jpgcode/respondTo/issues)

## Authors

**Jose Pablo Granados**
 
+ [github/jpgcode](https://github.com/jpgcode)
+ [twitter/jpgcode](http://twitter.com/jpgcode) 

## License

Copyright (c) 2016 Jose Pablo Granados
Released under the MIT license
