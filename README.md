## Repository for the revision and  practice of all the fundamental important React concepts
## Initial overview
    - **node js is a JS framework that can run JS outside of a browser.**
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
- ## How React works?
    - In react we create components
    - We declare these components.
    - You can use components directly as XML tags inside the html code of the App component.
        - you need to import the components first.
    - There must only be one root component
    - Just add a css file and import it if you need one
    - as class is a reserved word in JS, when you use it in JSX, you have to use className instead.
- > Manual DOM manipulation gets very cumbersome, React makes it easy for everyone
- ## Common conventions
    - Use pascal case and same name as the function inside for file name
    - React thinks that Lower case elements are default HTML elements and Upper case elements are custom elements created by the developer.
- ## Simple order
    - create a component
    - import a component
    - use a component