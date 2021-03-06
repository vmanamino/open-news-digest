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

Each result opens into a pop up providing
..* article details
..* links to the article
..* links to related news content
..* and the option to email the article

[![modal.png](https://s4.postimg.org/olc5ja5bx/modal.png)](https://postimg.org/image/781v4fa0p/)

When you click the email button, you enter the email address of the person you 
want to read the article.  That person then receives an email with a direct
link to the article.

**_Enter email_**:

[![email.png](https://s10.postimg.org/t2pt11wc9/email.png)](https://postimg.org/image/3jxgo1cs5/)

____

**_Inbox_**:

[![inbox.png](https://s14.postimg.org/fotkx2te9/inbox.png)](https://postimg.org/image/g1kz39bnx/)

____

**_Email body_**:

[![emailbody.png](https://s3.postimg.org/p8gnojqdv/emailbody.png)](https://postimg.org/image/thldqptn3/)

____


**Instructions to install the AngularJS app**:

cd into the root directory of the project

install node v4.4.5 or higher

install bower globally: 

    npm install -g bower 
    
install dependencies specified in bower:

    bower install
    
Gulp commands are included to connect to a server locally within your dev environment.  

To Install Gulp

	..1. install globally like so: 
	
	    npm install -g gulp
	    
	..2. install gulp as a dependency of the app: 
	
	    npm install --save-dev gulp

To install gulp-connect [as a dependency]:

	npm install --save-dev gulp 
	
run gulp connect within the project directory

**Rails API email service**:

Here is the link to the repo for the API:

https://github.com/vmanamino/email-handler-api

You can fork it and then push it to Heroku for free (after setting up an account)


Once the API is available, change the link in the AngularJS app
in open-news-digest/app/js/library.js:

	 .service('sendEmail', ['$http', function($http){
	        return function(title, link, type, email, subject, attribution){
	            console.log(title, link, type, email, subject, attribution);  
	            return $http({
	                method: 'POST',
	                **url: 'https://infinite-taiga-49465.herokuapp.com/api/emails',**
	                params: {
	                    title: title,
	                    link:  link,
	                    kind: type,
	                    address: email,
	                    subject: subject,
	                    attribution: attribution
	                }
	            });
	        };
	    }])

