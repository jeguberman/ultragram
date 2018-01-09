bug: images reducer. newState = oldState; new state was taking on action? Solution was to merge oldstate with empty object, which I should have done in the first place, but I couldn't tell you why newState copied action?

bug: merge is not a function in images_reducer.
solution: used
import {merge} from 'lodash/merge'
 but wanted
 import merge from 'lodash/merge'

 still didn't fix solution. checked lodash docs. merge certainly exists, so ran npm install lodash. must have forgotten initially
***********************
 not technically a bug, but data doesn't exist where I think it should
 WHAT I THINK SHOULD HAPPEN:
 the image show container, before rendering, ought to fetch the image information and add it to store.state. Because image components props include this slice of state, the update should trigger a rerender

 but even as I type it, that's silly. semantically it can't trigger a rerender because we haven't rendered, but more technically, it can't trigger a rerender because nothing is changing props

solution: I wasn't fetching properly. For many reasons, mainly typos. I did what you always do, throw s and breakpoints at every part of the path I could think of. Eventually, I bound my action creators to the window to see if my ajax requests were working. They weren't, but then neither were my action creators, nor were the actions themselves correctly made. My reducer was picture perfect, but it still received the wrong commands. Now I have to clean up the mess I made while cleaning up the mess I made

image bug part 2: the buggening

No the original problem is still there, but at least now I know it can THEORETICALLY render an image. I mean I SAW it. I SAW the taijitu.

  * it seems somewhere along the way of fixing this mess I created a mess in my session errors slice
  * error message referenced an old name for a column on the users table. updated that in json.jbuilder




## nav-bar ultragram logo

### problem: the ultragram logo isn't changing size when I change the font size with a style sheet.

### methods:
  * checked spelling in css and jsx
  * check computed in console, doesn't appear to have a source?
  * changed element type from h2 to div
  * commented out reset sheet
  * commented out rest of style sheet and application style sheet
  * added similar styling to temporary border area. success??
    * check spelling: finding spelling mistakes with your eyes is hard;
### resolved


## fixed nav bar
### problem: wanted a fixed nav bar for a header but next element rendered underneath the header

### methods
  * research css positional elements
  * added div before the nav bar with static position, but of course that won't work, the fixed div isn't part of the flow
  * the buffer div will have to go AFTER the fixed div
### resolved

## I need more space below header
### problem: trying to increase the space between the header and the body seems fruitless.

### methods
  * margins don't work
  * padding doesn't work
  * increasing the size of the buffer doesn't work
  * in in fact I deleted the buffer and the header and body still don't overlap
  * webpack is still running...
  * check instagrams website
  * whoa they have their header BELOW their footer in their html? Maybe that makes sense, the fixed item IS removed from the flow.
  * that didn't work. Put it back
  * Literally just hit ctrl Y to undo what I did, saved it, and when I hit refresh we jumped into...

## Where did my app go?
### problem: Yo where did my app go, we're rendering from the static page

### methods
  * double check indentations. they LOOK alright
  * go back to the beginning. throw in substitute root and app components. Both are being reached. The problem must be in the dom of app
  * comment out header, see if the app comes ba- oh ok, it's back. It came back while I was writing this bug report so...

### ...resolved?

## Now about that gap between the header and the body...

### methods
  * check padding in computed of chrome console. css has body with 100px padding, chrome has none?
  * change body backgroud to green. chrome IS receiving updated style sheet.
  * try margin instead of body
  * comment out reset sheet. That works... but only kinda.
### resolved?
* Not really,  Apparently my css reset sheet is overriding my application css sheet. This seems.... odd to me. I know there's an "asset pipeline" but I don't have an understanding of it yet. If the application style is supposed to be the LAST style that is applied, how can anything override it?
* no wait, I increase the margin on the body and nothing has changed from the point of removing the reset. The reset is having a curious side effect on the problem but it's not the problem.
* remove fixed from nav-background. more margin gained but still no effect when touching the number value on the body style. what is going on
* further change when removing the header-buffer, which would make sense except the header-buffer was misnamed, so I never grabbed it in the first place, so what solved the overlap in the first place?
* ok, so maybe I never actually specified a unit for the top margin of the body in the style sheet
### resolved

## but...

### problem: it also turns out the div was still there and was pushing the body down too far. So I removed the div, and sure the margin is correct, but something is still pushing the margin of the body, which... if this was going to happen I wouldn't have needed the div in the first place... ok let's get cracking.
* oh sure, I turned off the fixed position of the header when I was debugging on the subway.
### but then why is the nav bar now one nav-bar-height's length from the top of the screen.
* use chrome inspector to poke around. nothing appears to be up there.
* check the nav bar in google chrome. The nav-background has a position-top index of 79?
* hunch.... the body margin?
### resolved

## ...this language is dumb.
### problem: so the body is still overlapped by the nav-bar
* put the header buffer back in, set body margin to 60px as per instagram website. This things is gorgeous. Let's move on

### resolved


## Image show, or don't, that's cool too:
### problem: Image show isn't showing the image. error is "cannot read property of image_url of undefined.". Further, react logger is showing the "receive images" action instead of "receive image".

###methods
* I'll start by checking my action creators. I'm trying to see why the reducer is receiving the wrong action.
* those look ok, so I'll put a debugger in the fetchImage action thunk so see if we're even hitting it
* we aren't, nor are we hitting the fetch images, so I'll check the image show container, what action AM I hitting?
* the container looks ok, I'll make sure I'm calling the right action in the component
* I wasn't. I was calling "fetchPost". This is happening a lot. If I have an idea I'll check previous clones from other cohorts to see if others have tried something similar. There are many downsides to this, one of which is, I'll read what they wrote, and the words will stick in my head. However, this still isn't solving the problem:
* I'm going to look at my image index, which IS correctly rendering. I have a feeling the problem here is my manipulation of the component with lifecycle functions, a problem I struggled with in the index.
* I was in fact using the wrong lifecycle function, but the problem still exists. Though the image at least exists in state right now.
* I'm going to put a breakpoint in the constructor and look at the props I'm receiving. I'll put another one in render.
* verily, I was not correctly calling data from the state object.

### resolved

## I mean it isn't a bug so much as I don't understand
### Problem. Whenever I fetch information for an image, I also want to fetch information on the author. On individual views, this isn't so much a problem, whenever I access a single image through a click event, I already have the image data. But I'll need author info for every image in the index, I can't be making an http request for every single image. I want to get all the authors at once, either with the image requests or as a separate call with an array of authors.

### I've already tried a few things, and now the challenge has hit a point where I think I should make a record. Most of my efforts were disorganized, and will likely come up again.

### methods:
* first of all, I'm going to hit the button and call a TA. It might be a very long time before one comes.
* I'm going to try and curate the data with jbuilder, using pokedex as a guide.
* you know what... while I'm here I should properly extract the image_url with asset_path
* a TA helped me better understand the structure of data being curated by jbuilder, I'm going to clean up my code, this should help me understand it better, then I'll finish my report

### resolved?: kind of. I mean it appears to be, but I changed so much trying to solve it, I'm afraid of something else being broken and I don't know where

## Log in... ok now really log in
### Problem: When logging out and then logging in, the view doesn't render. It renders on refresh. If you refresh after logging in, there is no problem. There are two session tokens.
### methods:
* let's check the application controller I guess
* I don't think these problems are on the back end, this stuff worked before, it must have something to do with when the component mounts
* cleaned up the file where the error was occurring but there's still a problem. There is no problem when refreshing on either the session form or the home page. The problem is clearly something to do with the cookie.
* I changed the front end so the user data gets sent to the slice at some point BEFORE the nav bar loads. Look into that. Maybe I should put that action back on the nav bar
* ok well, I changed "REMOVE CURRENT USER" back to "RECEIVE CURRENT USER: NULL" and now it works but.... why?
