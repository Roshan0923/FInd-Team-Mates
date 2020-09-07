# Find Team Mates
* Date Created:  Aug 10, 2020
* Last Modification Date: Sept 07, 2020

# Created By
* Roshan Kirtikumar patel (rs735202@dal.ca)

## Getting Started

Find Team mates application will help the user to find the team mates and start a joureny of creating an exting project.The user can also share their project ideas and other user can join the project.So This platform helps the user to find team mates from around the world and connect with them.

#### Front-end used :
For this project, I have used Angular as a front-end.
#### Back-end used :
I have used Spring-boot as a backend and to store data i have used the AWS RDS database.

#### Access information :

To view the live demo of the web pages please click on the below links
* [Live Demo](https://find-team-mates.herokuapp.com/home)

To Access the Back-end you can use the below link
* [Back-end application](https://find-team-mates-spring.herokuapp.com/) (No UI, Just REST API call allowed)

---


## Prerequisites
To locally run our project of both front-end and back-end in your system you need to have below provided software installed in your system.

##### Front-end (Angular)
Make sure you have the [Angular CLI](https://cli.angular.io/) and [Node.js](https://nodejs.org/en/) installed globally. I have used use [NPM](https://www.npmjs.com/)( Node package Manager — a POSIX-compliant bash script to install and manage multiple Node.js versions in your machine.) to manage the dependencies, so I strongly recommend you to use it. 

##### Back-end (Spring Boot)
Since the backend is build using java language you need to have the latest version of  [java](https://www.java.com/en/download/) installed in your system. Apart from this, the version for gradel should be 5.2+, and  [spring boot](https://spring.io/projects/spring-boot) 2.3.2 should be installed.

See the following section for detailed step-by-step instructions on how to install this software/libraries/plug-ins

---
## Installing

##### Fron-end (Angular)
A step by step series of examples that tell you how to get a development env running.

There are two options to get the project.
1. You can download the .zip file and then unzip the file to the required folder.
  1.1 Once you have unzipped the folder, open the folder in cmd and follow the next section Deployment.
**OR**
2. you can clone the project. To clone the project follow the below steps:
 2.1 create a new folder 
2.2 open cmd, and using cd command go to the folder location.
2.3 Run the below program.
    ```
    $  git https://github.com/Roshan0923/FInd-Team-Mates.git
    ```
    2.4 After successful cloning you can open the angular CLI and follow the below steps.


This below command will install all required dependencies automatically. Just start the commands below in the root folder where you stored the package.

```
$ npm install
```

Run below-given command for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
```
$ ng serve
```

After a successful compilation of the project, you should see something like below in your cmd.
```
** Angular Live Development Server is listening on localhost:4200, open your browser on     http://localhost:4200/ **: Compiled successfully.
```

##### Back-end(Spring Boot)
A step by step series of examples that tell you how to get a development env running

There are two options to get the project.
1. You can download the .zip file and then unzip the file to the required folder.
  1.1 Once you have unzipped the folder, open the folder in cmd and follow the next section Deployment.
**OR**
2. you can clone the project. To clone the project follow the below steps:
 2.1 create a new folder 
2.2 open cmd, and using cd command go to the folder location.
2.3 Run the below program.
    ```
    $  git clone https://github.com/Roshan0923/Find-team-mates-spring.git
    ```
Once you clone the project you can import the project in any IDE as a Gradle project and you can run the project. After a successful compilation of the project, you should see something like below in your cmd.
```
   http://localhost:8080/ 
```

---

## Deployment
I have deployed my web application on the Heroku server. It is a cloud-based platform which allows to build, deliver, and monitor large scale application.
* [Front-end part](https://find-team-mates.herokuapp.com/home)

---

## Built With
##### Front-end
* [Angular CLI](https://cli.angular.io/) - The web framework used
* [Node js](https://nodejs.org/en/) - open source server environment
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Heroku](https://www.heroku.com/) - Used for deploying and managing web application
##### Back-end
* [Spring Boot](https://spring.io/projects/spring-boot) - Java Base Framework
* [AWS RDS](https://aws.amazon.com/rds/) - To store the database in the cloud

## External library used

*  [Angular-notifier](https://www.npmjs.com/package/angular-notifier) : It is well maintained and highly customizable, easy to use notification library. It is used in the job-board.ts component to show the notification to the user.


## Framework used
##### Angular
For this project, I  decided to use an angular framework because of its many advantages. One of them is, it uses typescript which is a superset for JavaScript. It fully compiles JavaScript But it has some other pros over traditional javascript language.

Apart from this, one of the main advantages of using angular is, Angular framework is embedded with the original MVC (Model-View-Controller) software architectural setup. Which indeed helps to create a more manageable web application.
##### Spring Boot
Spring Boot is an open-source Java-based framework used to create a micro Service. It allows producing stand-alone and production-ready spring application that you can run directly. By using various spring annotation we can create and manage the REST endpoints.

## Acknowledgments

* I have used [Angular material documentation](https://material.angular.io/) example to thoroughly understand each component and its use.
* I have used [Bootstrap documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/)to understand concepts like grid layout and component.
* [Flaticon](https://www.flaticon.com/) : Used icons in `home-component.html` file *(Individual reference of the image is provided in the .html page)*


