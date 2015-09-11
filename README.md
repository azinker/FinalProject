#LA Kitchen Gardens

LA Kitchen Gardens provides a way for Angelinos to connect and share with their local gardening community.  Users can "follow" each other, post photos and comments of their plants and gardens, swap seeds, and share their harvests with neighbors.


![Landing Page](http://i.imgur.com/aKS6M2m.jpg)
![Landing Page](http://i.imgur.com/HLU320I.png)


##Technologies Used

- **Frameworks**
  - Express
  - Angular
    - Animate
    - Cookies
    - Resource
    - Route
    - Sanitize
    - Touch
  - Bootstrap
  - Modernizr
  - Lightbox
  - Stripe
  - Moltin API
- **Libraries/Languages**
  - jQuery
    - jQuery Easing
  - Node
  - Gulp
  - Passport
- **API's**
  - Stripe - To handle all credt/debit transactions
  - Moltin - Custom API for handling CMS of items within store
- **Package Manager's**
  - bower.json
  - package.json
- **Database**
  - MongoDB

## Overall App Design
The application used all the conventional express routing techniques as well as ngRoute when it directs to the angular store. None of the information or webpages on the app are static besides libraries and plugins. The overall goal of the app was to allow users to quickly make a purchase without any issues using just a credit card. The main goal was to make a dynamic store that did not need recoding when a new product came along. Another main goal was to allow users to just use a credit card and not a paypal or some other login payment system.

##Landing Page Design 
The main landing page is to inform the user of the page. It includes major information about services, about, and contact. The landing page also can handle a login submission straight from the root directory. One can also be directed to another registration page. 


## Store Design 
An application that could simplify ecommerce to simpilest form. Upfront store with products that can be purchased straight through the store using just a credit card or debit card. No need for any paypal login information. The goal was to use an s.p.a with angular. The full store is a single page application. The landgin page also handles a complete login system as well as registration page. This application has many angular tasks inside. You do not have to edit the code to add a new product! Just go to the moltin dashboard and add. The app's ng repeats and endpoint will automatically fill it in. Each directive is ready for a new implemented product. Using Angular for the store front allowed the application leave less of a footprint and allow the app to be SPA. Bootstrap aided in most of the css design. 

## User Stories
- As a user I would like to be able to purcahse an item from a store.
- As a user I would like to be able to use my credit card or debit card instead of a payment processor online.
- As a user I would like to be able use the store in a SPA environment.
- As a user I would like to be able login and register.
- As a user I would like to be able submit my shipping address and or billing address when making a purchase.
- As a user I would like to be able add items to my cart and see them visibily. 
- As a user I would like to be able navigate through products with ease.
- As a user I would like to be able contact the ecommerce company with ease.
- As a user I would like to be able navigate the website with ease. 
- As a user I would like to be able see new products added in the same format.
- As a user I would like to be able use a coupon.
- As a user I would like to be able use a different billing address then shipping address.
- As a user I would like to be able cancel an order
- As a user I would like to be able to make multiple orders.
- As a user I would like to be able navigate to the home page and the store.
- As a user I would like to be able see categories and collections


## User Stories  ICEBOX
- As a user I would like to be able to use oAuth for login
- As a user I would like to be able have customers have an order that emails them.
