[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <a href="https://github.com/felipe-spindola/FoodFy">
    <img src="/assets/dracula.svg" alt="Dracula Icon" width="150" height="150">
  </a>

  <h3 align="center">FoodFy</h3>

  <p align="center">
    An awesome WEB APP for Management of recipes and chefs - RocketSeat LaunchBase
    <br />
    <a href="https://github.com/felipe-spindola/FoodFy"><strong>Explore the project »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/felipe-spindola/FoodFy/issues">Report Bug</a>
    ·
    <a href="https://github.com/felipe-spindola/FoodFy/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
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
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<h3 align="center">Web</h3>
<p align="center">
    <img src="/public/assets/foodfy.gif" alt="FoodFy"></img>
</p>
<br/>
<br/>
<h3 align="center">Mobile</h3>
<p align="center">
    <img src="/public/assets/mobile.gif" alt="FoodFy-Mobile"></img>
</p>


FoodFy it's a webapp who i developed during the bootcamp Launchbase offered by Rocketseat.

### Features
* 🙋 Create an account to manage recipes,chefs and users
* 👩🏽‍🍳 Explore awesome recipes and chefs
* 📨 Email system 
* 📱 A responsive website for you can use on your cellphone

### 🔧 Built With

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

If you find any problem in [FoodFy](https://github.com/felipe-spindola/FoodFy),i will be so grateful if you create a new issue on [FoodFy-Issues](https://github.com/felipe-spindola/FoodFy/issues). Pull requests are also welcome!!

**How can i create a pull request?** 🤷🏻‍♂️

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## 📋 License

Released in 2021. This project is under the <a href="https://github.com/LauraBeatris/foodfy/blob/master/LICENSE">MIT license</a>
<br/>
<p align="center">
    Made by Felipe Valério 😁
</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/felipeevalerio/foodfy.svg?style=for-the-badge
[issues-url]: https://github.com/felipeevalerio/FoodFy/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/felipeevalerio
