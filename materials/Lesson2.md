## Lesson 2

### React App toolchain

- A **package manager**, such as **Yarn** or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
- A **bundler**, such as **webpack** or Parcel. It lets you write modular code and bundle it together into small packages to optimize load time.
- A **compiler** such as **Babel**. It lets you write modern JavaScript code that still works in older browsers.

### Create React App

Create React apps with no build configuration

```bash
yarn create react-app react_demo_app --template typescript mv react_demo_app/* react_demo (your current project name) rm -rf react_demo_app
cd react_demo
yarn start
```

### react-router-dom

```bash
yarn add react-router-dom@5 @types/react-router-dom@5
```

### Home task

- Migrate your existing code to React app with components placed to separate files, properly typed with Typescript
- Clicking on a row in Users table redirects to the user details page. User details can be edited on that page.
There is a link to go back to users list on that page

### Recommended reading

- https://create-react-app.dev/docs/getting-started/
- https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
- https://www.saltycrane.com/cheat-sheets/typescript/react/latest/
- https://reactrouter.com/web/guides/quick-start
