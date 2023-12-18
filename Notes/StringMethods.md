# String Functions in JavaScript/TypeScript

## `str.length`

- Description: Returns the length of the string.
- Return Type: Number
- Example:

    ```javascript
    const str = "Hello World";
    console.log(str.length); // Output: 11
    ```

## `str.indexOf(target)`

- Description: Returns the starting index of the first occurrence of the target word in the string.
- Return Type: Number
- Example:

    ```javascript
    const str = "Hello World";
    console.log(str.indexOf("World")); // Output: 6
    console.log(str.indexOf("Wrld")); // Output: -1
    ```

- Edge Cases:
  - If the target word is not found in the string, it returns -1.

## `str.lastIndexOf(target)`

- Description: Returns the index of the last occurrence of the target word in the string.
- Return Type: Number
- Example:

    ```javascript
    const str = "Hello World World";
    console.log(str.lastIndexOf("World")); // Output: 12
    console.log(str.lastIndexOf("Wrld")); // Output: 6
    ```

- Edge Cases:
  - If the target word is not found in the string, it returns -1.

## `str.slice(start, end)`

- Description: Extracts a portion of the string and returns it as a new string. The extracted portion starts at the specified `start` index and ends at the specified `end` index (excluding the `end` index itself).
- Return Type: String
- Example:

    ```javascript
    const str = "Hello World";
    console.log(str.slice(0, 5)); // Output: "Hello"
    console.log(str.slice(6)); // Output: "World"
    ```

## `str.substring(start, end)`

- Description: Similar to `str.slice()`, `str.substring()` extracts a portion of the string and returns it as a new string. The extracted portion starts at the specified `start` index and ends at the specified `end` index (excluding the `end` index itself).
- Return Type: String
- Example:

    ```javascript
    const str = "Hello World";
    console.log(str.substring(0, 5)); // Output: "Hello"
    console.log(str.substring(6)); // Output: "World"
    ```

### slice() vs substring()

Both `slice()` and `substring()` methods in JavaScript are used to extract parts of a string. However, there are some differences between them:

1. **Negative indices**: `slice()` accepts negative indices, which count from the end of the string. `substring()` does not accept negative indices. If a negative or NaN is passed, it is treated as if it were 0.

2. **Swapping indices**: If the two arguments to `substring()` are in the wrong order (the second is smaller than the first), `substring()` will swap them. `slice()` will not do this.

3. **Return value when indices are equal**: If the two arguments are equal, `slice()` returns an empty string, while `substring()` returns the character at that index.

```javascript
function diffInSliceAndSubString(str){
  console.log("When indices are same:", str);
  console.log("After slice:", str.slice(1, 1));
  console.log("After substring:", str.substring(1, 1));

  console.log("When indices are negative");
  // counts from the end of the string 
  console.log("After slice:", str.slice(-2));// output: d!
  //counts from 0
  console.log("After substring:", str.substring(-1));//output: Hello World!
  
  console.log("When indices are in wrong order");
  console.log("After slice:", str.slice(9 ,5));// ignores and gives a empty string 
  console.log("After substring:", str.substring(9,5));// switches the order: , Wo
}
diffInSliceAndSubString("Hello, World!");
```

## `str.replace(target, replacement)`

- Description: Replaces all occurrences of the `target` substring in the string with the `replacement` substring and returns a new string.
- Return Type: String
- Example:

    ```javascript
    const str = "Hello World";
    console.log(str.replace("World", "Universe")); // Output: "Hello Universe"
    ```

## `str.split(separator)`

- Description: Splits the string into an array of substrings based on the specified `separator` and returns the array.
- Return Type: Array
- Example:

    ```javascript
    const str = "Hello World";
    console.log(str.split(" ")); // Output: ['Hello', 'World']
    console.log(str.split("  ")); // Output: ['Hello World']
    console.log(str.split("l")); // Output: ['He','','o Wor','d']
    ```

## `str.trim()`

- Description: Removes leading and trailing whitespace from the string and returns the trimmed string.
- Return Type: String
- Example:

    ```javascript
    const str = "   Hello World   ";
    console.log(str.trim()); // Output: "Hello World"
    ```

## `str.toUpperCase()`

- Description: Converts all characters in the string to uppercase and returns the new string.
- Return Type: String
- Example:

    ```javascript
    const str = "Hello World";
    console.log(str.toUpperCase()); // Output: "HELLO WORLD"
    ```

## `str.toLowerCase()`

- Description: Converts all characters in the string to lowercase and returns the new string.
- Return Type: String
- Example:

    ```javascript
    const str = "Hello World";
    console.log(str.toLowerCase()); // Output: "hello world"
    ```
