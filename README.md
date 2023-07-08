## Repository for the revision and practice of all the fundamental and important React concepts for 2022

# Projects Which are part of the repo

1. [Expense Tracker](https://varun325.github.io/React/) _<-live link_

- ![](./project_screenshots/expenseTracker.png?raw=true "expense tracker")
- Makes use of the following concepts States/useState hook, Props, Components, Event Handling, Two Way Binding, Hooks, Sending state from child to parent, passing function poniter to child, Controlled/presentational component, Rendering data,Styling data

## React overview

- node js is a JS framework that can run JS outside of a browser.
- The easy way to create a react project would be to use Create React App
  - `npx create-react-app my-app`
  - `cd my-app`
  - `npm start`
- using create react app and node js can help us in dynamically checking changes we've made in the code being rendered into the browser
- it also helps in optimizing steps in the end as well.
- react dom and react are both part of the react library
- import reactDom is a function coming from react dom
- createRoot is creating the main hook or anchor point fo the app which tells where everything should be placed.
- now on this object we can call the render function to tell what we're going to render here.
- App in the end is a component, which will be rendered inside of the element that is there in the index.html file with that id.
- App is also just a function which has some HTML which we're exporting outside.

- ## What is JSX?

  - JavaScript and XML
  - HTML is technically just XML
  - And React behind the scenes can do some transformations and understand the HTML code or well atleast process it.
  - if you search for your component written in JSX in the sources in inspect, you'll see the transformed form of the code that react has generated.
  - In JSX, inside the `{}` we can do basic java script expressions
  - In previous versin of React projects, we had to import react in every file that used jsx, now with modern projects craeted by create-react-app, we don't have to do that anynmore.
  - Under the hood, when we return a function in jsx, the React.createElement function is called and the elements are passed in it's argumnet with a supposedly infinite list.
  - ```jsx
    return (
      <div>
        <h2>"hello"</h2>
        <Expenses items={expenses} />
      </div>
    );

    // is basically something like this:

    return React.createElement(
      "div",
      {}, // some attribute of this element
      React.createElement("h2", {}, "hello!"), //chld element
      React.createElement(Expenses, { items: expenses })
    );

    //This is the under the hood code that React is using
    //And modern projects can use these methods inherently without mentioning.
    ```

    - The above example also shows why in React and jsx, there can be only one parent wrapper element before returning.

- ## How React works?
  - In react we create components
  - We declare these components.
  - You can use components directly as XML tags inside the html code of the App component.
    - you need to import the components first.
  - There must only be one root component
  - Just add a css file and import it if you need one
  - as class is a reserved word in JS, when you use it in JSX, you have to use className instead.
  - You may use a function as many times as needed.
- > Manual DOM manipulation gets very cumbersome, React makes it easy for everyone
- ## Common conventions
  - Use pascal case and same name as the function inside for file name
  - React thinks that Lower case elements are default HTML elements and Upper case elements are custom elements created by the developer.
- ## Simple order
  - create a component
  - import a component
  - use a component
- ## Why components?
  - reusability
  - Separations of concerns
  - Don't repeate youself
  - Don't do too many thing in one and the same place.
  - Split big chunks of code into multiple smaller functions.
- ## Props
  - In react you can pass data using props
  - add props as an argument in the function code for the component.
  - Add the key value pairs as `key={value}` in the jsx code where we're calling the component
  - Use the props.key as values in the component's function code.
  - Props can be passed down from components to sub components which sometimes will decrease the complexity
- ## Composition

  - you may create a component which instead of props takes elements or data as value inside the opening and closing element tags.
  - here you can use a special prop known as .children/ props.children to pass the data
  - > name of prop can be anything.
  - > you can pass class name as a prop as well and then append it to another string in jsx and use all the classes that you want to.

- ## Event Handling

  - You can pass events as props to the jsx code and they work like they're supposed to.
  - A lot of these events like onClick are suupported by React.
  - You can call an onClick event on JSX code by mentioning the name the of the function in the prop key value.
  - ```javascript
     <button onClick={functionName}></button>

     <button onClick={()=>{console.log("clicked")}}></button>


      //note that writing some thing like:

      <button onClick={functionName()}></button>
      //Will cause problems beacuse JSX is java script and this function will end up executing during the complilation of jsx code.
      //Instead just passing the name of the function is enough and React will handle the rest.


    ```

- ## How are components handled in React?

  - The componets are mostly placeholders for function calls in the JSX
  - While parsing React will take each component one by one and try to parse and render them and will turn keep going through the hole hierarchy and render everything by calling these component functions.
  - But react will do all this exactly once, which in turn means that just because we have an onclick event added that changes the value which was used as prop to render something, that doesn't mean that change will be represented live on the UI, because the rendering happened only once, that was initially.
    - > Question: So, how can we deal with such issues? Everyone wants a dynamic website, right?
    - > Answer: STATES!!

- ## State

  - React doesn't care about some random variable changing enough to render some component again.
  - To make React actually care about something, you need to imort useState function from 'react'

    - ```javascript
      import React, { useState } from "react";
      ```

  - This useState is a React Hook, one of the Many hooks
  - To use this state you can pass the value of a variable that can be the default value of this state variable, the useState function this then return two values which can be passed into an array and used later in the future.

  - ```javascript
    const [title, changeTitle] = useState(props.title);
    //this will take the value of props.title and
    //return a variable as well as a function to
    //change that variable, which we can name accordingly

    const clickHandler = () => {
      setTitle("checked");
    };
    ```

  - For simplicity we'll just call this the changeState function for this documentation
  - Calling changeState funciton till not only change the value of this returned variable, but it will also tell React to re-render all the components where this variable was used/registered.
  - When a component is being rendered, React registers the state after seeing the useState function
  - So, each copy of this component will have it's own state being managed by React.
  - When the changeState function is called, the particular instance will be re-rendered.
  - const works in case of the state variable and is changing because we're not exactly saving the actual value of something in the variable, but react uses it to some internal process to know which value to load instead of this const.
  - The default value passed into the useState hook is only considered when Component is rendered for the very first time
  - When the next time the state in re rendered due to change in state due to changeState function, React will only use the new value.
  - States can be updated in many ways and not just a click event.

- ## Updating multiple states using a single useState hook

  - ```javascript
    // if you have multiple variable which need state update, you could ideally call three different hooks to achieve that and that is completely fine.
    //This in a way binds all of these variable's states into one state and change in one will require change in all.
    //But in case you want to do it using a single useState hook, you could do sommething like this:

    const [userInput, setUserInput] = useState({
      enteredTitle: "",
      enteredDate: "",
      enteredAmount: "",
    });

    const titleChangeHandler = (event) => {
      setUserInput({
        ...userInput, //spread operator use to get the previous key and value pairs
        enteredTitle: event.target.value, // overriding this key value pair
      });
    };

    //while the above function gets the job done in most cases, as the execution of these functions are not instantaneous
    // but scheduled, there's a chance that an older snapshot might end up getting used for previous state

    //So whenever the new state depends on previous state, doing something like this is better

    const titleChangeHandler = (event) => {
      setUserInput((userInput) => {
        return { ...userInput, enteredTitle: event.target.value };
      });
    };

    //here React will make sure that this function gets executed instantaneously
    ```

- ## Two way binding

  - Two way binding is simple, just add the state variable back as value to a form input
  - This makes sure that on updating the states, the changes are reflected back on the UI

- ## Hooks

  - Like useState there are many other React hooks
  - Hooks all start with 'use' prefix in small letters
  - These hooks should be called directly inside a component function, not anywhere inside a nested function or something.
    - _There is an exception to this,_
  -

- ## Sending data upwards/ from child to parent component

  - While the name sounds somewhat misleading, it's actually simple.
  - In javascript, the functions are bounded with the variables in their lexicographical parent as closures.
  - So, if one is to create a function and send it to child component through a prop and then execute the function in the child component, the changes will be reflected in the variable in the parent because it's reference was sent in the closure alongside the function to the prop.
  - One can leverage this to make changes in variables sent by the parent along with the functions and in a way send data upwards.

- ## Controlled Component

  - Sending a value upwards to the parent and then sending the same value downwards back to children results into the creation of controlled component.
  - Both the value and function are in parent component and child component is just an actor.

- > A component without a state is known as a presentational or dumb component.

- ## Rendering a list

  - A list can be rendered easily by using the javascript map function
  - ```javascript
    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            onChangeFilter={filterChangeHandler}
            selected={filteredYear}
          />
          {props.items.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </Card>
      </div>
    );
    ```
  - > There should always be a unique id in a group of objects that we're going to render as a list in React, because the way react works, it always adds an element to the end and then re-renders all the other elements and changes their values one by one. Not only is it ineffiecient, it also leads to issues if we end up using state within these items to do something. Having a unique identifier makes sure, that only one item is added and rest of the items don't have to be re-rendered. In other words, react should have a way to indentify that the item it's going to render between a group of items is unique.

- > If a variable depends on a state variable, change in state also re renders components dependent on the variable. The change in a state triggers a re-render and everything that uses a reference of the state directly or indirectly will be re-evaluated.
- > change in a state triggers the re-evaluation of all the variables and their dependent variables where the state is being used, this will lead to triggering re-rendering of all the components which are using variables from this hierarchy.
- It's okay to use variables which can save jsx code and then use those variables in the return and keeping the jsx code lean.
  - ```javascript
    let expensesContent = <p>No content was found</p>;
    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
    }
    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            onChangeFilter={filterChangeHandler}
            selected={filteredYear}
          />
          {expensesContent}
        </Card>
      </div>
    );
    ```
- ## Styling in React

  - You can pass style parameters as a javascript object inside the JSX parantheses
    - ```javascript
      return (
        <div className="chart-bar">
          <div className="chart-bar__inner">
            <div
              className="chart-bar__fill"
              style={{ height: barFillHeight }}
            ></div>
          </div>
          <div className="char-bar__label">{props.label}</div>
        </div>
      );
      ```

- ## Dynamic styling in react

  - ## Inline Styling

    - We can use inline styling in react using the style prop and passing the style object with conditonal logic.
    - ```javascript
      return (
        <form onSubmit={formSubmitHandler}>
          <div className="form-control">
            <label style={{ color: !isValid ? "red" : "black" }}>
              Course Goal
            </label>
            <input
              type="text"
              style={{
                borderColor: !isValid ? "red" : "black",
                background: !isValid ? "salmon" : "transparent",
              }}
              onChange={goalInputChangeHandler}
            />
          </div>
          <Button type="submit">Add Goal</Button>
        </form>
      );
      ```

  - ## Dynamic classes

    - Classes can also be added dynamimcally by using the backtick expressions and injection strings in them based on conditional logic using `${}`
    - ```javascript
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
      ```

- ## The css files are not scoped, because when everything thing will be packed for web, these files will work throughout the project, this can be problem in large projects where a lot of developers are working.

  - Here are some popular ways to handle this issue:

    - ## Styled components

      - Install styled components in the project
      - ```bash
        npm install --save styled-components
        ```
      - In styled components, you can import an element using styled.button`` method and then you can add the styles inside the backticks.
      - You can use &: for any special states of the clas like hover.

        - ```javascript
          import styled from "styled-components";

          const Button = styled.button`
            font: inherit;
            padding: 0.5rem 1.5rem;
            border: 1px solid #8b005d;
            color: white;
            background: #8b005d;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
            cursor: pointer;

            &:focus {
              outline: none;
            }

            &:hover,
            &:active {
              background: #ac0e77;
              border-color: #ac0e77;
              box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
            }
          `;

          export default Button;
          ```

        - This will generate classes on global names dynamically on run time but all these classes will have have unique names.
        - you can also use dynamic classes with styled components by creating a sepearate component and then appending the dynamic class in it using props.
        - ```javascript
            const FormControl = styled.div`
            margin: 0.5rem 0;

            & label {
              font-weight: bold;
              display: block;
              margin-bottom: 0.5rem;
            }

            & input {
              display: block;
              width: 100%;
              border: 1px solid #ccc;
              font: inherit;
              line-height: 1.5rem;
              padding: 0 0.25rem;
            }

            & input:focus {
              outline: none;
              background: #fad0ec;
              border-color: #8b005d;
            }

            &.invalid input {
              border-color: red;
              background: salmon;
            }

            &.invalid label {
              color: red;
            }`;

            return (
              <form onSubmit={formSubmitHandler}>
                <FormControl className={`${!isValid ? "invalid" : ""}`}>
                  <label>Course Goal</label>
                  <input type="text" onChange={goalInputChangeHandler} />
                </FormControl>
                <Button type="submit">Add Goal</Button>
              </form>
            );
          };

          ```

        - Another way to handle this would be to use props direclty inside the style part of the styled componenets inside the backticks by utilizing lambda expressions
        - ```javascript
            const FormControl = styled.div`
            margin: 0.5rem 0;

            & label {
              font-weight: bold;
              display: block;
              margin-bottom: 0.5rem;
              color: ${(props) => (props.invalid ? "red" : "black")};
            }

            & input {
              display: block;
              width: 100%;
              border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
              background: ${(props) => (props.invalid ? "salmon" : "transparent")};
              font: inherit;
              line-height: 1.5rem;
              padding: 0 0.25rem;
            }

            & input:focus {
              outline: none;
              background: #fad0ec;
              border-color: #8b005d;
            }

            &.invalid input {
              border-color: red;
              background: salmon;
            }

            &.invalid label {
              color: red;
            }`;

            return (
              <form onSubmit={formSubmitHandler}>
                <FormControl invalid={!isValid}>
                  <label>Course Goal</label>
                  <input type="text" onChange={goalInputChangeHandler} />
                </FormControl>
                <Button type="submit">Add Goal</Button>
              </form>
            );
          };

          ```

        - Media queries can also be directly used in the styled components
        - ```javascript
          import styled from "styled-components";

          const Button = styled.button`
            width: 100%;
            font: inherit;
            padding: 0.5rem 1.5rem;
            border: 1px solid #8b005d;
            color: white;
            background: #8b005d;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
            cursor: pointer;
            @media (min-width: 760px) {
              width: auto;
            }

            &:focus {
              outline: none;
            }

            &:hover,
            &:active {
              background: #ac0e77;
              border-color: #ac0e77;
              box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
            }
          `;

          export default Button;
          ```

    - ## CSS Modules

      - This is a rather simple way to make classes limited to local scope, it uses css modules, these can be installed and are supported by create react app by default.
      - Simply rename your css classes to have the suffix .module.css
      - import the css class something like `import styles from "./Button.module.css";`
      - Then use the class using the styles object, the styles object will have all the classes in the file as properties.
      - Under the hood it makes classes unique for the particular component on by creating dynamic names for the elements of that component.
      - ```javascript
        import React from "react";
        import styles from "./Button.module.css";

        const Button = (props) => {
          return (
            <button
              type={props.type}
              className={styles.button}
              onClick={props.onClick}
            >
              {props.children}
            </button>
          );
        };

        export default Button;
        ```

      - Dynamic styles can be used in with css modules like:
      - ```javascript
        return (
          <form onSubmit={formSubmitHandler}>
            {/* <FormControl invalid={!isValid}> */}
            <div
              className={`${styles["form-control"]} ${
                !isValid ? styles.invalid : ""
              }`}
            >
              <label>Course Goal</label>
              <input type="text" onChange={goalInputChangeHandler} />
              {/* </FormControl> */}
            </div>
            <Button type="submit">Add Goal</Button>
          </form>
        );
        ```
      - > as hyphen will be considered as a javascript operator, if a class has hyphen in the name, string manipulation with backtick expressions could be used.
        - `` className={`${styles["form-control"]} ${ !isValid ? styles.invalid : "" }`} ``

- ## Debugging in React
  - Errors can be seen in the npm console.
  - Errors can be seen on the webpage itself.
  - Chrome breakpoints can be used in the chrome dev tools.
  - React dev tools extension can be installed as well for debugging.
- ## JSX Limitations

  - You can't have more than one root level elements.
    - Which makes sense because you can't return more than one value in JS
    - One way to work around this issue is to use a Wrapping div or any other element.
      - Because that makes sure that there is only one returning value.
    - An alternate way to deal with it would be to return an array of jsx elements
      - ```javascript
        return [<Component1 />, <Component2 />];
        ```
      - This works but needs unique keys to avoid errors on runtime.
      - This is a possible solution but isn't preffered because it's too cumbersome to handle.
  - ## Thus handling this leads to a new problem: DIV soup

    - In your final dom that's returned to the end user, there can be too many divs
    - It can break your style

    - It's not a good practice
    - It's also making your application slower because you're rendering unnecessary content.
    - ## Wrapper component

      - Creating a Wraper component instead of <div> can be one way to deal with it.
      - ```javascript
        const Wrapper = (props) => {
          return props.children;
        };
        export default Wrapper;
        ```
      - ```javascript
        return (
          <Wrapper>
            <h1></h1>
            <Component />
          </Wrapper>
        );
        ```

    - ## Fragment
      - Because this wrapper is so useful, React gives us one by default and that is known as Fragment
      - There can be two ways to use fragments, one is by using ```<React.Fragment><React.Fragment>``` and another is by using ```<></>```
      - ```<></>``` might not work for some projects depending upon the project setup.

- ## React portals
  - Rect portals can be used to render a component somewhere else other than parent of the component, it can be especially useful when you are creating a component based on some condition but it has to be added in a different node in the dom tree. For example clicking a button in a deeply nested component and creating an alert box directly inside the body.
    - ```jsx
        import React from 'react';
      import ReactDOM from 'react-dom';

      function Modal(props) {
        if (!props.isOpen) {
          return null;
        }

        return ReactDOM.createPortal(
          <div className="modal">
            <div className="modal-content">{props.children}</div>
          </div>,
          document.body
        );
      }

      function App() {
        const [showModal, setShowModal] = React.useState(false);

        const toggleModal = () => setShowModal(!showModal);

        return (
          <div>
            <button onClick={toggleModal}>Show Modal</button>
            <Modal isOpen={showModal}>
              <h2>Hello, World!</h2>
              <button onClick={toggleModal}>Close Modal</button>
            </Modal>
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById('root'));
      ```
- ## useRef hook
  - useRef hook can be used when one needs to access the value of an event, input or a variable without re-rendering the page/component. Also, while just accessing the value of a state won't cause any re-renders, if the state variable is deeply nested or is part of a large array, it can stil lead to performance issues.
  - if you use a ref to manage a component and make changes to dom directly using the ref, that component becomes an uncontrolled component because instead of react you're managing it using ref and dom manipulation.
  - ```jsx
        import React, { useState, useRef } from 'react';

    function App() {
      const [textState, setTextState] = useState('');
      const inputRef = useRef(null);

      const handleFocus = () => {
        inputRef.current.value = 'Focused!';
        console.log(inputRef.current.value); // logs 'Focused!'
      };

      const handleInputChange = (event) => {
        setTextState(event.target.value);
        console.log(textState); // logs the previous value of textState, doesn't update immediately
      };

      return (
        <div>
          <input
            id="my-input"
            type="text"
            ref={inputRef}
            onFocus={handleFocus}
            onChange={handleInputChange}
          />
        </div>
      );
    }
    ```
- # What is the main job of React or any other Single Page Front End Framework?
> React to the user input and react accordingly
  - Apart from the main job, everything else is a side job, for example: things like http requests, storing data in broswer cache or anything else which isn't part of the rendering logic.These tasks must happen outside of the normal component evaluation and render cycle, especially since they can block/delay the rendering
- ## useEffect hook
  - Functionalities which are not part of the reactions to the user interaction or direct change in the components are side effects, these side effects should not be part of the normal react code as they can delay the rendering process.
  - For example, an http request which is calling a large amount of data should be a side effect as if it is called everytime the component reloads it will add too much overhead on the network traffic and compute, also it's a wasting resources when nothing has changed in the result of the http call and call is being made regardless.
  - By using the useEffect hook, we can use an array of refrences or state variables, if the values of these variables change, the effect will be called. We can destructure objects and mention their properties to make sure that the effects take place on a much granular level.
    - ```jsx
      import React, { useState, useEffect } from 'react';

      function App() {
        const [data, setData] = useState(null);
        const [toggle, setToggle] = useState(false);

        useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((data) => setData(data));
        }, [toggle]);

        const handleToggle = () => {
          setToggle(!toggle);
        };

        if (!data) {
          return <div>Loading...</div>;
        }

        return (
          <div>
            <h1 onClick={handleToggle}>{data.title}</h1>
            <p>{data.completed ? 'Completed' : 'Not completed'}</p>
          </div>
        );
      }
      ```
 - ## Debouncing
    - Updating a state or calling an effect everytime the data in a field changes can be taxing for many reasons.
      Imagine the user is typing a long user name or something, and for that we're making an asynchronous call in the background which can achieve some particular task in the background like searching a database or something similar, if user types 200 characters and everytime a character is typed, we search the database, it's going to be too many calls and hence a very high overhead over the system.
    - In such a scenario, one can use debouncing, that is instead of calling the effect for everystate change, have a delay before the next call can be made.
    - ```jsx
          import React, { useState, useEffect } from 'react';

      function SearchBox() {
        const [searchTerm, setSearchTerm] = useState('');
        const [searchResults, setSearchResults] = useState([]);

        useEffect(() => {
          const debounceTimeout = setTimeout(() => {
            // Call the search function after a delay of 500ms
            searchDatabase(searchTerm);
          }, 500);

          // Clear the timeout if the component is unmounted or if the search term changes
          return () => clearTimeout(debounceTimeout);
        }, [searchTerm]);

        const handleSearchTermChange = (event) => {
          setSearchTerm(event.target.value);
        };

        const searchDatabase = (term) => {
          // Send a search request to the server and update the search results
          // ...
          setSearchResults(searchResults);
        };

        return (
          <div>
            <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          </div>
        );
      }
      ```
    - Here, the delay gives the user some time to type before the database search call is made.
    - The cleanup call will be made before the debounce call every single time.

- ## useReducer hook
  - This hook is used to manage more complex state logic while keeping the overall code simple.
  - You define a reducer and an initial state and based on different action types, different actions will be taken.
  - ```jsx
      import React, { useReducer } from 'react';

      const initialState = { count: 0 };

      function reducer(state, action) {
        switch (action.type) {
          case 'increment':
            return { count: state.count + 1 };
          case 'decrement':
            return { count: state.count - 1 };
          case 'reset':
            return { count: 0 };
          default:
            throw new Error();
        }
      }

      function Counter() {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
          <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
          </div>
        );
      }
      ```
- ## Object restructuring
  - It is an important concept which we can use to extract specific properties of an object in javascript.
  - ```javascript
        const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 30,
        address: {
          city: 'New York',
          state: 'NY',
          country: 'USA'
        }
      };

      // Object restructuring
      const { name, email, age, address: { city, state, country } } = user;

      console.log(name);      // Output: 'John Doe'
      console.log(email);     // Output: 'johndoe@example.com'
      console.log(age);       // Output: 30
      console.log(city);      // Output: 'New York'
      console.log(state);     // Output: 'NY'
      console.log(country);   // Output: 'USA'
    ```
- ## useState vs useReducer
  - For a simple single type of operation, using useState makes much more sense as it's just simple. But when you need to perform multiple kinds of operations on the same state, that is complex state management, it's much better to use the useReducer hook.

- ## React Context API
  - Context API is a way to pass state along without using props from one component to another which are not directly related.
  - > Context API is good for managing state at a smaller scale but for state that might change at high frequency, context api is not optimal.
  - ## Creating Provider
    - ```jsx
        // App.js
        import React from 'react';
        import Child from './Child';

        export const MyContext = React.createContext('default value');

        function App() {
          return (
            <MyContext.Provider value="hello world">
              <Child />
            </MyContext.Provider>
          );
        }

        export default App;
        ```
  - ## Creating Consumer
    - ```jsx
         // Child.js
        import React from 'react';
        import { MyContext } from './App';

        function Child() {
          return (
            <MyContext.Consumer>
              {value => <p>{value}</p>}
            </MyContext.Consumer>
          );
        }

        export default Child;
        ```
  - By wrapping a parent level component in the Provider component, all its descendants will be able to access the value property if they are wrapped in the Consumer component.
- ## useContext hook
  - Instead of wrapping the child components in the Consumer component, we can make use of the useContext hook.
    - ```jsx
        // Child.js
        import React, { useContext } from 'react';
        import { MyContext } from './App';

        function Child() {
          const value = useContext(MyContext);
          return <p>{value}</p>;
        }

        export default Child;
        ```
- ## Rules of hooks
  1. Call react hooks only in React functions
    - React component functions/ context api functions
    - Custom hooks.
  2. Don't call hooks in nested functions or nested blocks. Only call them on the top level of the function you're exporting/ top level of a component.
  3. useEffect hook : Everything being used inside the useEffect hooks should be a dependency of the useEffect hook unless there is a really specific reason for it.

- ## Forward Refs
  > Avoid the use of the below at all costs unless a special scenario occurs.
  > Like focusing on a particular input during email validation based on something specific etc using react

  - ## useImperativeHandler hook and React.forwardRef
    - These two can be used in cobination to forward a ref, and use the reference of child from parent and vice versa because useImperativeHandler can bind them.
    - ```jsx
          import React, { useRef, useImperativeHandle, forwardRef } from 'react';
          const Input = forwardRef((props, ref) => {
            const inputRef = useRef(null);

            useImperativeHandle(ref, () => ({
              focus: () => {
                inputRef.current.focus();
              }
            }));

            return <input type="text" ref={inputRef} />;
          });

          function App() {
            const inputRef = useRef(null);

            const handleClick = () => {
              inputRef.current.focus();
            };

            return (
              <div>
                <button onClick={handleClick}>Focus Input</button>
                <Input ref={inputRef} />
              </div>
            );
          }
        ```
- ## Optimizations in the React code
  - ## React supports a virtual DOM
    - React re-renders the page when there's a change in the state
    - But react doesn't re-render the whole page, that would be too computationally expensive.
    - Instead react evalates the current DOM with the DOM that will be created after the state changes.
    - Based on the difference between the two versions of the DOM, React will only make the necessary changes to convert the DOM to the desired state.
    - The computation for evaluating and comparing the dom versions is not equal to the computation requried to re-rendering everything.
    - This is all possible because react supports a virtual DOM which facilitates all of this.
    - for example:
    - ```jsx
      import { useState } from 'react';
      import './App.css';

      function App() {
        console.log("app evaluated");
        const [showParagraph,setShowParagraph] = useState(false);

        const toggleParagraphHandler = ()=>{
            setShowParagraph(showParagraph => !showParagraph);
        }

        return (
          <div className="App">
            <h1>Hi there!</h1>
            {showParagraph && <p>This is new!</p>}
            <button onClick={toggleParagraphHandler}>toggle paragraph</button>
          </div>
        );
      }

      export default App;
      ```
    - > Do note that even though the Virtual Dom re-evaluation means that, only the required changes will be re-rendered, it doesn't mean that those components that are in turn javascript functions won't be execute.
    - In addtion to a state change causing the component with the state to be re-executed, all of it's child component or in other words nested function calls will also be re-executed and this may work in a nested fashion till the most atomic function which doesn't have any nested function calls/ nest components.
    - But this will also be computationally taxing, so we can use `React.Memo()` to avoid that in case we don't want a child component to be re-evaluated.
  - ## React.Memo
    - Now if we were to re-write our code to something like this:
    - ```jsx
      //App component
      import { useState } from 'react';
      import './App.css';
      import DemoComponent from './Demo/DemoComponent';

      function App() {
        const [showParagraph,setShowParagraph] = useState(false);

        const toggleParagraphHandler = ()=>{
            setShowParagraph(showParagraph => !showParagraph);
        }
        console.log("app evaluated");
        return (
          <div className="App">
            <h1>Hi there!</h1>
            <DemoComponent show={showParagraph}></DemoComponent>
            <button onClick={toggleParagraphHandler}>toggle paragraph</button>
          </div>
        );
      }

      export default App;
      ```
    - ```jsx
      //Demo Component
      import {React} from 'react';
      const DemoComponent = (props)=>{
          console.log("Demo Evaluated");
          return <p>{props.show? 'This is new!':''}</p>

      }

      export default DemoComponent;
      ```
    - You can notice in the console.log that everytime the state changes the Demo Component is also re-evaluated.
    - We could make another change to try to avoid this change, right? Let's hardcode the value of show prop to be false
    - It can be noticed that despite that the Demo component is still being evaluated which makes sense as it's a function call which has to be made if the parent function is executing.
    - We can use `React.Memo()` to avoid this and avoid the call from being made.
    - for example:
    - ```jsx
      import {React,memo} from 'react';
      const DemoComponent = (props)=>{
          console.log("Demo Evaluated");
          return <p>{props.show? 'This is new!':''}</p>

      }
      export default memo(DemoComponent);
      ```
    - Now, while memo function on it's own already looks useful, there are still issues with it.
    - First, memo function works by comparing the current prop values of a component with previous prop values to decide if it's going to re-execute the function/ component or not.
    - for example:
    - ```jsx
      //App component
      import { useState } from 'react';
      import './App.css';
      import DemoComponent from './Demo/DemoComponent';
      import Button from './UI/Button/Button';

      function App() {
        const [showParagraph,setShowParagraph] = useState(false);

        const toggleParagraphHandler = ()=>{
            setShowParagraph(showParagraph => !showParagraph);
        }
        console.log("app evaluated");
        return (
          <div className="App">
            <h1>Hi there!</h1>
            <DemoComponent show={showParagraph}></DemoComponent>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
          </div>
        );
      }
      export default App;
      ```
    - ```jsx
      import styles from './Button.module.css'
      const Button = (props)=>{
      return <button
      type={props.type || "button"}
      className={styles.button}
      onClick={props.onClick}>
      {props.children}
      </button>
      }
      export default Button;
      ```
    - > What does this mean?
    - When you pass a javascript expression as a prop value with {}, a new version of the prop value will be created and passed to the function as a prop
    - So, while primitive values like a boolean or number will be evaluated to be same and halt the re-execution, reference values like objects and function( which are also technically objects in javascript) will not be considered same.
    - There a way to tackle this issue as well, using `useCallBack()` hook.
    - It doesn't seem to be very computationally smart either to put every function inside memo because then we'll be comparing props for everything, but we can optimally use it in branches where there is a chance of props being the same sometimes and cut off the whole branch of execution itself.
  - ## useCallBack()
    - We can wrap our function inside the useCallBack hook and that would save our callback/ function in the memory and prevent any unnecessary recreations of the function which will also allow the use of `memo()` function more often.
    - Just like `useEffect()` hook, the `useCallBack()` hook also has an array of dependencies
    - If we don't pass the dependencies in the `useCallBack()`, the required functionality will not occcur.
    - for example:
    - ```jsx
      import { useCallback, useState } from 'react';
      import './App.css';
      import DemoComponent from './Demo/DemoComponent';
      import Button from './UI/Button/Button';

      function App() {
        const [showParagraph,setShowParagraph] = useState(false);
        const [allowToggle, setAllowToggle] = useState(false);
        const toggleParagraphHandler = useCallback(()=>{
          if(!allowToggle)
            return;
          setShowParagraph(showParagraph => !showParagraph);
        },[]); 

        const allowToggleHandler = ()=>{
          setAllowToggle(allowToggle=>!allowToggle);
        }

        console.log("app evaluated");
        return (
          <div className="App">
            <h1>Hi there!</h1>
            <DemoComponent show={showParagraph}></DemoComponent>
            <Button onClick={allowToggleHandler}>Allow Toggle</Button>
            <br/>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
          </div>
        );
      }

      export default App;
      ```
    - And one might think why that is the case, it's because in java script the variables being used with a function and bundled together in a closure and tied together with the funciton, so when the app/ component will re-render if `useCallBack()` allows the use of the old function, the close will still have the old dependencies while our component will have new state variables. So, the array of dependencies helps in deciding whether the state variable dependencies have changed and the function should actually be recreated or not.
    - So, we need to pass the allowToggle state dependency in our `useCallBack()` hook in our example for our code to work as intended.
    - for example:
    - ```jsx
      import { useCallback, useState } from 'react';
      import './App.css';
      import DemoComponent from './Demo/DemoComponent';
      import Button from './UI/Button/Button';

      function App() {
        const [showParagraph,setShowParagraph] = useState(false);
        const [allowToggle, setAllowToggle] = useState(false);
        const toggleParagraphHandler = useCallback(()=>{
          if(!allowToggle)
            return;
          setShowParagraph(showParagraph => !showParagraph);
        },[allowToggle]); 

        const allowToggleHandler = ()=>{
          setAllowToggle(allowToggle=>!allowToggle);
        }

        console.log("app evaluated");
        return (
          <div className="App">
            <h1>Hi there!</h1>
            <DemoComponent show={showParagraph}></DemoComponent>
            <Button onClick={allowToggleHandler}>Allow Toggle</Button>
            <br/>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
          </div>
        );
      }
      export default App;
      ```
  - > One might think that everytime a Component re-renders, the `useState()` hook will be called, and thus create a new version of the state which should cause problems. But the react library makes sure that only the first time the component re-renders, the state is created, on the subsequent re-renders the state is only updated as needed.
  - ## State Scheduling and batching.
    - Another important concept to note is that in a very high frequency environment where there are a lot of state changes happening on the same state at a given instance of time, there might be some delay in which change occurs when or which function executes first or later.
    - Because there can be many high priority processes which get executed first by the react library, this may or may not lead to problem.
    - This delay and scheduling of state changes is known as *state scheduling*
    - hence it's always better to add a dependency on the previous state for the current state change
    - hooks like `useEffect()` or `useCallBack()` do it by default.
    - For regular calls, we could execute our change functions like this:
    - ```js
      changeTitleState(title=>!title);
      ```
    - By doing something like this where the lambda function has the previous state as a parameter, this would make sure that no matter the order in which state changes execute, we would always have the latest state for use and the states chagnes will always sync properly.
    - Another important concept to note is the state batching.
    - This is react library schedules state changes based on priority and internal calculation but it also may change multiple states together in a single state change operations, this is known as *state batching*
  - ## useMemo()
    - There will be occassions where you don't want to do a computational task again given your have gotten the same arguments for a function again.
    - for example sorting:
    - Let's say we have something like this:
    - ```jsx
      //parent component
      return <SomeCompoenent items={[3,21,4,5,6]}></SomeComponent>

      ```
    - ```jsx
      //SomeComponent
      
      const SomeComponent = (props)=>{

        const {items} = props;

        const sortedList = items.sort();

        return <ul>
        sortedList.map((item)=>{
          <li key={item}>{item}</li>
        })
        </ul>

      }
      export default SomeComponent;
      ```
    - Here, we're sorting the list and sorting it everytime doesn't make sense, so just like `useCallBack()` which avoids recreating a function unnecessarily, we have `useMemo()` which avoid executing a piece of code again, so we could write something like this in the child component from our previous example:
    - ```jsx
      //SomeComponent
      const SomeComponent = (props)=>{

        const {items} = props;

        const sortedList = useMemo(()=>{
          return items.sort(); 
        },[items]);

        return <ul>
        sortedList.map((item)=>{
          <li key={item}>{item}</li>
        })
        </ul>

      }
      export default SomeComponent;
      ```
    - But this will again still not work, as just like functions, objects which are being passed as javascript expressions inside the props with {} will be a with a new reference and in a way a shallow copy of the previous object, which means we're passing a new array again, which will not be considered as the same array by the `useMemo()` hook as expected and the sort function will execute again.
    - To avoid that, we could use `useMemo()` in the parent function as well, to pass the same array to the props
    - We can refactor the parent function something like this:
    - ```jsx
      //parent component
      return <SomeCompoenent items={useMemo(()=>[3,21,4,5,6],[])}></SomeComponent>
      ```
    - And now our function won't execute unnecessarily for the same array being passed.
- ## Class Based components
 - Class based components are an alternate way of creating components.
 - Before react 16.8 and introduction of hooks, class based components were needed to deal with side effects and state management in React.
 - Even now in many legacy projects, you may see Class based components.
 - Class based components can't use hooks inside them.
 - Class based components can use functional components inside their render method i.e they can have functional components as children and the vice-versa is also true.
 - for example, for a functional component that looks like this:
 - ```jsx
    import classes from './User.module.css';
    const User = (props) => {
      return <li className={classes.user}>{props.name}</li>;
    };
    export default User;
    ```
- We can write alternate class based component's equivalent code like this:
  - ```jsx
      import classes from './User.module.css';
      import {Component} from 'react';

      // const User = (props) => {
      //   return <li className={classes.user}>{props.name}</li>;
      // };

      class User extends Component{
        render(){
          return <li className={classes.user}>{this.props.name}</li>;
        }
      }

      export default User;
    ```
- the `render()` method is a method we need to override which returns exacly what our functional component is supposed to return.
- the `render()` method can't take props as a parameter but props exists as a property of the Component class which can be used to achieve the same thing, so instead of props, we're using `this.props`.
- But it can't use hooks, so we need alternate ways to handle state and side effects.
- Component class provides `state` property which holds an object as a `setState()` method which can be used to change this state.
- Look at the below functional component and focus on how we convert it to a class based component.
- ```jsx
  //Functional component code
  import { useState } from 'react';
  import User from './User';

  import classes from './Users.module.css';

  const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

  const Users = () => {
    const [showUsers, setShowUsers] = useState(true);

    const toggleUsersHandler = () => {
      setShowUsers((curState) => !curState);
    };

    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={toggleUsersHandler}>
          {showUsers ? 'Hide' : 'Show'} Users
        </button>
        {showUsers && usersList}
      </div>
    );
  };

  export default Users;
  ```
- ```jsx
    //Class based component
    import {Component } from 'react';
    import User from './User';
    import classes from './Users.module.css';

    const DUMMY_USERS = [
      { id: 'u1', name: 'Max' },
      { id: 'u2', name: 'Manuel' },
      { id: 'u3', name: 'Julie' },
    ];

    class Users extends Component{

        constructor(){
          super();
          this.state = {
            showUsers : false
          }
        }

        usersList = (
        <ul>
          {DUMMY_USERS.map((user) => (
            <User key={user.id} name={user.name} />
          ))}
        </ul>
      );

      toggleUsersHandler(){
        this.setState(currentState => {
          return {showUsers : !currentState.showUsers};
        })
      }

      render(){
        return (
          <div className={classes.users}>
            <button onClick={this.toggleUsersHandler}>
              {this.state.showUsers ? 'Hide' : 'Show'} Users
            </button>
            {this.state.showUsers && this.usersList}
          </div>
        );
      }

    }

    export default Users;
  ```
- The state property provided by the `Component` class is an object
- Also notice how the `setState()` function accepts an object and we can use a lambda function or any function to fetch the previous state and make changes to that before returning the new state object.
- One great thing that react thankfully handles for us is that the object you pass to the `setState()` method gets merged with the original state and doesn't replace the original state, which helps us by not making us pass the whole state when the change is only in one property.
- The `useState()` hook won't merge the state object in case the state is an object for us.
- But instead the `useState()` hook can make even primitive values as state, which is not possible in the state property of the Component class, so there are pros and cons of the both the methods.
- *Do remember to use array function for your handler function if you're going to use `this.setState()`*
- ```jsx
    toggleUsersHandler = ()=>{
      this.setState(currentState => {
        return {showUsers : !currentState.showUsers};
      })
    }
  ```
- Without using the array function for the toggleUsersProperty the `this` keyword would refer to the function's own context which doesn't have `setState()`
- Similar problems may arise while dealing with `this.props`

- ## Life Cycle method in Class Based Commponents
- Just like functional components have `useEffect()` hook to handle any side effects that occur, the class based components have **Life Cycle Methods**
- the three important life cycle methods are:
- > `componentDidMount()` equivalent to `useEffect(()=>{//some code here},[])`
  - In other words, it's similar to having a `useEffect()` hook with empty dependencies array and the code inside will only execute on first render.
- > `componentDidUpdate()` equivalent to `useEffect(()=>{//some code here},[dependency])`
  - In other words, it's similar to having a `useEffect()` hook with a dependencies array and whenever there is a change in those state properties, the code inside will re-execute.
- > `componentWillUnmount()` equivalent to `useEffect(()=>{//some code here return ()=>{//clean up code here} },[])`
  - In other words, it's similar to the clean up code in the `useEffect()` hook and and executes at the end when the component will unmount.
- Consider the following functional component which makes use of `useEffect()` hook to handle side effects:
- ```jsx
  import { Fragment, useState, useEffect } from 'react';
  import Users from './Users';
  import classes from './UserFinder.module.css';

  const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

  const UserFinder = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      setFilteredUsers(
        DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
      );
    }, [searchTerm]);

    const searchChangeHandler = (event) => {
      setSearchTerm(event.target.value);
    };
    
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={searchChangeHandler} />
        </div>
        <Users users={filteredUsers} />
      </Fragment>
    );
  };

  export default UserFinder;
  ```
- We can rewrite it into a equivalent class based component like this:
- ```jsx
  import { Fragment, Component } from 'react';
  import Users from './Users';
  import classes from './UserFinder.module.css';

  const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

  class UserFinder extends Component{

      constructor(){
          super();
          this.state = {
              filteredUsers: DUMMY_USERS,
              searchTerm: ''
          }
      }

      componentDidUpdate(previousProps,previousState){

          if(previousState.searchTerm===this.state.searchTerm)return;

          this.setState({filteredUsers : DUMMY_USERS.filter(
              (user) => user.name.includes(this.state.searchTerm)
              )
          });

      }

      searchChangeHandler = (event) => {
          this.setState({searchTerm : event.target.value});
        };

      render(){
          return (
              <Fragment>
                <div className={classes.finder}>
                  <input type='search' onChange={this.searchChangeHandler} />
                </div>
                <Users users={this.state.filteredUsers} />
              </Fragment>
            );
      }

  }


  export default UserFinder;
  ```
- Notice that in the `componentDidUpdate()` function, we used two parameters previousProps and previousState
- Just like useEffect hook has dependencies to keep track of what changes should result as a trigger to re-execute the code inside, these two parameters help us to add checks to make sure that the componentDidUpdate() function runs for the specific state change and makes sure that it doesn't run infinitely as by default, it's `componentDidUpdate()` function will re-execute on every state change and it might cause a state change as well which can lead to an infinite recursion without a base condition.
- ```jsx
    componentDidUpdate(previousProps,previousState){
            //This is the base condition, that will break the possible recursion
            if(previousState.searchTerm===this.state.searchTerm)return;

            this.setState({filteredUsers : DUMMY_USERS.filter(
                (user) => user.name.includes(this.state.searchTerm)
                )
            });

        }
  ```
- Similarly we could add `componentDidMount()` to load the initial data into filteredUsers
- We could also use `componentWillUnmount()` in the Users component for any cleanup calls.
- ## Class Based components and context
- One simple way to use the context in the class based components is to juse wrap the result of the `render()` method in the ContextName.Consumer component.
  - This method is also superior here as you will be able to use multiple contexts
- in case you want to use a single context in the class based components, a preferred approach would be to use `static contextType = ContextName;` property of the class based component to bind the context and then use `this.context.<value name here>` and use the desired values.
- But in a sense the easy approach in the class based component is a bit restrictive making the class based components to appear a bit restrictive.
- ## Error boundaries in the class based components.
  - One of the main reasons one might have to use class based components over functional components apart from personal preference or class based components already being used in the project is error boundaries.
  - Even though the jsx functions are javascript functions under the hood, they're not simple functions and can't be wrapped inside a `try catch` statement. This also means that it would be much harder to elegently deal with erros which we dont' expect in production.
  - In class based components though, we can use `ErrorBoundary`, it's just another class based component which utilizes the `componentDidCatch` method and if any class based component wrapped inside it throws an error, the state of `this.state.hasError` will change and can help us trigger a smooth transition or error screen.
  - You can create an ErrorBoundary component like this:
  - ```jsx
      import { Component } from "react";
      class ErrorBoundary extends Component{

          constructor(){
              super();
              this.state = {
                  hasError: false
              }
          }

          componentDidCatch(){
              this.setState({hasError: true});
          }

          render(){
              return this.state.hasError?<p>'something went wrong'</p>:this.props.children;
          }

      }

      export default ErrorBoundary;
    ```
  - And thus we can wrap any functions susceptible to errors inside this wrapper and gracefully handle the errors.