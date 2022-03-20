# Node.js starter pack
Node.js application starter pack

## Installation
- **Step 1 :** Clone this GitHub repository.
- **Step 2 :** Change environment variables in `.env` file.
- **Step 3 :** Add `.env` file to `.gitignore` file.
- **Step 4 :** Run the following commands :
```
npm install
npm run start [or] npm run dev # Run in [demo/dev] mode
```
And then go to `localhost:3000`.

## Folders/files tree view
```
.
├── public
│   ├── css
│   │   ├── assets
│   │   │   └── global.css
│   │   ├── components
│   │   │   └── global.css
│   │   ├── layouts
│   │   │   └── global.css
│   │   └── master.css
│   ├── img
│   │   ├── icons
│   │   └── users
│   └── js
│       └── main.js
├── src
│   ├── controllers
│   │   └── indexController.js
│   ├── entities
│   ├── middlewares
│   ├── models
│   ├── routes
│   │   └── indexRoutes.js
│   ├── utils
│   └── views
│       ├── pages
│       │   └── 404.html.ejs
│       └── partials
├── .gitignore
├── .env
├── app.js
└── package.json
```

## Handling changes
### Static files
Static files are located in `/public` folder.

### Node.js files
Node.js files are located in `/src` folder.
