## Website Performance Optimization portfolio project



### Getting started
 I have not created the gulp. I used the github pages for calculating performance. Here is the link for the [website]( https://gmanideep1991.github.io/frontend-nanodegree-mobile-portfolio/)

#### Part 1: Optimize PageSpeed Insights score for index.html

Following things needs to be done in order to increase score for index.html.
* We need to optimize the images. (major increase in score)
* Pushed all the script and print.css link towards bottom of body.
* inlined style.css
* added media parameter to print.css link.
 

#### Part 2: Optimize Frames per Second in pizza.html

Following things needs to be done for 60 fps and reduce the time to 5ms.
* We need to bring the code out of changePizzaSizes() since all of them are having same size. reduced time for resize.
* Similarly we need to bring the code out of loop in updatePositions because function is calculating numbers more than required times. This brought down fps to 60.

Researched from google suggested references from page insights and also compared my project with some of the github repos listed here [click here](https://github.com/search?utf8=%E2%9C%93&q=frontend-nanodegree-mobile-portfolio)
