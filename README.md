# Joshua Andrew's CS Portfolio
## Deployment
https://joshuasantillan.github.io/portfolio

<p> This repository contains my personal portfolio showcasing my projects and work. 
<br />built using React and designed with a modern and <i>responsive layout for both Mobile and Web</i></p>

### Project Structure
```
├── README.md
├── build
│   ├── static
│   │   ├── css
│   │   ├── js
│   │   └── media
│   └── (other build assets)
|
├── src
    ├── App.css
    ├── App.js
    ├── components
    │   ├── ColorGame
    │   │   ├── ColorGame.css
    │   │   └── ColorGame.jsx
    │   ├── Particles
    │   │   ├── Particles.jsx
    │   │   └── Particles.css
    │   ├── ProjectCard
    │   │   ├── ProjectCard.css
    │   │   └── ProjectCard.jsx
    │   ├── ProjectDetails
    │   │   ├── ProjectDetails.css
    │   │   ├── ProjectDetails.jsx
    │   │   └── projects.js
    │   ├── SkillsChart
    │   │   ├── SkillsChart.css
    │   │   └── SkillsChart.jsx
    │   └── SocialMediaNav
    │       ├── SocialMediaNav.css
    │       └── SocialMediaNav.jsx
    |
    ├── pages
    │   ├── About.jsx       
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   ├── ProjectsGallery.jsx
    │   ├── Resume.jsx
    │   └── TestParticles.jsx
    |
    └── style
        ├── About.css
        ├── Backlog.css
        ├── Navbar.css
        ├── common.css
        └── resume.css
```
###  `build`

This directory contains the built static files of the portfolio. These are the files that will be deployed to the server.

### `public`

This directory contains the public assets such as the favicon and manifest file.

### `src`

This directory contains all the source code for the React application.

#### `pages`

This directory includes the **main page components** the webpage navigates through. 
It includes the pages: `About`,`ProjectsGallery`,`Resume`, `Navigation`, and `Particles`.

#### `components`

Within the `src` directory, we have the `components` sub-directory, which houses all the React components used to build the user interface of the application. Each component has its own dedicated directory that includes the component's JavaScript and CSS files.

Components include:

- `ColorGame`: A fun, interactive color matching game.
- `Particles`: Implements a GPU particle recycling system for a dynamic background.
- `ProjectCard`: The card layout for each individual project.
- `ProjectDetails`: Detailed information for individual projects.
- `SkillsChart`: A chart showcasing skills.
- `SocialMediaNav`: Interactive Navigation links to social media profiles.


#### `style`

This directory contains all the CSS files for the main `pages` of the portfolio.

## Scripts

In the project directory, you can run:
- `npm start` : Starts the development server.
- `npm run build` : Builds the app for production to the `build` folder and copies the `public/404.html` into the `build` folder.
- `npm test` : Launches the test runner in the interactive watch mode.
- `npm run eject` : Removes the single build dependency from your project.
- `npm run predeploy` : Runs the build script before deploying.
- `npm run deploy` : Deploys the application to GitHub Pages.
- `npm start` : Runs the app in development mode.
- `npm test` : Launches the test runner in the interactive watch mode.
- `npm run build` : Builds the app for production to the `build` folder.



To learn more about `create-react-app` scripts, you can check out the [Create React App documentation](https://create-react-app.dev/docs/getting-started).
