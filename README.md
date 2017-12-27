# README

A clone of instagram created as a full stack project for App Academy. I am not affiliated with instagram or facebook. This is intended to be educational. Also it's specifically for earth-shattering supervillains. ULTRAGRAM


I am using this space for a todo list. This todo list is not for future tasks, which are outlined in the homeworks, but documents which I came to realize should be done differently, after the fact.

Because this is a learning process, many documents will have more conflicts than usual. You'll have to take a bit from here and there to find the truth, but when in doubt, the most recently added design doc (usually from a homework) shall be considered "correct" unless otherwise stated. That document is [state & state_sample: dec 20]



TODO
* redo component heiarchies and schema if you have a chance, they do not reflect . HIGH PRIORITY

* clean up MVP list, make sure it consists of reasonable goals. You don't need a login from facebook button (do you?)

* Clean up your schema, find out how to create a table in md documents, good god man, you could have done nothing to the same effect.

* conceptualize seeds, you'll need pictures, you don't want to rush around at the eleventh hour downloading pictures.

* move user_data for Current_user into users in state sample, have current_user.id in session slice. add friend_id_array to users table.

* start thinking about what the feed will need: this will be the most complex feature, and should be implemented LAST when you already have a grip on how to build a react website. Know what Ajax requests this will need by monday. HIGH PRIORITY

* make a note in design docs that edit image will edit the author's initial comment, not the image itself.



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
