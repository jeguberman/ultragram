# README

Ultragram is a single page photosharing app inspired by Instagram. With Ultragram users can upload and share images.

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

If the user tries to make an account with a username that has already been taken, or they try to log in with the wrong password or username, they are given the appropriate feedback.

Users have their own view which displays details about them as well as a list of the pictures they have uploaded. Users can also follow other users.

Thanks to the React-Router library, a user's view can be navigated to by using that user's username in the URL instead of an id number. That is to say, Alice's user page is accessed via ultragram.herokuapp.com/#/alice instead of ultragram.herokuapp.com/#/users/64.

Users can log out quickly via the left most button on the right side of the nav-bar. This rectangle with an arrow sticking out of it is the inter-galactic symbol for logging out, recognized by all species in the galaxy.


# Photos
Users can upload and view photos.

After logging in, users are brought to feed view. The feed view shows the most recent pictures from other people the user is following. New users will have an empty feed because they aren't following anybody yet, but they will receive feedback telling them they aren't following anybody.

Users can access the photo upload view by clicking on the camera in the nav-bar. Once in the photo upload view, they can click on the "Choose File" button to bring up a directory navigator where they can select the picture they wish to upload.

After selecting the picture, they can add a caption to the picture to be displayed as the first comment. They can choose to leave the field blank. The last step is hit the submit image button.

After hitting the submit image button, they are taken back to their image feed. They won't see the picture they just loaded because users can't follow themselves. They'll have to go to their own user view to see the image.

When viewing an individual picture, the user will have access to a button to delete that picture. The user should never see this button for any pictures except the ones THEY uploaded.

Both the feed view and individual photo view will display how long ago the photo was posted in friendly relative time format.

Users can click on another person's username to get a link to the original-poster's user-view page

# Following
When viewing another person's user page, there will be a follow/unfollow button. When one user follows another person, the other person's photos will appear in the current user's feed.

# Comments
Users can comment on photos. To be say something inappropriately political of another person's picture, first go to the picture's view page. Comments are displayed to the right. At the bottom of the comment section, users can click on "Add a comment..." to begin entering text into the field, then press enter to submit.

After submitting the comment, the comment will appear with the emboldened name of the commenter in the comments field. Users can click on the usernames to go to the commenter's user-view page.

# Likes

Users can also like photos. There is a little heart underneath the photo in both the individual photo view and the feed view. When the heart is red, the current-user has liked the photo. When the heart is a black outline, the user does not like the photo. Liking is essentially commenting for people who have nothing to say.

Users should be careful to like all of the photos of the people they are following, or else these people will likely consider the user "fake-friends" and spread nasty rumors about the user at parties.
