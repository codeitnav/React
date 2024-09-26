1. react-dom : used for web dev
2. react-native : used for app dev

--> Metadata : data that provides info about other data 
               In other words, metadata is a set of attributes or descriptive information about a particular piece of data, such as a file, a document, or a project.

--> The package.json file also lists the dependencies required by your project. 
--> Dependencies are libraries or modules that your project relies on to function properly.               

in package.json, dev-dependecies : used only for development purposes
                                   they are not sent to the client

react code is often called SPA - single page application
bec all the work is done on a single pg i.e. index.html


<> </> --> this is called fragment
bec jsx components expects you to return only one value,
so, fragments wrap many elements in them and lets the developer return many elements


best practices :
1. the name of the func and file in components should be capitalized,
2. if the component is returning html - file name .jsx
   if the component is returning pure javascript - file name .js
   in vite, file name of component - .jsx
   
### Hooks : 
--> hooks are special functions that allow you to use state and other React features without writing a class.

use of **hooks** : UI updation/data updation --> react controls UI

1. useState : This hook lets you add state to functional components.
--> Syntax: const [state, setState] = useState(initialState);
--> useState gives 2 values in terms of array : 1.literal 2.function

2. useEffect: This hook lets you perform side effects in function components. 
--> It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.
--> Syntax: useEffect(() => { /* effect */ }, [dependencies]);

3. useContext:
--> This hook lets you use the context feature without needing to use the Consumer component.
--> yntax: const value = useContext(MyContext);

4. useReducer:
--> This hook is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
--> Syntax: const [state, dispatch] = useReducer(reducer, initialState);

5. useRef:
--> This hook lets you persist values between renders and can be used to directly access a DOM element.
--> Syntax: const refContainer = useRef(initialValue);

6. useCallback:
--> This hook returns a memoized callback function. It is useful for optimizing performance by memoizing event handlers and callbacks.
--> Syntax: const memoizedCallback = useCallback(() => { /* callback */ }, [dependencies]);



## virtual DOM, react fiber & Reconciliation :

1. createRoot feature creates an exact structure like dom 
--> then compares its dom with actual dom and make only those changes in UI which are updated
--> browser removes the whole DOM and repaints(recreates) the whole DOM structure (reloading the webpage)
--> thus, in virtual dom, trace the whole changes from a tree like structure then update only changed parts

2. react fiber : key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

3. **Reconciliation** is the algorithm behind what is popularly understood as the "virtual DOM."

4. Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:
--> Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
--> Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

## Q) why should keys be used to iterate over an array in react? (if keys are not used, then also react performs the same task just with a warning)
Ans.) In React, keys are used to help identify which items in a list have changed, been added, or removed. 
--> This helps React to manage the list more efficiently and update the UI accordingly. 
--> Here are some reasons why keys are important when iterating over an array:

1. Performance Optimization:

Keys help React identify which items have changed, allowing it to re-render only those items instead of the entire list. This improves the performance of the application.

2. Stable Identity:

Keys provide a stable identity to list items. Even if the list items are rearranged, added, or removed, React can keep track of each item correctly using the keys.

3. Avoiding Unnecessary Re-Renders:

Without keys, React might re-render all the items in the list even if only one item has changed. Using keys helps React to avoid unnecessary re-renders, improving efficiency.

4. Efficient Diffing:

React uses a diffing algorithm to determine how the UI should be updated. Keys help this algorithm by giving a unique identifier to each item, making it easier to compare and update the list efficiently.

### The key points are:

1. In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
2. Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
3. A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

## What is a fiber?
We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

--> pause work and come back to it later.
--> assign priority to different types of work.
--> reuse previously completed work.
--> abort work if it's no longer needed.


### useCallback
--> useCallback is a react Hook that lets you cache a function definition between re-renders.
**syntax** : const cachedFn = useCallback(fn, dependecies)

# JSX
1. JSX (JavaScript XML) is a syntax extension for JavaScript, commonly used with React(react is a popular JavaScript library for building user interfaces).
2. JSX allows you to write HTML elements in JavaScript and place them in the DOM without needing to use functions like createElement() or appendChild(). 
3. JSX is a syntax extension of JavaScript. It’s used to create DOM elements which are then rendered in the React DOM.
4. A JavaScript file containing JSX will have to be compiled before it reaches a web browser.

5. A JSX expression that spans multiple lines must be wrapped in parentheses: ( and ).
e.g.: const myList = (
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
);

6. JSX does not support if/else syntax in embedded JavaScript. There are three ways to express conditionals for use with JSX elements:
(i) a ternary within curly braces in JSX
(ii) an if statement outside a JSX element, or
(iii) the && operator.

7. Any text between JSX tags will be read as text content, not as JavaScript. In order for the text to be read as JavaScript, the code must be embedded between curly braces { }.

8. **JSX element event listeners** : An event listener attribute’s value should be a function. Event listener functions can be declared inline or as variables and they can optionally take one argument representing the event.

9. **JSX .map() method** : The .map() method is used to transform an array into a new array.
--> eg :
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

const listItems = items.map((item, index) => (
  <li key={index}>
    {item.name}
  </li>
));

--> Breakdown:
(i) array.map(): This applies the map() method to the given array.
(ii) (item, index): The callback function takes two arguments:
(iii) item: The current element being processed.
(iv) index: The index of the current element in the array.
(v) return: The callback function returns a new JSX element for each item in the array.
(vi) <JSXElement>: This is the JSX element you want to create for each item.
(vii) key={index}: The key attribute is crucial for React to efficiently update the DOM. It should be a unique identifier for each item. Using the (viii) index is often a good choice, but consider other unique properties if available.
(ix) {...item}: This spreads the properties of the current item directly onto the JSX element.

--> **common scenarios where you might use .map():**

(i) *Rendering Lists:* To create lists of elements (like <ul> or <ol>) based on an array of data.
- For example, rendering a list of products, users, or comments.
(ii) Generating Dynamic Components:To dynamically create different types of components based on conditions or data.
- For instance, rendering different components for different types of items in a list.
(iii) Creating Custom Components: To build reusable components that accept an array of data as a prop and render corresponding elements.
(iv) Data Visualization: To create charts, graphs, or other visualizations based on data.

--> **Key Points:**
(i) Always use a unique key prop: When using .map(), ensure that each element has a unique key attribute to help React efficiently update the DOM. This is essential for performance and prevents unnecessary re-renders.
(ii) Consider performance: For large datasets, be mindful of performance implications. If you're dealing with a significant number of elements, you might explore techniques like virtualization or memoization to optimize rendering.
(iii) Use .map() judiciously: While .map() is a powerful tool, use it selectively. If you only need to render a single element or a small number of elements, it might be more efficient to use direct JSX expressions.