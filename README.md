# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @james_hagans/lotide`

**Require it:**

`const _ = require('@james_hagans/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: gets the head (first element) in an array
* `function2(tail)`: gets the tail (everything except the first element in an array)
* `function3(middle)`: gets the middle of an array
* `function3(countOnly)`: gets a count of how many ta specified item appears in an array
* `function3(CountLetters)`: counts the letters in a given string
* `function3(findKey)`: finds a specific key in an object that has a specified value
* `function3(letterPositions)`: provides the index of each letter in a string 
* `function3(takeuntil)`: gets the elements fom an array from teh first element until specific to stop 