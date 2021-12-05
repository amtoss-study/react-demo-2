## Lesson 3

### Code formatting

- Eslint (pre-configured in CRA) https://eslint.org/docs/user-guide/getting-started
- Prettier https://prettier.io/docs/en/integrating-with-linters.html

### React context

```jsx
const MyContext = React.createContext(initialValue)
    
<MyContext.Provider value={currentValue}>
    <App />
</MyContext.Provider>
```

Inside App:
```javascript
const value = React.useContext(MyContext)
```
