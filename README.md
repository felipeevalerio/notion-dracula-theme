[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <a href="https://github.com/felipe-spindola/FoodFy">
    <img src="/assets/dracula.svg" alt="Dracula Icon" width="150" height="150">
  </a>

  <h3 align="center">Notion Dracula Theme</h3>

  <p align="center">
    An electron application which executes a custom notion desktop with dracula theme
    <br />
    <a href="https://github.com/felipeevalerio/notion-dracula-theme"><strong>Explore the project »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/felipeevalerio/notion-dracula-theme/issues">Report Bug</a>
    ·
    <a href="https://github.com/felipeevalerio/notion-dracula-theme/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
# :pushpin: Table of Contents

* [About the Project]("#")
* [Features](#rocket-features)
* [Built With]("#wrench_built-with")
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [FAQ](#postbox-faq)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)



<!-- <details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    <li><a href="#features">Features</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details> -->



<!-- ABOUT THE PROJECT -->
## About The Project
<h3 align="center">Web</h3>
<p align="center">
    <!-- <img src="/public/assets/foodfy.gif" alt="FoodFy"></img> -->
</p>
<br/>
<br/>


FoodFy it's a webapp who i developed during the bootcamp Launchbase offered by Rocketseat.

### Features
* 🙋 Create an account to manage recipes,chefs and users
* 👩🏽‍🍳 Explore awesome recipes and chefs
* 📨 Email system 
* 📱 A responsive website for you can use on your cellphone

### :wrench: Built With

Here we can see all the technologies that was used in this project.

* [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [Node.Js](https://getbootstrap.com)
* [Express](https://expressjs.com/pt-br/)
* [Nunjucks](https://jquery.com)
* [Postgres](https://www.postgresql.org)
* [Multer](https://www.npmjs.com/package/multer)

<!-- GETTING STARTED -->
## 🏃‍♂️ Getting Started 

### 👷 Prerequisites 

First of all,to run the application you will need to install [Node](https://getbootstrap.com) and the database [Postgres](https://www.postgresql.org)

### ⚙️ Installation 

1. Open the terminal 
2. Clone the repo
   ```sh
   git clone https://github.com/felipeeevalerio/FoodFy.git && cd FoodFy
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a database on PostgresSQL
   ```sh
   CREATE DATABASE foodfy
   ```
5. Create the tables on PostgresSQL using the file `database.sql`

6. Open the file `db.js` inside the directory `src/config` and update your user and password.
```JS
    {
        user:"your-username",
        password:"your-password"
    }
```
7. Use the file `seed.js` to populate your website.
```sh
    node seed.js
```

8. Run and enjoy your application!
```sh
    npm start
```

<!-- CONTRIBUTING -->
## 👪 Contributing

If you find any problem in [FoodFy](https://github.com/felipeevalerio/notion-dracula-theme),i will be so grateful if you create a new issue on [FoodFy-Issues](https://github.com/felipeevalerio/notion-dracula-theme/issues). Pull requests are also welcome!!

**How can i create a pull request?** 🤷🏻‍♂️

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## 📋 License

Released in 2021. This project is under the <a href="https://github.com/felipeevalerio/notion-dracula-theme/blob/main/LICENSE">MIT license</a>
<br/>
<p align="center">
    Made by Felipe Valério 😁
    Inspired by Mayk Brito
</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/felipeevalerio/notion-dracula-theme
[issues-url]: https://github.com/felipeevalerio/notion-dracula-theme/issues
[license-shield]: https://img.shields.io/github/license/felipeevalerio/notion-dracula-theme
[license-url]: https://github.com/felipeevalerio/notion-dracula-theme/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/felipeevalerio
