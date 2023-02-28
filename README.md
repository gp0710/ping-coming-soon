# Ping Coming Soon Page

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot
![Screen Shot 2023-02-28 at 6 30 58 PM](https://user-images.githubusercontent.com/75948442/222006913-cf95e680-d9a3-49e6-a5b4-a43846164c83.png)

### Links

- Solution URL: [code here](https://github.com/gp0710/ping-coming-soon)
- Live Site URL: [live site URL here](https://gp0710.github.io/ping-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS 
- Flexbox
- Mobile-first workflow
- Gulp
- Font Awesome - For icons


### What I learned
I'm becoming more comfortable with SCSS. 

Did you know? The viewheight can be greater than 100% of the height of the screen.

```css
.example {
  height 120vh;
}
```

Apparently I've been using regEx incorrectly for form validation. Even if I entered a correct email, an error will still appear. To fix that, I used the regEx 'test' method:

```js
regEx.test(email.value) == false
```

### Continued development

- Become comfortable with compartmentalizing different components in SCSS
- Build with webpack

