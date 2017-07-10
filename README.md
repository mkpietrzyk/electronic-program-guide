# Electronic Program Guide (EPG)

### Michał Pietrzyk

### Project description


Basic Single Page Application using parallel-ran npm scripts, showing an electronic program guide for specific date covered. For things that can be done, see section 'To do' at the end of readme.         
  
    
### Some Features

* App is ready to be fully functional with 'details' components about channels/series, if proper data given. Additional components can be just connected with Router already installed and configured inside app in root index.js file

* App is fully Responsive

* App is Redux-ready, with Redux and store configured and simple data fetching from our localhost server.

* The time given in application is located in '/Components/utilities/dateFilter.js' file under 'time' const variable. By changing hours, you can manage to change the outcome of schedule (currently playing, upcoming series)
    * example of changing, please see the highlighted values:
        * from : 2017-03-18T<b>16:20</b>:00+01:00 to 2017-03-18T<b>17:20</b>:00+01:00
* App is ready for production purposes

### Featured libraries/frameworks

* Core

    * React + Redux (with Router)
    * Mock Api from simple localhost server
    * npm-run-all for parallel scripts launching:
        * link: https://www.npmjs.com/package/npm-run-all
          
          
* Styling

    * react-bootstrap
        * Grid style for full RWD compatibility
    * react-icons (font awesome)
    * styling done using SCSS files
    * color pallete used:
        * material design: https://material.io/color/#!/?view.left=0&view.right=0&primary.color=212121&secondary.color=FF6F00&primary.text.color=FAFAFA

 
### How to run

    * clone repository
    * install packages via 'npm install'
    * run project via 'npm run dev' command
    * application will run on port 3000, server will be on port 1337. 


### Commits Shortcut Legend:

    * D - Depedencies
    * F - Feature 
    * S - Styling 
    * R - Readme 
    
    
### To Do

* Probably the name convention of DashboardView should be renamed into 'EpgView', if we want to make the Dashboard our main view and we keep in mind that in the future, there will be details pages about channels/series etc. 

* Some mixins to work with on SCSS side


    
    
