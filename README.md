# Celebrity Directory CRUD App

This is a simple Celebrity Directory CRUD (Create, Read, Update, Delete) application built with React using Vite and Material UI. The app allows users to add, view, update, and delete basic details of celebrities such as their name, age, gender, and more. The data is stored on a JSON Server API, which is hosted on Render for public access.

## Features

Create: Add new celebrity details (Name, Age, Profession, etc.)

Read: View a list of celebrities with their details

Update: Edit celebrity information

Delete: Remove celebrities from the directory

Data is stored on a JSON Server hosted on Render

## Technologies Used

Frontend: React, Vite, Axios

Backend: JSON Server (API), hosted on Render

Styling: Material UI

### Getting Started
1. **Clone the Repository**
``` bash
git clone https://github.com/Hell0WorldAgain/crud-app.git
cd celebrity-directory-crud-app
```

2. **Install Dependencies**

To install the required dependencies, run the following command:
```bash
npm install
```

This will install all dependencies specified in package.json.

3. **Start the Development Server**

Start the Vite development server by running:
```bash
npm run dev
```

Your app should now be running at http://localhost:5173

4. **API Integration**

The backend API is hosted on Render at the following URL:
```
https://json-server-backend-hnho.onrender.com/users
```

The React app communicates with this API to perform CRUD operations.

### Components

addUsers: Form component to add celebrity details

allUSers: Displays a list of all celebrities

editUsers: Form component to edit celebrity details

### API (JSON Server)

The API is powered by JSON Server and hosted on Render for easy access. The data is stored in a simple JSON file on the server. 

You can make these requests directly from the React app using Axios.

### Deployment

You can deploy the React frontend app to a platform like Vercel or Netlify. For the backend, we use Render to host the json-server API.

#### Frontend Deployment (Vercel)

- Push your code to GitHub.
- Go to Vercel
 and create a new project.
- Import your GitHub repository and follow the instructions to deploy.

#### Backend Deployment (Render)

- Go to Render
- Create a new service and select "Web Service".
- Follow the instructions to deploy the json-server API.

### Contributing

Feel free to open issues and submit pull requests if you'd like to contribute to the project!

License

This project is licensed under the MIT License - see the LICENSE file for details.
