# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Video](#video)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What i learned](#what-i-learned)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Video
![Video solution](./src/assets/clip/video-solution.mp4)

### Screenshot

![Desktop View](./src/assets/screenshot/desktop.png)
![Mobile View](./src/assets/screenshot/mobile.png)

### Links

- Solution URL: (https://github.com/Dee-Maria/react-social-proof-section)
- Live Site URL: (https://react-social-proof-section-34oz.vercel.app/)

## My process

## What i learned

When hosting the page on vercel, I encountered an error that made compilation fail,
which was 'a module not found error' with the app.css file. After my research, found
out that some filesystems are case-insensitive, however Vercel deployments use a case-sensitive filesystem. Because of this, it is possible that when you change the letter-casing in filenames on your local machine, Git will only pick up changes in your respective static import statements. This would mean that your repository is now syntactically incorrect, resulting in a build error when deploying the repository on the Vercel platform. To resolve this error make sure that your letter-casing in your filenames and imports are identical between your repository and local machine. If you are using git, make sure **git config core.ignorecase false** is set in your environment.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

## Author

- Frontend Mentor - [@Da-Hubb](https://www.frontendmentor.io/profile/Da-Hubb)