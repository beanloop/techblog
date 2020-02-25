---
title: Higher-order Functions in Javascript
date: "2019-12-17T20:00:00.284Z"
description: Learning and using higher-order functions in Javascript
---

# Higher-order functions in Javascript

Higher-order functions, you've probably heard the term before. At first glance, it might sound scary, but don't worry.
If you've been coding javascript for a while, you've probably used them many times!

## Functional programming

Before we start examining what a higher-order function is, let's take a step back and look at where they come from - functional programming.
Functional programming is one of many other programming paradigms (you might have heard of Object-Oriented Programming). Functional programming is a way of programming where you tell the computer **what** your program does, instead of
**how**. It also emphasizes immutability, and treats functions as "first-class citizens".

So what is a "first-class citizen" in programming, you might ask yourself?
Well, turns out that first-class citizens are a special group of entities that enjoys some particular right and privileges:

1. They can be stored in variables
2. They can be passed as an argument to other procedures
3. They can be returned as values from other procedures
4. They can be incorporated into data structures

Take a good look at numbers 2 and 3, and remember those two.

This programming paradigm has many other characteristics, but that is a topic for another blog post.

Javascript has some characteristics of a functional programming language, one of those being that it treats functions as guess what?
That's right, first-class citizens!

## Higher-order functions

Remember numbers 2 and 3 from the list above? Well, those two describe a higher-order function (in our case, a procedure is another function).
Putting it in words, a higher-order function is a function that does one or both of these:

- It can take other functions as arguments
- It can return other functions as arguments.

Having support for higher-order functions opens a world of possibilities, such as currying, partial application, function composition. These are topics for other blog posts though.

### Returning functions
By now, you have read the word "function" about 20 times, but haven't seen a single one. Where is the action you might ask? Well, ask and you shall receive.


```js
const add = x => y => x + y
```

This might look weird if you are not familiar with arrow functions, so let's take a look at them with the `function` keyword.

```js
function add(x) {
  return function(y) {
    return x + y
  }
}
```

Let's examine this and see what's going on. First, we declare a function named `add`. It takes one argument, `x`, which is a number. Second, we return (remember, first-class citizen) another function - an anonymous one, which takes a parameter `y`, which is also a number. Lastly, the function that we have returned adds `x` and `y` together, returning the sum of them.

Now that we know how our `add` function works, let's put it to use. We are now going to use our rights as first-class citizens and store functions in variables. Let's use our `add` function to make a really useful function that adds the number 42 to another number.

```js
const add42 = add(42)
```

Great, so now we have a new function called `add42` (someone quick make an npm package out of it!) that will add the number 42 to any given number passed in. This is the anonymous function we returned doing the work, stored in a variable. It remembers the number 42 passed into the `x` variable, and when invoked, adds it to the `y` variable. We can now use it like any other function

```js
add42(10) // 52
```

We can even use our higher-order `add` function to make other "adders" that work independently from each other.
This technique is called [currying](https://en.wikipedia.org/wiki/Currying) and deserves a blog post of its own in the future.

```js
const add2 = add(2)
const add3 = add(3)
const add9000 = add(9000)

add2(40) // 42
add3(39) // 42

add9000(1) // Over 9000
```

Using functions this way lets us define a template so we can create multiple new useful functions, each having the same base but different behaviors.

### Functions as arguments

So, now that you know how to return functions from other functions, let's take a look at how we can pass functions as an argument to other functions.

For this example, let's build a small function that works much like an `ifThen` statement. This function should take a boolean `condition` and a function `ifTrue`, that only runs if the `condition` is true.

```js
function ifThen(condition, ifTrue) {
  if (condition) {
    ifTrue()
  }
}

ifThen(true, () => console.log("Was true!")) // outputs 'Was true!'
ifThen(false, () => console.log("Was true!")) // outputs nothing
```

If you have programmed in javascript for a while, especially node, this will probably be familiar to you. These functions are called `callbacks` and were (and sometimes still are) used in asynchronous functions. They can, however, be used in synchronous functions aswell! An example of a synchronous higher-order function is `addEventListener`, as it takes the function to execute for the event as the second argument.

Let's take a look at the example and see what's going on. The first part with the `if` statement should be pretty clear, we pass in a `boolean` condition and check if it's true. If that's the case, we call the second parameter, `ifTrue` (remember, it's a function).

Let's add an `orElse` that will run if the `condition` is false.

```js
function ifThen(condition, ifTrue, orElse) {
  if (condition) {
    ifTrue()
  } else {
    orElse()
  }
}

ifThen(
  true,
  () => console.log("Was true"),
  () => console.log("Was false")
) // Outputs 'Was true'
ifThen(
  false,
  () => console.log("Was true"),
  () => console.log("Was false")
) // Outputs 'Was false'
```

## Example of built-in higher-order functions

Remember when I said that even if you had not heard about higher-order functions before reading this, you had probably already used them anyway. Well, it turns out that javascript has some built-in higher-order functions that operate on arrays. Let's take a look at 3 of them, and why you should use them instead of regular loops.

### Array.prototype.map

`Array.prototype.map` is a function that takes a callback function and runs it over each element in the array, returning a new array. It's great for transforming the values of an array without mutating them.

Let's say you have a shopping cart with some items. These items have a `quantity` and an `itemPrice`, but for presentational purposes, you want to show the total price. Mapping the `products` array to a new one and adding a `totalPrice` property is a perfect usage of the `map` function.

```js
const products = [
  {
    id: 1,
    name: "Iphone 7",
    quantity: 1,
    itemPrice: 1000,
  },
  {
    id: 2,
    name: "Air Pods",
    quantity: 1,
    itemPrice: 200,
  },
  {
    id: 3,
    name: "Iphone 7 case",
    quantity: 3,
    itemPrice: 25,
  },
]

function addTotalPriceToProduct(product) {
  return {
    ...product,
    totalPrice: product.itemPrice * product.quantity,
  }
}

const productsWithTotalPrice = products.map(addTotalPriceToProduct)
```

We declare a function, `addTotalPriceToProduct`, that takes a product and returns a new object that contains the same properties, plus a new one called `totalPrice`.

Next, we pass it into the `map` function that will run for every item in the product array. This can also be done inline:

```js
const productsWithTotalPrice = products.map(p => ({
  ...item,
  totalPrice: p.itemPrice * p.quantity,
}))
```

The result is a new array containing our products and their total price.

Compare the above to the imperative version below:

```js
const products = []

for (let i = 0; i < products.length; i++) {
  products.push({
    ...products[i],
    totalPrice: products[i].itemPrice * products[i].quantity,
  })
}
```

Notice, how our solution using higher-order function reads more like spoken language, compared to the solution using for loops that reads more like step by step instructions.

In the solution using the higher-order function `map`, the implementation details of the looping and pushing to a new array is abstracted away from us, letting us focusing at the problems on a higher level (i.e how we create the new object, instead of focusing on the looping and pushing to a new array).

Which one do you think is easier to grasp at a first glance?


As a bonus, here is how you could implement your own `map` functions using good ol' imperative javascript (don't do that in your projects, use the built-in function).

```js
function map(array, mapper) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = mapper(array[i]);
  }
  return newArray;
}


map([1, 2, 3, 4], n => n * 2) // [2, 4, 6, 8]
```

### Array.prototype.filter

`Array.prototype.filter` is, just like `Array.prototype.map`, another very useful higher-order function that exists on arrays. Much like `map`, the passed-in function will run for every element in the array. And just like `map`, this function returns a new array. Unlike map, however, we do not return a new object here. Instead, we return a boolean - `true` if the current element should be included in the new array, and `false` if not.

For example, say we have a pretty dashboard, full of beautiful graphs that display meaningful data. Let's make it a line chart, that displays multiple lines, and we want to have the ability to toggle certain lines on and off.

The data could look something like this:

```js
const veryImportantData = [
  {name: 'Impressions', visible: true, data: [...]},
  {name: 'Clicks', visible: false, data: [...]},
  {name: 'PageViews', visible: true, data: [...]}
]
```

We have already built a function using our newfound knowledge of `map` to toggle the `visible` state on and off for a line, but now we need to grab only the lines that have `visible: true`, and send them into our chart for presentation. This is where `filter` comes in handy!

```js
function isLineVisible(line) {
  return line.visible
}

const dataToPresent = veryImportantData.filter(isLineVisible)
```

Or, we could do it inline with an anonymous function on one line!

```js
const dataToPresent = veryImportantData.filter(line => line.visible)
```

Which gives us a new array with only the lines that had `visible: true`. The rest have been filtered out. Pretty great, right?

Compare this to an approach using `for` loops:

```js
const dataToPresent = []

for (let i = 0; i < veryImportantData.length; i++) {
  if (veryImportantData[i].visible) {
    dataToPresent.push(veryImportantData[i])
  }
}
```

Once again, the higher-order function version is easier to grasp, and we don't need to care about how the loop is working, or how the array is created. It's all abstracted away from us, focusing on the important part - filtering logic.

### Array.prototype.reduce

`Array.prototype.reduce`, while very useful, is a bit harder to grasp than `Array.prototype.map` and `Array.prototype.filter`, it is very versatile, and can be used to build new objects, numbers, strings, or arrays.

Just as the previous functions (`map`, `filter`), `reduce` takes a callback function - called a reducer function - as the first argument. However, this callback function has a slight difference from the functions passed to `map` and `filter`. It takes an `accumulator` as the first argument, and the element it's currently operating (`currentValue`) on as the second. The `reduce` function also has a second argument, `initialValue`, which can be sent in to set the `accumulator` to have a value the first iteration. `reduce` is often referred to as `fold` withing other functional programming languages.

Let's look at an example - our shopping cart. Say you want to present the total price of the shopping cart. This is a handy use for reduce!

```js
const addProductPriceToTotal = (total, product) => total + product.totalPrice

const toalPrice = products
  .map(addTotalPriceToProduct)
  .reduce(addProductPriceToTotal, 0)

totalPrice // 1275
```

So, first, we run a map function on the products, adding totalPrice to each product. Secondly, we run the reduce function. Take a close look at the chaining. We can chain all these higher-order functions on the `Array` object, as long as the return a new array.

Notice that we pass in `0` as the second argument? That's us telling the `reduce` "Hey, the accumulator argument `total` should be `0` when our function runs the first time.

When it runs our function on the second product, the `total` variable is `1000`. And so on. Let's try to visualize it with a list:

1. First run `total: 0`, `product.totalPrice: 1000`, returns `1000`
2. Second run `total: 1000`, `product.totalPrice: 200`, returns `1200`
3. Third run `total: 1200`, `product.totalPrice: 75`, returns `1275`

As you can see, each time we return something from the function passed to `reduce`, it gets sent into `total` the next pass, until it has run for every element in our array. That's when `total` is assigned to our `totalPrice` variable. We now have a nice number representing the total price our shopping cart user has to pay us, sweet!

Here is the imperative approach using a for-loop for comparison. Again, we need to deal with the looping ourselves, instead of just focusing on calculating the sum.

```js
let sum = 0

for (let i = 0; i < products.length; i++) {
  const productWithTotalPrice = addTotalPriceToProduct(products[i])
  sum += productWithTotalPrice.totalPrice
}
```

Let's take a look at another example, creating objects with reduce. Take our shopping cart again. Your backend developers have given you an endpoint to which you should send your shopping cart when the user wants to checkout. Thing is, they have designed it strangely due to various reasons. Instead of letting you send the products as an array, they want you to send it as an object that looks like this:

```json
{
  "products": {
    "1": {
      "name": "Iphone 7",
      "quantity": 1,
      "price": 1000
    }
  }
}
```

Let's also take a look at how the products array looks like since our short term memory is failing us.

```js
const products = [
  {
    id: 1,
    name: "Iphone 7",
    quantity: 1,
    itemPrice: 1000,
  },
  {
    id: 2,
    name: "Air Pods",
    quantity: 1,
    itemPrice: 200,
  },
  {
    id: 3,
    name: "Iphone 7 case",
    quantity: 3,
    itemPrice: 25,
  },
]
```

No problemo, `reduce` to the rescue.

```js
const productsToSendToBackend = products.reduce((productsObject, product) => {
  return {
    ...productsObject,
    [product.id]: {
      name: product.name,
      quantity: product.quantity,
      price: product.itemPrice,
    },
  }
}, {})
const checkoutRequest = {
  products: productsToSendToBackend,
}
```

What's going on here? Well, here we use reduce to build up our `products` object. In other words, we **reduce** the array to a single object.
We send an empty object, `{}` as the initial value. So, the first pass, our accumulator `productsObject` will be an empty object.
We then return a new object, copying all properties from the accumulator over via the object spread operator (`...`).
The first time this runs, it will merge together two empty objects.
Second, we create a new property on our return object, with the key set to the product id, using javascript dynamic object properties (`{[key]: value}`).
Lastly, we set this property to an object following our backend developers' structure. Everyone is happy!

### Reduce is versatile

`reduce` is probably the most versatile of all higher-order functions built into the `Array` object. As you saw, it can be used to create numbers or objects. We can also use it to re-implement both the `map` and the `filter` function

```js
function map(arr, mapFn) {
  return arr.reduce((accumulator, current) => {
    return [...accumulator, mapFn(current)]
  }, [])
}

function filter(arr, filterFn) {
  return arr.reduce((accumulator, current) => {
    const temp = [...accumulator]
    if (filterFn(current)) {
      temp.push(current)
    }
    return temp
  }, [])
}
```

### Beware of the index!

When using these built-in functions, there are some caveats, especially when using map.
As you've seen, callback functions sent to the `map` and `filter` takes the current element it's operating on as the first argument, and `reduce` takes
an accumulator and the current element. However, two more arguments are passed in, the current index and the array we are operating on (`currentIndex` and `array`)

Here is the declaration for the `map` and `filter` functions.

```js
function callback(element, index, array)
```

And for the `reduce`

```js
function callback(accumulator, element, index, array)
```

Now, take for example this array

```js
const numbers = ["1", "2", "3", "4"]
```

Say you want to parse those strings to numbers. You could use `map` in combination with `parseInt` for this.

```js
const parsed = numbers.map(n => parseInt(n)) // [1, 2, 3, 4]
```

But you also want your code to be all tidy and nice, so you decide to just pass the `parseInt` directly to `map` since the `map` callback and the
`parseInt` functions both take a number as their first argument.

```js
const parsed = numbers.map(parseInt)
```

Now, if you run this code, you will get this not so nice looking result

```js
;[1, NaN, NaN, NaN]
```

What is going on here? Well, remember the second argument to the callback function passed into `map`? Yeah, a number representing the current index of the element in our array. And what is the second argument to `parseInt`? Also a number! However, this argument is the `radix`, or `base` in which to parse the number. This is where we run into trouble! Here is what's going on:

1. First pass, will be translated to `parseInt(1, 0)`. 0 is not a valid base but `parseInt` will ignore this and parse it with base 10 since, you know, this is javascript.
2. The second pass will be translated to `parseInt(2, 1)`. 1 is not a valid base, and this time, `parseInt` will not ignore this since, you know, this is javascript.
3. The third pass will be translated to `parseInt(3, 2)`. Now, 2 is a valid base (binary numbers use this), but `3` is not a valid number in base 2.

And so on.

So, beware of this when using `map`, `filter`, `reduce` and passing the callback function directly like above when it's type signature corresponds with the callback signature.

## Other notable examples

There are many other higher-order functions built-in right to the language. We won't dive any deeper into them, but here is a list of some that you probably will or already are using regularly.

```js
setTimeout(() => console.log("I run after a second!"), 1000)
setInterval(() => console.log("I run every second!"), 1000)
element.addEventListener("click", () => console.log("I run on clicks!"))
```

## Writing our own higher-order function!

Now that you are somewhat familiar with higher-order functions, both those that can return functions and those that take functions as arguments, let's try to build some of our own, useful higher-order functions!

### Drying up code with higher-order functions

Let's say you are building a parser for something. This parser needs to deal with lists of generic elements. These elements all share some properties in common but can differ a lot. Let's also say that a property that they all share is `type`, that tells us what type of element this is. Before we can operate on an element, we need to assert the type of it, otherwise, our parser will blow up!

```js
const elements = [
  { type: "a", href: "/checkout" },
  { type: "div" },
  { type: "p" },
  { type: "span" },
  { type: "blink", isBlinking: false },
  { type: "marquee" },
  { type: "cthulu", isSleeping: true },
  { type: "a", href: "/contact" },
]
```

So, we got our list of elements that we need to parse, now we have to build some functions that can assert what type they are so that we do not try to access properties that do not exist. One implementation of this could look like this:

```js
function isTypeA(element) {
  return element.type === "a"
}

function isTypeDiv(element) {
  return element.type === "div"
}

function isTypeCthulu(element) {
  return element.type === "cthulu"
}
// And so on
```

It seems like we are repeating ourselves pretty much, almost all the functions look exactly the same. Definitely room for improvement.

Now, remember the `add` example, where we made multiple "adders" with one function that returned another? Let's apply the same principle here.

First, we make a higher-order function, one that returns a new function. We want the returned function to assert that the element is of a certain type.

```js
function makeTypeChecker() {
  return function checkType(element) {
    return element.type === // what exactly?
  }
}
```

The next step is to figure out what to check the type of the element against. Remember, that the inner function can remember arguments and variables from the outer function due to the outer functions containing scope. So, let's pass in a string to check the type against.

```js
function makeTypeChecker(type) {
  return function checkType(element) {
    return element.type === type
  }
}
```

Now, we can put it all to use to make ourselves some type-checker functions for our parser.

```js
const isTypeA = makeTypeChecker("a")
const isTypeSpan = makeTypeChecker("span")
const isTypeCthulu = makeTypeChecker("cthulu") // wait, what?

// And so on
```

Well, we are kind of repeating ourselves here as well, but not in the same way. And now, if we need to make a new type-checker function, we only have to write 1 line instead of 3. The winnings of this small example might not be that big, but imagine that the logic of `makeTypeChecker` is longer. This way is also less error-prone, since the logic for the type checking is contained in one place, instead of multiple functions (that you probably copy-pasted). If your first implementation contained a bug, and you have 10 different kinds of elements, that's 10 places to fix the bug, instead of just one!

### Using them for events on objects

We can use higher-order functions to broadcast certain events to the creator of an object. Let's go back to the parser example. Say you build your awesome, well-abstracted parser. You are ready to package it nicely and let your fellow colleague (or npm users) use it. However, you want to give them some control over certain things, such as when an item fails to be parsed, or if your parser unexpectedly crashes out of the blue. Higher-order functions to the resuce!

```js
const createParser = ({ onItemParseFail, onParserError }) => {
  // Your super awesome code!

  // More awesome code!

  if (currentLine.hasFailed && onItemParseFail !== undefined) {
    onItemPraseFail(currentLine)
  }

  // Parse even more!

  if (wholeThingFailed && onPraserError !== undefined) {
    onParserError(veryThoughtOutError)
  }
}
```

Now, the user of your parser can send in their own functions to do something when a line fails to parse, or when the whole thing unexpectedly breaks down, such as sending a message to slack or sending an email to everyone in the IT-team.

```js
const parser = createParser({
  onItemParseFail: currentLine => {
    sendMessageToSlack(
      `AwesomeParser failed to parse: ${formatLine(currentLine)}.`
    )
  },
  onItemParseFail: error => {
    sendMessageToSlack(`AwesomeParser crashed: ${formatError(error)}.`)
    sendEmailToEveryone(`AwesomeParser crashed: ${formatError(error)}`)
  },
})
```

## Wrap up

So, now you hopefully know how to use higher-order functions, and the benefits of them. If you're already using them - great, use them and use them more. If not, go out into the world throwing and returning functions everywhere! Fingers crossed, you might not have to write a single `for` loop ever again!
