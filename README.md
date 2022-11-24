# Semantic HTML with progressively enhanced navigation, tabbed component and form validation.

This is a solution to the [Art gallery website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges are designed to help developers improve their coding skills by building realistic projects. Assets are provided, but no guidance, and developers are free to choose any approach to solving the challenge.

The page is created so that everything is progressively enhanced in case CSS or JavaScript fail. The burger-menu will not kick in and all navigation items remain visible, the tabbed interface will not hide any content. The FAQ section uses the `details` and `summary` elements so it should work (but won't animate). Although the page won't look great, everything should still be visible and work.

![Design preview for the bookmark challenge](./design/desktop-preview.jpg)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
- The input field is empty
- The email address is not formatted correctly

### The solution

- [Live site](https://frontendmentor-bookmark-landing.vercel.app/)

### What I learnt

- I love referring to Heydon Pickering's [inclusive components](https://inclusive-components.design/tabbed-interfaces/), but it's really hard to understand everything that's going on.
- I used a Gulp build step to inline the critical CSS based on what I learned in Andy Bell's 11ty course. This is great, but I think I just prefer something simple!

### Where I got stuck

- Horizontal scrolling is still an issue because of the first pseudo element. I was not sure how I can fix this, or why it is only happening on the first pseudo element and not the second. They are essentially the same element with some extra transitions on the second one.
- I wanted to inline the SVG images but it caused so many issues that I opted not to in the end, and although not ideal took the performance hit. I had problems with background color and sizing in Safari - like bits of the SVG missing.

### Continued development

- SVGs! I think I just need to set some time aside to get my head around these. I can see them being really powerful and I just don't have the level of understanding that I would like on this subject.

## Resources

- Heydon Pickering has a really good and [in-depth write up on tabbed interfaces](https://inclusive-components.design/tabbed-interfaces/) that I used extensively as the basis for my approach to that section
- This page is a bit of a mess but it is the best [guide how to style details/summary elements](https://webdesign.tutsplus.com/tutorials/explaining-the-details-and-summary-elements--cms-21999) that I could find

## Author

- [Personal Website](https://www.dwhenson.com)
- Frontend Mentor Profile - [@dwhenson](https://www.frontendmentor.io/profile/dwhenson)