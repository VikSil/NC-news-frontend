# NC News

This repository contains a website that was developed during [Northcoders Software Engineering Bootcamp](https://northcoders.com/our-courses/coding-bootcamp), front-end project week. It constitutes a news website with articles on various topics, where users can  view articles by category, up-vote and down-vote articles by other users, comment on articles and delete their own comments.

<p align = "center">
<img height= "480" src="https://raw.githubusercontent.com/VikSil/NC-news-frontend/main/src/assets/img/GIF_demo.gif" alt="NC News website demo GIF"/>
</p>



Video demo of the website can be viewed [here](https://youtu.be/Kdx5pjnXCHc).

The backend repo can be found [here](https://github.com/VikSil/NC-news-backend-API).

Instructions below will explain how to run this website locally.

## Prerequisites

Local version of the back-end is **not** required for the front-end website to run locally.

Prerequisites for running this website locally are:

* Node.js with npm (version 20.8.0 or higher)
* Git

To make sure that all prerequisites are installed, run the following commands in the terminal:

```
    node --version
    npm --version
    git --version
```

If all return sensible looking version numbers, proceed with the setup. Otherwise, look into [these](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instructions for setting up Node and npm, and [these](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) instructions for setting up Git.

## Setup and installation

To set up the website and run it on your local machine:

 1. Create a directory where the project will be contained and `cd` your terminal into that directory. 
 1. Clone this repository onto your local machine by running the following command: 
 
```
    git clone https://github.com/VikSil/NC-news-frontend.git
```


 3. Run command: `cd NC*` to change into the repo directory.
 1. Run the following command to install dependencies (this will take several minutes to complete):

 ```
    npm install
 ```
The above command will result in a message about the number of packages that have been added and audited. If the message contains information about any vulnerabilities, run the following command:

```
    npm audit fix
```


## Starting the website

Run the following command to start the website:

```
    npm run dev
```
The above command should output the following message:

<img src="https://i.imgur.com/oxUR7WT.png" alt="Server running message" width="350"/>

You should now be able to view the website by inputting the **Local** address into your browser. 

## Documentation

### Wireframes
The wireframes below illustrate the layout of the website.

[<img src="https://i.imgur.com/uPeucE8.png" alt="Articles List wireframe" width="1000"/>](https://i.imgur.com/uPeucE8.png)

[<img src="https://i.imgur.com/AeYRTW8.png" alt="Article wireframe" width="1000"/>](https://i.imgur.com/AeYRTW8.png)

[<img src="https://i.imgur.com/nTI0sVh.png" alt="User page wireframe" width="1000"/>](https://i.imgur.com/nTI0sVh.png)

[<img src="https://i.imgur.com/lVBxDuJ.png" alt="Loading and Error page wireframes" width="1000"/>](https://i.imgur.com/lVBxDuJ.png)

### Component Tree Diagram

The component diagram below illustrates the component hierarchy, along with the states and properies used within the website.

[<img src="https://i.imgur.com/3LNiG90.png" alt="Component Tree Diagram" width="1000"/>](https://i.imgur.com/3LNiG90.png)

## Disclaimer

The data that is retrieved from the back-end for the use of this website was provided as part of the course material by Northcoders. The repo owner has to the best of their ability removed and replaced any potentially harmful content. Any remaining data is not necessarily an accurate reflection of the repo owner's beliefs. The use of the back-end data does not constitute endorsement.

