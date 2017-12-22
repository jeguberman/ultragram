# Routes

## HTML
* GET / StaticPagesController#root

## API Endpoints
### users
* GET /api/users - returns relevant users (filtered by data/params)
  * used in users search and anything requiring current_users' friends list, such as the feed
* GET /api/users/:id - returns specific user's profile data
* PATCH /api/users/:id - changes user's profile data.
 * pretty sure personal quote is the only thing the user can edit in this interface.
* POST /api/users - sign up



### session
* POST /api/session - log in
* DELETE /api/session - log out

### images

* POST /api/images - posts an image to the database.
  * I should really know if this performs the reroute or if the front end handles that...
* GET /api/images - returns relevant images (filtered by data/params)
* GET /api/images/:id - returns image of :id, and that images relational data (author, liker_ids, comment_ids)

* UPDATE /api/images/:id - updates ONLY the image's caption

* DELETE /api/image/:id removes image from database


### comments
* POST /api/images/:id/comments - posts a comment to the database with .image_id set to :id.

* GET /api/images/:id/comments - returns relevant comments by image_id = :id
  * also returns the array of like_ids (or maybe liker_ids) for that comment

* PATCH /api/comments/:id - updates the comment

* DELETE /api/comments/:id - destroys the comment

## Front End Routes

* /login


* /signup
* /users/:userid
* /users/:userid/edit
* /users/:userid/followers
* /users/:userid/following

* /images/new (not on IG website)
* /images/:id
* /images/:id/edit (not on IG website)

* /feed (should this not be "/" if current_user === authorized?)





## notes
* at the instagram website, user search is only available in the nav bar. An index is never returned for users except in stories, a feature not being implemented in this project. So while users certainly have a back end index route and a front end component, they don't appear to need a front end route.


* actual instagram FE routes user username instead of ID. This actually makes more sense from a usability standpoint, but ids are obviously easier for a demo where I have to worry about at least a half dozen accounts. Will ask circle TA to advise

* instagram's actual desktop webapp doesn't allow users to post or delete images. These actions require mobile access. We're going to create a front end post route for images anyway, which will be good style practice after all. I won't be including a delete front/end route unless instructed to by my circle TA, as it seems against the spirit of the game.

* comments don't need their own front end routes, even though they are resources, they are only ever tied to images. A comment without an image has no context to justify it.
