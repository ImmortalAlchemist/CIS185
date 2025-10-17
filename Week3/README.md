/*

This assignment had these requirements:

1. [1]Media queries (@media)
2. [1]Flexible images (max-width)
3. [1]Viewport units (vw, vh)
4. [1]Flexbox or grid

5. [1]Bootstrap grid system
6. [0]Bootstrap components
7. [0]Bootstrap utilities

8. [0.5]README.md file that documents the manual approach

## ../Week3/Assignment3-Manual/

1. I used @media to dynamically change the projects grid.
2. I used flexible images to display different icons in my logo section.
3. The fonts on everything scale with max viewport dimension.
4. I used both.

## ../Week3/Assignment3-Bootstrap/

5. I used the grid to align the header.
6. ???
7. ???

### Manual responsiveness vs Bootstrap:
 * Complexity
The code for bootstrap is a lot more complex, or at least less parseable to me, because the class names are short and there are more of them to remember. It would probably be more parseable to others than my own code though.

 * Time
Doing the reponsiveness manually is a lot of finding the breakpoints that make the site look bad and tweaking values, so it takes more time.

 * Pros/Cons
For manual, you have to make an effort to change every dynamic element, so you can see all your changes and decide which ones need to change and which don't, which is a good and bad thing. It takes more time to do it manually, but it makes the site more distinct. 

 * Personal Preference
I'd prefer to just harvest the CSS from Bootstrap elements that I like to create my own unique classes, but I'll probably just stick to modifying bootstrap classes. I like to know what all my code does and not use templates.

#### Tips (mostly for myself)
ctrl + / to comment things in or out


#### Prebuilts (unused)
/* Default styles (mobile-first approach) */
.container {
    width: 100%; padding: 10px;
}
/* Tablet styles (768px and up) */
@media screen and (min-width: 768px) {
    .container { width: 750px; padding: 20px; }
}
/* Desktop styles (1024px and up) */
@media screen and (min-width: 1024px) {
    .container { width: 960px; padding: 30px; }
}

/* Mobile: Stack vertically */
.column {
    width: 100%; margin-bottom: 20px;
}
/* Tablet: Two columns */
@media (min-width: 768px) {
    .column { width: 50%; float: left; }
}
/* Desktop: Three columns */
@media (min-width: 1024px) {
    .column { width: 33.33%; }
}

*/