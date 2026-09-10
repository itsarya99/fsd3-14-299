# NPM Project

1. create project folder
2. right click on project folder and select open integrated terminal 

3. type in terminal `npm init -y` press enter
4. open package.json file from project folder
5. update type as `type:module` in package.json

6. type in terminal `npm i nodemon -D` to install nodemon , which restarts server while file changes. -D flag indicate install as dev dependency 
7. it creates node_modules folder and package_lock.json
8. update .gitignore file and write project-folder/node-modules
9. update package.json to run the project , update script properly as below 

"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },

10. 
