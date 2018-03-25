# shipharbor [![Build Status](https://travis-ci.org/herber/shipharbor.svg?branch=master)](https://travis-ci.org/herber/shipharbor)

> Small isomorphic router

## Install

```
$ npm install shipharbor
```

## Usage

```js
const Shipharbor = require('shipharbor');
const router = new Shipharbor();

router.add('/', () => {
  console.log('> Home');
});

router.add('/user/:id', (params) => {
  console.log('> User: ' + params.id);
});

router.add('/*', (params) => {
  console.log('> Not found');
});

router.match('/').handler();
// > Home

const match = router.match('/user/my-user');
m.handler(m.params);
// > User: my-user

router.match('/whatever').handler();
// > Not found
```

## API

### shipharbor()

#### add(path, handler)

##### path

Type: `string`

A string representing the path you want to match. This is similar to express's paths.

The supported pattern types are:

* static (`/users`)
* named parameters (`/users/:id`)
* nested parameters (`/users/:id/books/:title`)
* optional parameters (`/users/:id?/books/:title?`)
* any match / wildcards (`/users/*`)

##### handler

Type: `function`

The handler function for a specific path.

#### match(path)

Return: `object|boolean`;

##### path

Type: `string`

The url you want to match against the previously specified routes.

##### Example:

```js
const match = router.match('/route');
// if the route exists:
//  => { handler, params }
// else
//  => false

match.handler(); // executes the handler
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
