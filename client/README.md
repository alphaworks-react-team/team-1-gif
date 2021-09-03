# Welcome To The Giphy App

Using the [Giphy API](https://developers.giphy.com/), we have created a web application that renders trending and different categories like _Anime, Food, Animals_ etc for the user to view.

## Setup Intructions

- Clone the repository

- cd into the project folder **team-1-gif**

- The first `npm install` will be in the team-1-gif folder! Here, you must also install [nodemon](https://www.npmjs.com/package/nodemon)

- cd into the **client** folder and do an `npm install` there as well.

- Create an account on [Giphy API](https://developers.giphy.com/). Here you will produce your own API key.

- In the team-1-gif folder, create a _.env_ file to store your personalized api key with: Example: _GLIZZY_KEY=[your-api-key-here]_

- Add the _.env_ file to your _.gitignore_

- Lastly, cd into _team-1-gif_ folder and run the command `npm run dev`. This is so you can congruently run the frontend and backend of the application.

# How to Navigate The Site

## Home

When the program renders, you will find yourself at the home page where you will be greeted with a random Giph that renders new upon refresh. Thanks to the Giphy API provided by the site itself, using the endpoint tho search many giphs. The user has the ability to look up a specific giphy, which then replaces our random giph with the assortment of giphs searched

![Home](/images/HomePage.png)


![Searched](/images/HomePageSearched.png)

_____

## Trending
As you may have noticed, the Navagation bar above has two icons on the opposite ends of each other. The _Profile_ and the _Trending_ pages. The Trending link will navigate you to a display of giphs that are both trending in real time, along with a feature of the _Categories_ below it. To give the user freedom to laugh and enjoy the many gifs they discover, the team thought it be fitting to add a _like_ feature to each other the gifs. As you can see, the "Trending" section has that for the user. The "Categories" setion provides that feature as well, once the user has clicked on a specific gif category to scroll through. 
![Trending](/images/TrendingPage.png)

## Example
Here we have chosen the "Animal" category to show how the user can view more.

![Categories](/images/TrendingPageCategories.png)
____

# Login & Sign-Up
To enhance the user experience, the team created the sign-up & login feature. A new user must register for an account to have that will store their personal liked gis. They then will have the ability to login every time becasue their username and login are stored in `localstorage` for a single need login.


![Login](/images/RegisterLogin.png)
![Login](/images/SignUp.png)
___

# Validations
Validations are important, so to help our app be access to those that are "**Logged in**", the team created validations to prevent users from "liking a gif" unless they have their "account" active.

# Example of a validation
![Wrong Login](/images/LoginWrong.png)

___
# Profile
In the navagation bar, the profile icon is indicated on the left hand side of the web application. This page renders all the **liked** gifs our user has clicked on. Here the user has full access to enjoy their favorite gifs forever. However, like all good things that come to an end, a user had the aability to *delete* that specific gif from their profile.
![Profile](/images/ProfilePage.png)

___
# Colaborators 
- Ariel: https://github.com/AriAgress
- Frank: https://github.com/Frank-5850
- Angel: https://github.com/angelz510
- Akiko: https://github.com/keeks5456

