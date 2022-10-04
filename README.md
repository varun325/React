## Repository for the revision and practice of all the fundamental and important React concepts

## Initial overview

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
  - ```javascript
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
    //this will take the value of props.title and return and variable as well as function to change that variable, which we can name accordingly
    ```
  - For simplicity we'll just call this the changeState function for this documentation
  - Calling changeState funciton till not only change the value of this returned variable, but it will also tell React to re-render all the components where this variable was used/registered.

- ## Hooks
  - Like useState there are many other React hooks
  - Hooks all start with 'use' prefix in small letters
  - These hooks should be called directly inside a component function, not anywhere inside a nested function or something.
    - _There is an exception to this,_
