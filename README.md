# Frontend Mentor - Bookmark Landing Challenge

![Design preview for the Shortly URL shortening API coding challenge](./design/desktop-preview.jpg)

The page is created so that everything is progressively enhanced in case CSS or JavaScript fail. The burger-menu will not kick in and all navigation items remain visible, the tabbed interface will not hide any content, and the details-summary FAQ section will work, but not animate on open. It won't look great, but everything should still be visible and work.

## The challenge

Users should be able to:

• View the optimal layout for the site depending on their device's screen size
• See hover states for all interactive elements on the page
• Receive an error message when the newsletter form is submitted if:
• The input field is empty
• The email address is not formatted correctly

## Lessons learnt

- 💡 I really need to get comfortable and understand SVGs better. It is taking me too long to get them sorted and I should be able to inline them.
- 💡 Same goes for pseudo elements. They took me ages to get sorted out and even now are not ideal. My approach seems very fiddly and is unlikely to work at all viewport sizes.

## Problems

I would very much welcome advice on the following issues:

- ⚠️ Horizontal scrolling is still an issue because of the first pseudo element. I am not sure how I can fix this, or why it is only happening on the first pseudo element and not the second. They are essentially the same element with some extra transitions on the second one. Any advice on this would be appreciated.
- ⚠️ I wanted to inline the SVG images but it caused so many issues that I opted not to in the end, and although not ideal took the performance hit. I had problems with background color, sizing and strange things in Safari - like bits of the SVG missing. Any suggestions on resources, courses or learning materials would be really appreciated.

## Future learning

- 🙇‍♂️ SVGs! I think I just need to set some time aside to get my head around these. I can see them being really powerful and I just don't have the level of understanding that I would like on this subject.

## Resources

- 🔗 Heydon Pickering has a really good and [in-depth write up on tabbed interfaces](https://inclusive-components.design/tabbed-interfaces/) that I used extensively as the basis for my approach to that section
- 🔗 The page is a bit of a mess but it is the best [guide how to style details/summary elements](https://webdesign.tutsplus.com/tutorials/explaining-the-details-and-summary-elements--cms-21999) that I could find
