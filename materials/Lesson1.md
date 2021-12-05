## Lesson 1

### Ways to use React

- Add to HTML page as a <script />
- Create React App

### Adding as a script: important

- We need some simple HTTP server (for example `python3 -m http.server` or `npx serve`)
- To use JSX for rendering we need a compiler - Babel

### Why React is cool

- React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary
to bring the DOM to the desired state.
- Component is re-rendered when its props or state are updated

### Key concepts

- JSX
- Component, props
- State
- Controlled input technique
= Working with arrays and objects (map, filter, destructuring)

### Home task

- Implement in a single file a React script:
- A table with Users (some columns showing information for each user instance)
- Add a button to Create a new User and form to achieve it

### How to submit

- Create an empty repo on Github under https:// github.com/amtoss-study organization name must be in a format “react-study-<your-name>”
- Create a pull request to it with your home task for current lesson implementation
- Request review from your peers
- Review other's work, address other's comments Request review from me (@pannkotsky)

### Recommended reading

- https://reactjs.org/docs/add-react-to-a-website.html
- https://reactjs.org/docs/hello-world.html “Main concepts” 1-9
