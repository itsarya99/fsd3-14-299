# Frontend - Backend
1. create Project Folder(lab7)
2. Create frontend , backend folder within
3. open terminal and split into two
4. open frontend in left side terminal 
5. open backend in right side terminal
6. in backend 
a. initialize backend by `npm init -y`
b. instal nodemon by `npm i nodemon`
c. open package.json from backend update `type to module` and script 
d. create app.js 
7. in frontend
a. npm create vite@latest
b. enter . as project name
c. select framework as react from arrow key
d. select variant as javascript from arrow key
e. select eslint for linking from arrow key
f. select install and start the frontend

## COMPONENTS
1. simple js function returns html directory
2. it must with capital letter
3. ut should be treated as html tag 
4. it must be  closed 

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

# there should be minimum code in app.jsx

# by default in html is submit button
