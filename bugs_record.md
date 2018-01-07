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
