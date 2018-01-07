# README

A clone of instagram created as a full stack project for App Academy. I am not affiliated with instagram or facebook. This is intended to be educational. Also it's specifically for earth-shattering supervillains. ULTRAGRAM

## January 2nd 2018
* 12:15 should be able to create users at seeds and from console. Static page still not build
    * create user from console X
    * create user from seed file X
* 12:30 should be able to create users from static page
  * render static page root X
  * render to page
  * create user from chrome console with predefined ajax requests X
  * create the store X
  * create errors handling for state X
  * bootstrap user to window X
  * create a sign up page, don't make it pretty
    * be able to create a user from the page, check in the console
  * make the static page render something different if user is logged in
    * it's time to learn what bootstrapping actually is
    * user should be logged in after signing up
    * there should be a log out button. this will eventually be in a dropdown menu

## January 3rd 2018
  * mostly css styling. incorporate a picture
  * added errors
  * the view is not centered. Part of this is the image container
  * when the session-view component is resized, it resizes the image

## January 4th 2018

  * styling mostly finished. still need to add a picture into cell phone image and incorporate authroutes. If there's time, do rotating pictures. Don't wast time on this.
    * authrouting (not with router, on account of the actual route doesn't change)
    * login screen out of bounds if window too small
    * image at log in now has an actual image in it
  * updated user table, model, controller and views
  * added demo user to seeds
  * further styling for demo user to mock instagram page

##  January 5th 2018
### TODO
  * create an auth route for feed and session
  * DONE sign up for paperclip
        Paperclip is now compatible with aws-sdk >= 2.0.0.

        If you are using S3 storage, aws-sdk >= 2.0.0
        requires you to make a few small changes:

        You must set the `s3_region`
        If you are explicitly setting permissions anywhere,
        such as in an initializer,
        note that the format of the permissions
        changed from using an underscore to
        using a hyphen. For example, `:public_read`
        needs to be changed to `public-read`.

        For a walkthrough of upgrading from 4 to 5 and aws-sdk >= 2.0 you can watch
        http://rubythursday.com/episodes/ruby-snack-27-upgrade-paperclip-and-aws-sdk-in-prep-for-rails-5
  * Images back end cycle
  * images front end cycle
  * migration server size null: false validation on image_url

## January 6th 2018
  * So I had made a mess of my front end routing, but it should be mostly cleared now.
  
  * The image index is rendering, but it's _literally_ just a list of indexes. The reason this was worked on at all is because I didnt' want to abandon the paperclip lesson at the point I was at. I felt it would cost me more time in the long run. Now I feel that I am at a good stopping point.

  * because front end routing is essentially working (to my current needs), I am switching back to my auth branch to create the nav bar which will render on all pages when logged in. After the nav bar is done, which I assume will be well after the program at my current rate, I will swap the image index OUT and the nav bar IN at the HomeRoute util component. All other components will be put behind a **proper** AuthRoute component.

  * I never updated my wireframes. This navbar will look very differently from it's wireframe. There shan't be a search bar at all, that will be a bonus feature. the compass shall be a logout button, the little person will still be a User Profile page. The heart shall be replaced by a camera and link to the photo upload form. Thanks to justin shieh of the oct 2017 cohort and his MemoryLane clone for this idea. Because most of those components aren't actually implented yet, they shall only be log out buttons when I upload this to heroku. I want to upload to heroku by noon on sunday.














I am using this space for a todo list. This todo list is not for future tasks, which are outlined in the homeworks, but documents which I came to realize should be done differently, after the fact.

Because this is a learning process, many documents will have more conflicts than usual. You'll have to take a bit from here and there to find the truth, but when in doubt, the most recently added design doc (usually from a homework) shall be considered "correct" unless otherwise stated. That document is [state & state_sample: dec 20]



TODO
* oscar requests users can delete their own images. Somewhere in your design docs this is not implied
  * check:
      * back end Routes
      * wireframes
      * component heiarchy

* DONE redo component heiarchies and schema if you have a chance, they do not reflect . DONE

* DONE clean up MVP list, make sure it consists of reasonable goals. You don't need a login from facebook button (do you?)

* DONE Clean up your schema, find out how to create a table in md documents DONE

* conceptualize seeds, you'll need pictures, you don't want to rush around at the eleventh hour downloading pictures.

* DONE move user_data for Current_user into users in state sample, have current_user.id in session slice. add friend_id_array to users table. DONE

* DONE start thinking about what the feed will need: this will be the most complex feature, and should be implemented LAST when you already have a grip on how to build a react website. Know what Ajax requests this will need by monday. DONE

* DONE make a note in design docs that edit image will edit the author's initial comment, not the image itself. DONE

* DONE login and sign up do NOT have their own front end routes


Feedback from Circle ta

### ON Sample State
First, feel free to store that additional data when you're at a point that it may be rendered - i.e. when you go to the user page.

Second, I think there was a misunderstanding. You should store the current user's data in the user slice of state, NOT separately in the session slice of state. The session slice of state should only know the id of the current user. You should always consistently source user data from the user slice of state.

Default images will be handled by Paperclip. You should always pass along some sort of URL for an image; don't pass along an integer when you want it to default to something else. Relatedly, you'll be storing all images as attachments on the relevant models (Image model for regular images, User model for profile images). Again, Paperclip will handle this. You can see more information about this in the Full Stack curriculum.

Don't enforce uniqueness of images.


### on WireFrames and component heiarchy

Remember to actually submit a link to each portion of your proposal! That said, I was able to dig it up to give you some feedback.

The wireframes look good, but there are a couple of things I'd like you to think about. Use the wireframes to plan the React components you'll need, not just what each thing will look like. Be mindful of overreaching; you're not going to be able to implement features like notifications and user discovery before W9D5.

The component hierarchy makes a good deal of sense. Use this as a guideline when you start creating your React components in your app, but know that you'll end up changing a bit as you go.

### On Timeline and first draft of design documents
John,

Nice work on the proposal! I have a few notes (and answers to your questions):

You may not need a users index at all. Most of the time you'll be primarily fetching posts/images with associated user data, not the other way around.

You can definitely route by username on the frontend, but you absolutely should route by id on the backend. I recommend routing by username on the frontend for this project.

INSPECT THIS
***
Remove index from username column on users table
change front end user route to user username for user show
changed account edit front end route to universal route with log in requirement
***


I'd like users to be able to delete their own images.

You're right, comments don't need their own frontend route. You will also not need a route to fetch comments for a particular image - you should get the comments when you hit the "show" controller action for an image.

Make sure you don't actually generate your models to have url columns for files. We'll use Paperclip to handle that. Check out the tutorial in the curriculum. There's also a way to set a default image for users without a profile picture set.

Your wireframes look great, but be careful about dead links/buttons and such. If you're not going to implement a feature (like Stories), then don't pretend that it's there. No dummy content! Empty space is better than a flimsy facade of a nonexistent feature.

Your production README will likely be the last MVP you complete. You'll need to include screenshots and code snippets, which you won't have until the end. Most students do it on W9D4 or the morning of W9D5 - it only takes a couple of hours, max.

I think your timeline is a little out of whack. You're not going to complete all of the Images feature by Thursday - that's not enough time. Conversely, you won't take 5 days to implement comments - that's a much smaller feature than images.

Please revise your timeline and let me know if you have any questions. Great work!
