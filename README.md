# A3
I made this quiz program in which the first page I included is the password input page  in which I used the html input type password so that login to the quiz page will be only possible when the correct password is entered. So for this login I included a   "login-btn event listener"   which handles user authentication by checking the enterder password matches to predefined password or not . Ad as I've already defined the password and for help I've wrttien it in the placeholder of the HTML so from there you just have to enter the same so you could login and start attempting the quiz.
Then I include a button to submit . Actually I've included a lot of buttons to my website pages.
Then I included a sidebar on the page. Only visible only when you click to the home icon at the top head of the web page .

For the Question's displaying in the card I've use the     "displayQuestion()"     function which displays the functin as well as it's option also the progress bar which I'ved added this function updates it too.

Also I've included the index of the correct answer so on choosing the correct option will reflect correct answer otherwise Incorrect.

For selecting the option in the quiz question I've used    "selectOption()"    function and to check whether the selected option matches with the correct answer or not I've put the index value in the parameter place of the function         "selectOption(selectIndex)".

For the timer which you can see in the sidebar I used      "startTimer()"    function which run till the provided time given like I've set for the 5minutes (300) , after it when the time reaches to zero then it'll stop and shows the result automatically.

For the dilpalying of the result        "showResult()"       which display the final score of the quiz.

For retrying the quiz     "retry-btn event listener "      is used which resets all the thing which allows us to retry whole quiz from the start.   Although it doesn't makes you attempt the login thing again but it does't hide it as well so due to it you can see the login bar at the starting of the page as you clcik the retry button.

"setInterval()"      inside the   "startTimer()" is used to create timer that updates time left every second.

DOM is also used here , there are several methods of it in this js code . Such as document."getelementById()" and     "innerHTML" used for updating content dynamically.

Event listeners such as "addEventListener()"    used for handling the buttons clicks and managing user interactions.

All these things I coded by my understanding level and during this I also took help from several websites and also the most common thing which I've performed was giving my code to chatGPT and other AI tools such as copilot and promt for the solutions of some things which I was unable to get so it helped me a lot at many places.

Also I've included a bootstrap library for a bit styling to cut some of the lines of CSS code I've written.

Thaat was all for this , basically it is a simple website layout for a quiz in which I've faced a lot of difficulties but eventually made it somehow with the help of some available resources online.


 
