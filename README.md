## Features tested and how to fix?
The assignment for this week was to test 8 features:

1. Turn off images
2. Turn off custom fonts
3. Turn off color and test colourblindness
4. Mouse/trackpad
5. Broadband
6. Javascript turn off
7. Cookies
8. LocalStorage
 
#### 1. Turn off images
When you turn off images in your browser, it still shows SVG images. That's why I decided to make the icons and selfmade png files into SVG files.


#### 2. Custom fonts
During testing it turned out that custom fonts does not work on every browser. To prevent this problem, a fallback font was used and a standard font that should be suitable for most browsers.


#### 3. Turn off color and test colourblindness
I only used colors for website styling. Such as dividing the sections elements. I also gave a blue outline to the focus elements on which the tab function is located. But because this blue frame does not stand out on every element for example the genre checkboxes, I have given a focus status.

#### 4. Mouse/trackpad
I have added a focus state for the mouse and trackpad. During testing, I discovered that the check boxes could not be focused at all. The reason was because the element was " display hidden". After this issue is resolved, the element could be focused on. The problem that followed was that the focus was not clear to the user. So to fix that problem, I added an `transform scale`. Now when the user is focusing on an element, the element become bigger/smaller.

#### 5. Broadband
To prevent broadband in my concept, I tried to keep everything as small as possible, like:
• Minify Javascript
• Minify CSS
• Use SVG instead png
• Compress images

#### 6. Javacsript turn off
my first concept was all made in javascript, which completely broke the website when Javascript was turned off. That is why this prototype has been completely written to Node JS so that the website can function without javascript.

#### 7. Cookies & 8. LocalStorage
My website currently does not use cookies and local storage


## Screenreader testing and device lab
During testing I was only able to test the screen readers. It showed that I had to add much better alt tags to images.

Unfortunately, I didn't have enough time for testing on different devices. The only thing I know is that my oba website breaks completely on mobile and tablet, since everything is styled for laptop size.