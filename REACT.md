# What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

A component takes in parameters, called `props`, and returns a hierarchy of views to display via the `render` method.

The `render` method returns a description of what you want to render, and then React takes that description and renders it to the screen.

Most React developers use a special syntax called JSX which makes it easier to write these structures. The `<div />` syntax is transformed at build time to `React.createElement('div')`.

You can put any JavaScript expression within braces inside JSX. Each React element is a real JavaScript object that you can store in a variable or pass around your program.

# Passing Data Through Props

To pass data into a component via parameters you use the `props` property. In TypeScript we need to define a `Props` interface to tell the component about the types of the parameters. This property definition is used as a type argument. This is called a **Generic Type**.

# An Interactive Component

To make the component more interactive we pass a callback to the `onClick` property of the `<button>`.

React components can have state by setting `this.state` in the constructor, which should be considered private to the component. Let’s store the current value of the square in state, and change it when the square is clicked.

Whenever `this.setState` is called, an update to the component is scheduled, causing React to merge in the passed state update and rerender the component along with its descendants. When the component rerenders, this.state.value will be 'X' so you’ll see an X in the grid.

# Lifting State Up

To make a fully-working game, we now need to check if one player has won the game, and alternate placing X and O in the squares. To check if someone has won, we’ll need to have the value of all 9 squares in one place, rather than split up across the Square components.

You might think that Board should just inquire what the current state of each Square is. Although it is technically possible to do this in React, it is discouraged because it tends to make code difficult to understand, more brittle, and harder to refactor.

Instead, the best solution here is to store this state in the Board component instead of in each Square – and the Board component can tell each Square what to display, like how we made each square display its index earlier.

**When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.**

The Board component now stores which squares are filled, which means we need some way for Square to update the state of Board. Since component state is considered private, we can’t update Board’s state directly from Square.

The usual pattern here is pass down a function from Board to Square that gets called when the square is clicked.

In `handleClick()` of the `Board` we call .slice() to copy the squares array instead of mutating the existing array.

# Why Immutabilty Is Important

## Data change with mutation

```
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```

## Data change without mutation

```
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};
```

The end result is the same but by not mutating (or changing the underlying data) directly we now have an added benefit that can help us increase component and overall application performance.

## Benefits of immutability:

### Easier Undo/Redo and Time Travel

Avoiding data mutations lets us keep a reference to older versions of the data, and switch between them if we need to.

### Tracking Changes

Determining if a mutated object has changed is complex because changes are made directly to the object. This then requires comparing the current object to a previous copy, traversing the entire object tree, and comparing each variable and value. This process can become increasingly complex.
Determining how an immutable object has changed is considerably easier. If the object being referenced is different from before, then the object has changed. That’s it.

### Determining When to Re-render in React

The biggest benefit of immutability in React comes when you build simple pure components. Since immutable data can more easily determine if changes have been made it also helps to determine when a component requires being re-rendered.

# Functional Components

We’ve removed the constructor, and in fact, React supports a simpler syntax called functional components for component types like Square that only consist of a render method. Rather than define a class extending React.Component, simply write a function that takes props and returns what should be rendered.

