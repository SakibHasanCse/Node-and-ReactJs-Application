
# NodeJs & React - School-application
NodeJs & React  - School-application

## Getting started


This is a basic API skeleton written in JavaScript ES6. Very useful to building a RESTful web APIs 


This project will run on **NodeJs** using **MongoDB** as database and ReactJs. I had tried to maintain the code structure easy 
]
## Features


-   Pre-defined response structures with proper status codes.
-   Included CORS.
-    **School** example with **CRUD** operations.
-   Included API collection for Postman.
-   Included Add Student.
-   Included Add Books.
-   Light-weight project.
-   Test cases with [Mocha](https://mochajs.org/) and [Jest](https://www.jestjs.com/).


## Software Requirements

-   Node.js **15+**
-   React.js **


## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/SakibHasanCse/School-application.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject

cd server
npm install || yarn add

cd clients
npm install || yarn add

```

### Setting up environments

1.  You will find a file named `congig/config.env` on root directory of project.


## How to run

### Running  API server locally

```bash

cd server
npm run dev

cd clients
npm run start
```

You will know server is running by checking the output of the command `npm run dev`

```bash
Connected to mongodb:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
```
**Note:**  `YOUR_DB_CONNECTION_STRING` will be your MongoDB connection string.


## Tests

### Running  Test Cases

```bash
npm test
```

You can set custom command for test at `package.json` file inside `scripts` property. You can also change timeout for each assertion with `--timeout` parameter of mocha command.

### Creating new tests

If you need to add more test cases to the project just create a new file in `/test/` and run the command.

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
