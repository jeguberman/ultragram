# MVP List

## 1. New account creation, login, and guest/demo login

## 2. A production README

## 3. Hosting on Heroku

## 4. Images
* Users can upload, view index, view individual, edit and delete pictures.
  * Editing images does not include photomanipulation. It shall be limited to editing an optional text caption, which is similar to (but technically distinct from) a comment.
  * There are two formats for index views. The Feed and The User page. They behave slightly differently.
  * double clicking on a photo shall cause the logged in user to "like" the photo.(see below)
  * Photos can have comments (see below)
* Adequate styling
* Smooth, bug-free navigation
* Adequate and appropriate seeds to demonstrate the feature

## 5. Likes
* Users can 'like' images
  * the like count is displayed for each image
* clicking on an image's "like" will like the images
* clicking on an image's "liked by n users" will produce a list of the first 25-100 users who liked the photo
  * this list will occupy a small view in the middle of the screen, but the previous view is still visible z-1 layers behind this view.
* Adequate styling
* Smooth, bug-free navigation
* Adequate and appropriate seeds to demonstrate the feature

## 6. Commenting on images
* When posting images, users can also include a comment body which is displayed with the image in the feed
* Other users can post on those images comment space, assuming they are authorized by the user via a "friends' list"
* The last 3 comments are also displayed.
* If an image has more than 3 comments, the words "load more comments" will appear
*   "load more comments" will load the next 7 comments directly into the same space.
* Adequate styling
* Smooth, bug-free navigation
* Adequate and appropriate seeds to demonstrate the feature

## 7. Follow & Photo messaging
* users can "Follow" other users. followed_users photos will appear in current_users "photo feed"
* Adequate styling
* Smooth, bug-free navigation
* Adequate and appropriate seeds to demonstrate the feature

## Specifications on photo views
#individual photo view
  * photo view has the author's name, the image, the image caption, list of the most recent comments and their authors, a like count, a comment count, like and comment buttons, a comment text field form, and an elapsed time element, which measures how much time has passed since the author posted the image.
  * double clicking on the image will also like the photograph, accompanied by a pulsing heart animation overlaying the image for about 1/4 of a second.
  * Double clicking on the image shall NOT unlike the image, though the "you liked this image" animation of a pulsing heart shape shall still be rendered.
  * the elapsed time element shall also hyperlink to the image's view route, and shall be in non-specific, human readable bullshit like "about an hour ago" or some other such meaningless crap that ruined the internet as soon as the normies moved in.
  * a users name in the comments section shall hyperlink to that user's profile page.
  * the author's username shall be accompanied by a rectangular "Following" badge if the current user is following the author.

# The Feed
  * The feed is the defacto "front page" for logged in users, and in fact if the user is logged in, "/" shall redirect to "/feed", or, with Circle TA's permission, "/feed" shall redirect to "/".
  * The Feed is essentially a single list. The list items are the most recent posts by other users on the current_user's followING list.
  * The list items more closely resemble the photo views themselves except for some slight restructuring of the subelements. Authorname and comments shall appear below the photograph instead of to the side.
  * further more, comments shall initially be truncated to the n most recent comments. Users shall be able to click on a "see more comments" button to see more comments. 


# The User Page
  * A user's profile page includes a grid style list of thumbnails of the user's posts, sorted chronologically
  * The thumbnails are listed in rows of three
  * The thumbnails contain no details. On hover, the thumbnails darken slightly, and present a count for the number of likes and the number of comments the photos have.
