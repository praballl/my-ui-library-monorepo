Functionality of the UI Library:
1. Templating: Provide a method that allows users to define the template for the view to be
rendered on the screen. Template should be a function which has inputs like state, props
and return a Virtual Node. (This method should be generic not specifically coded for the
below outcome).
2. Reactivity: Implement a method named updateState that can be utilized to modify the
internal state of the application and automatically update the view. Importantly, this
method should be designed to be callable within the Template function (ex, a button to call
handleClick function which increments state using updateState). The events listeners should
be handled directly using the snabbdom library rather than adding them using
addEventListener.
3. Life Cycle Events: Incorporate a lifecycle mechanism into the UI library. Detect when a
component is mounted and provide the capability to execute functions when necessary.
This is analogous to the useEffect function in React.
Desired Outcome: Created a simple web page with the following elements:
● An <h1> tag with an initial value of 0.
● A button labeled "Add" that, when clicked, increments the count, and the UI should reflect
this change.
● Console log messages for when the component is mounted and when the state is changed
life cycle events.

I AM HOPING THAT YOU WILL RUN "npm i" IN ALL THE FOLDERS WHERE YOU FIND AND "pacage.json"
