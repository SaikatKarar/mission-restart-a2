- What is JSX, and why is it used?
 - What is the difference between State and Props?
 - What is the useState hook, and how does it work?
 - How can you share state between components in React?
 - How is event handling done in React?

---

### What is JSX, and why is it used?
 - JSX stands for Javascript XML. It is a Javascript syntax extension. Its an XML or HTML like syntax used by ReactJs. 

### What is the difference between State and Props?
- State is a component internal data that can change over time and is managed within the component.Props are read-only data passed from a parent component to a child component and cannot be modified by the child.

### What is the useState hook, and how does it work?
- useState is a React Hook used to add and manage state in functional components. It returns a state value and a function to update that value, which re-renders the commponent when the state chenges.

### How can you share state between components in React?
- State can be shared between components by lifting the state up to a common parent component. The parent then passes the state and functions as props to the chaild components that need it.

### How is event handling done in React?
- Event handling in React is done using camelCase event names like onClick, onChange. You handle events by passing a function as the event handler inside the JSX elemant.


