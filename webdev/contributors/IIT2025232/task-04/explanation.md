### Explain what this code do

1.Firstly I just stylized the simple HTML that was given using basic css.

2. Then I added a :root and added two global variables base color and text color.

3. Then I added a dark mode class to invert these colors using variables.

4. For the button, I added two icons from Google Fonts.

5. Filled the color according to the theme.

6. In the JS I read whether the dark mode is active or not using the localstorage.getitem thingy

7. I make two functions the first one to enable dark mode and the second one to disable it.

8. Then I add an event listener which changes the modes on click

9. The function themselves perform this by simply adding the class dark mode to the body of the html

10. They also set the value of dark mode in the local storage either 'active' or 'null'.
