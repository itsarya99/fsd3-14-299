# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## object deStructure
* example line 20 in app.jsx
* does not depends on order, if property is not available then it initialize with null 
const{price ,picUrl}=props.book;
const{price, ...rest}=props.book;
return rest;

any component include styles 
1. external css = create class in index.css and use in component  
2. internal css= create property as object like in 
```
 const qtyStyle = {
    fontSize: "1rem",
    color: "red",
    textAlign: "center",
    backgroundColor: "lightgray",
    padding: "5px",
  }
```
then apply that style attribute and pass the object

3. inline css= in this method we use two curly brackets with style attributes all the css property must be single word
for example text align becomes textAlign 




