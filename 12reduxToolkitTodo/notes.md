1. redux and react-redux are two different things.
- redux is a core library.
- react-redux is a implementation of redux used for wiring of react and redux

2. Redux Toolkit is a library that simplifies the development of Redux applications. 
Here are some of its key usages:
## Simplified State Management:
(i) Immer: Redux Toolkit uses Immer.js to create immutable updates to your state, making it easier to reason about changes and prevent unintended side effects.
(ii) **createSlice:** This function allows you to create Redux slices, which are self-contained pieces of state that can be easily managed and combined.
(iii) Thunks:Redux Toolkit includes thunks, which are middleware that allow you to perform asynchronous operations within your reducers. This makes it easier to fetch data from APIs or handle other asynchronous tasks.
(iv) RTKQ Query:This feature provides a powerful way to manage data fetching and caching in your Redux applications. It simplifies common patterns like fetching data based on URL parameters, caching data, and handling errors.
(v) Pre-built Reducers: Redux Toolkit offers pre-built reducers for common use cases like managing arrays or objects, saving you time and effort.
(vi) Boilerplate Reduction: By handling common Redux patterns and providing useful utilities, Redux Toolkit reduces the amount of boilerplate code you need to write, making your development process more efficient.

In summary, Redux Toolkit is a valuable tool for developers who want to use Redux effectively and efficiently. It simplifies state management, asynchronous operations, and data fetching, making it easier to build complex Redux applications.

# Steps -

# Step 1: Create a store
- usually there's only 1 store for each application
- this store is called "single source of truth"

- first we import configureStore
- configureStore can contain one or multiple key-value property
- configureStore contains all the reducers

# Step 2: Create features or Slice
- in documentation, features are called Slice
- createSlice method is used to create slice
- we need 3 things to create slice :
1. name
2. intialState (just like useState for default values)
3. list of reducers

- reducers is a object containing multiple key-function pairs.
- the function in reducer contain 2 values :
1. state - contain updated state value in the store
2. action - contains action.payload etc

- in context api, the state is not preserved. so for adding or pushing values, we first take out all the array from objects, spread them then add the value.
- but in redux-toolkit, the state is preserved so we directly used state.todos.push(todo) i.e. state.propertyName_in_intialState.push(name_in_createSlice)

# Step 3: Export reducers
- export individual reducers/actions - bec we don't know which component will use which reducer

- export the main source of all the reducers - used in store

# Step 4: Import reducer list in store

# Step 5: Make components
1. Sending values : useDispatch()
- send the imported reducer through dispatch

2. Receiving Values : useSelector()
- since we need to specify which value we need to select, so we need to access the state
- for accessing the state, we use callback

# Step 6: Update App.jsx & main.jsx
1. import components in App.jsx
2. wrap the App with Provider with value of store in main.jsx