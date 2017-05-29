## React Playground ##

Repo to learn and try out React.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup
#### Install dependencies

```sh
npm install
```

#### Run development server

```sh
npm start
```

#### Run tests

```sh
npm test
```

#### Build for production

```sh
npm run build
```

Can also use ```yarn``` instead of ```npm```.

---
## Components

#### Welcome
* [```src/components/Welcome```](src/components/Welcome)
* Basic React Component (function) with ```props```, ```propTypes``` and ```defaultProps```. 
* Renders "**Hello {name}!**" or "**Hello World!**" if name property is not provided.
---
#### Clock
* [```src/components/Clock```](src/components/Clock)
* Basic React Component (class) demonstrating use of ```constructor```, ```state```, lifecycle methods (```componentDidMount``` & ```componentWillUnmount```). 
---
#### Counter
* [```src/components/Counter```](src/components/Counter)
* React Component demonstrating event handling and conditional rendering.

---
#### TicTacToe
* [```src/components/TicTacToe```](src/components/TicTacToe)
* Implementation of tic-tac-toe game guided by official React [tutorial](https://facebook.github.io/react/tutorial/tutorial.html).