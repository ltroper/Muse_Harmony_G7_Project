# Museharmony Readme

## Create an account
1) After clicking `Create an Account` enter required information email, username, useremail, password
2) (if error) you will go back to the *homepage* and try again
3) (if success) you will be routed to your *profile* page
4) For all new users there is a default stock photo

## Logging In
1) After clicking `Log In` enter required information email, password
2) (if error) you will go back to the home page
3) (if successful) you will go to home page but nav bar will change allowing full navigation
4) The nav bar at the top of the page has an icon / website name to navigate to the `homepage`, a `libraries`  page, `my profile` page, and a `logout` page
5) At the bottom is a footer with links to the team's `linkedIn` profile pages (this is on all pages of the site)

## My Profile
1) On this page you can see a *user's bio*, *liked albums*, *reviewed albums list*, and *a user's album libraries*
2) The navigation bar will also be present with `Logo` button, `Albums` button, `My Profile` button, and `Logout`
    - Clicking on the `Logo` button will navigate a user to the *homepage*
    - Clicking on `Albums` button will navigate a user to the *Albums* page
    - Clicking on `My Profile` button will navigate a user to the *My Profile Page*
    - Clicking on `Logout` button will navigate a user to the *homepage* and will log the user out forcing the user to login in order to use the rest of the page


## Albums
1) On the albums page you will see a list of all the albums currently available to review on the site
2) If you `click on an image` you will navigate to the Album reviews page, which lists the album and related reviews functionality
3) Clicking on the `Create New Library`
    - Upon arriving you will see a library form asking for a name
        - *ONLY NUMBERS, LETTERS, and SPACES*
    - After clicking `Submit`, you will navigate to your *libraries* page
4) Clicking on the `Add to library`
    - Upon clicking a *dropdown* will render with the following:
        - (if no user libraries) No selections will render, `Create New Library` to add
        - (if user libraries exist) `User Library List` selections will populate
            - selecting a list that does not have it will prompt a successfully added message
            - Selecting a list that does have it will bounce back on no message will be added


## Libraries
1) Clicking on the `Libraries` button will render the libraries page containing a table of the album lists, a `view list` button, the artist of the first album in the list, and the album art for the first album
2) clicking on `view list`
    - this will navigate to the selected list that displays all of the listed albums by artist and album cover, `remove library` button, and a `remove album` button
    - Clicking `remove library`
        - This action will remove the *user's album library* and will re-render the albums page
    - Clicking `remove album`
        - This action will remove an *album* from the library in a given list but will keep the user on that list

## Album Reviews
1) Navigate to the *albums* page showing a list of albums available on the site
2) Click on the `album image`
3) *Album* page will display functionality of reviews specific to that album
4) Enter *text* and a *rating*, then click `submit` to enter a review
5) Once entered and submited you will be able to view the reviews for an album
