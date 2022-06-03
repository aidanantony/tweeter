# Tweeter Project

Tweeter is a simple and straightforward single-page Twitter clone.

For this project I used HTML, CSS, Javascript, Jquery and AJAX for my front end while NodeJs and Express took care of the back end portion of this. The database was simply an object database from memory. 

# Final Product
!["This is the view of the homepage of the site when you open it. Tweets flow down on the right side in this view"](https://github.com/aidanantony/tweeter/blob/master/snapshot-doc/Home-page.png)

!["This is the view of the homepage of the site again, but this time with an error message that appears when a user attempts to tweet an empty tweet."](https://github.com/aidanantony/tweeter/blob/master/snapshot-doc/Error-message.png)

!["This is the view of the homepage when a smaller screen or minimized window is used."](https://github.com/aidanantony/tweeter/blob/master/snapshot-doc/Smaller-screen-view.png)
# Key Features of the Tweeter Project
-Ability to send out tweets straight to the page. 
-Refresh is not required and no redirection will take place. Tweet should appear mere moments later on screen.
-Character counter in place to show how many characters are remaining. Includes checks to make sure tweets are not empty or over the limit.
-Responsive design was implemented to provide a great user experience no matter what device is being used. 
## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Body-Parser
- Chance
- Node 5.10.x or above
