# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a Javascript Library for building complex and dynamic intercaes. React uses a virtual DOM so it can compare against the real DOM and only update single parts instead of the entire page every time. This also means it allows a website to update the DOM multiple times with limited performance hit. 

1.  What does it mean to _think_ in react?
To take an interface and be able to break it down into its individual components. Each component should ideally do one thing and be reusable. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class components are components that extend React.component and are used to control state in the component. They contain the data for the application as well as the logic. 

Functional componenets are used to accept props and return a React element. They do not contain state or control the data life cycle. They actaully render the UI ti the page. 

1.  Describe state.
State is assigned in a class constructor function and is used as a data store in the component. It keeps track of information about data in components. State can be changed by using setState.

1.  Describe props.
Props, which is short for property, is an attribute-like property that is assigned to data in a component and can be passed around from parent to child elemetns. It is read-only, can't be mutated and used to control data flow in a React app.
Props are received in componenets and usd to display data in the UI. 