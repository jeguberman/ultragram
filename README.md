# README

Ultragram is a single page photosharing app inspired by Instagram. With Ultragram users can upload and share images.

https://ultragram.herokuapp.com/#/

Ultragram was built with a Ruby on Rails server with a PostgreSQL database on the backend, and React running in node.js on the front end. Front end state is managed with the React-Redux library, and React-Router is also used.

http://rubyonrails.org/
https://www.postgresql.org/
https://reactjs.org/
https://redux.js.org/
https://www.npmjs.com/package/react-router

Other Resources

react-moment: https://www.npmjs.com/package/react-moment
text-area-autosize: https://github.com/buildo/react-autosize-textarea

# Users
Users can create an account. Passwords are hashed and salted using 64bit encryption before being stored in a database. Because this is a demo site, and not meant for commercial use, it isn't recommended that users use actual passwords. In fact, in general, you shouldn't use the same password across multiple websites and services.

Users have their own view which displays details about them as well as a list of the pictures they have uploaded. Users can also follow other users.

Thanks to the React-Router library, a user's view can be navigated to by using that user's username in the URL instead of an id number. That is to say, Alice's user page is accessed via ultragram.herokuapp.com/#/alice instead of ultragram.herokuapp.com/#/users/64.

Users can log out quickly via the left most button on the right side of the nav-bar. This rectangle with an arrow sticking out of it is the inter-galactic symbol for logging out, recognized by all species in the galaxy.


# Photos
Users can upload photos, after all, that's why we're here. To access the photo upload view, users can click on the camera in the nav-bar.

# Future Features
