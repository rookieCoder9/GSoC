# GSOC 22 Own Cloud Pre-evaluation Tasks
## Features

- Clean Code
- Readable Code
- Quality Code
- Accesibilty of widget 

## Experience
When I first saw the project , I  seem to completely lost . It is huge with use of various things like vuex , mixins with which I was unfamiliar . But I didn't give up .I spent hours reading the code , placing "console.log" in almost each functions .Frustrated with the complexity of code , I finally decided to ask for help from my mentor "Elizavet" .She is extremely helpful and  with the help of her I was able to do Tasks 2 and 3 . Soon , the so called "complex code" was now similar to me .I really had fun to work on these tasks especially the last one :) .
This is first time open source experience and I am grateful to CERN to provide with such opportunity.
## Coding Done and UI/UX Decisions

1) For the image mode I created a module in the store . Since , I wanted to access the state , actions and mutations for it from more than single component . With the hep of store it becomes really simple to have control throughtout the project. 
2) For task **2** I created a method in the **'packages/web-app-files/src/views/personal'** file named getimages() wherein I passed the **paginatedResources** and applied higher order **filter** method to extracts resources ending with common image extensions. Huh ! that was a piece of cake .
3) Now moving on to Taks **3** I used the **"OC-SWITCH"** component provided on **owncloud.design** . As per as UX is concerned , it seemed really accessable and appealing to eyes to place the widget under **setting** along with **show hidden files** switch . 
4) Coming to the bonus task (Task **4**)  I tracked how the **Show hidden Files** swtch worked . I got to know how the files were hidden filtered in the **getter.js** file .I removed the filter image function from the personal.vue file and placed under the **getter.js** and **boom !** it worked at first instance .

## Screenshots
### Widget
![Alt text](https://drive.google.com/uc?export=view&id=1uDecZUUsAbp4Jq3Im3Twemou3B8ET7s0) )

### Workflow
![Alt text](https://drive.google.com/uc?export=view&id=1Ghc7zPijpYIf6JcURax8tRXLQZc8sTC-) 
