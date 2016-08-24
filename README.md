# Capstone Angular Project

This is news retrieval and email service using the NY Times and Guardian APIs
to create a curated news content site for discovery and research.

It comprises an AngularJS app for news retrieval, and a Rails API for the email
service.

The user is presented with a calendar to select a day which is of news 
interest

[![calendar app.png](https://s15.postimg.org/vsayveumz/calendar_app.png)](https://postimg.org/image/j0wsowkuv/)

This, then, takes the user to a news search for the day selected:

[![search query.png](https://s4.postimg.org/ufdq7bpt9/search_query.png)](https://postimg.org/image/9ihi2nrs9/)

The results of the search entered by the user are laid out to view

[![results.png](https://s4.postimg.org/dibthlvwd/results.png)](https://postimg.org/image/yrzfsgc6x/)


instructions:

cd into the root directory of the project

install node v4.4.5 or higher

install bower globally: 
    npm install -g bower 
    
install dependencies specified in bower: 
    bower install
    
Gulp commands are included to connect to a server locally within your dev environment.  

To Install Gulp:
	install globally like so: 
	    npm install -g gulp
	install gulp as a dependency of the app: 
	    npm install --save-dev gulp

To install gulp-connect [as a dependency]:
	npm install --save-dev gulp 
	run gulp connect within the project directory


