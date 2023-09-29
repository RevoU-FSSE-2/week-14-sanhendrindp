![Banner](images/Unit%20Testing.png)

# Depedencies for Unit Testing

To do unit testing on a React application, we need several dependencies that we need to install. These dependencies are needed because the application that I created is using Vite. If not using Vite, none of these dependencies need to be installed.

- jest
- @types/jest
- @testing-library/react
- @testing-library/jest-dom
- react-test-renderer
- @babel/preset-env
- @babel/preset-react
- @babel/preset-typescript
- jest-environment-jsdom

Make sure to install it as devDependencies :

```
npm i --save-dev @testing-library/react @types/jest jest @testing-library/jest-dom react-test-renderer @babel/preset-env @babel/preset-react @babel/preset-typescript jest-environment-jsdom

```

# Edit some files

After all dependencies have been installed, we need edit several files including .eslintrc.cjs, and package.json.
For **package.json** :

```
    "scripts": {
        "test": "jest"
    }

    "jest": {
    "testEnvironment": "jsdom"
  }
```

For **.eslintrc.cjs** :

```
    extends: [
        "react-app",
        "react-app/jest",
  ],
```

After that, create a file with the name **.babelrc** and place it in the root folder. This file contains :

```
{
  "presets": [
    "@babel/preset-typescript",
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

# Unit Testing Result

For the unit testing that I have done, I made it for all components in my react app including **LoginForm**, **RegisterForm**, **AccountInfoForm**, **CategoryList**, and **CategoryForm** components. All this test working correctly to render the pages and do the event like onSubmit when the submit button is clicked.

<p align="center">
<img src="images/Components Test.PNG"> 
</p>

For mock data from API testing, which is in containers folder, I only did a few things, including in **Register**, **Login**, and **CategoryEdit** containers. Everything is running correctly.

<p align="center">
<img src="images/Containers Test.PNG"> 
</p>

---
