# Tip Calculator

### Objectives:

By the end of this lesson you should be able to create a tip calculator by:

- Adding event listeners to DOM elements
- Selecting DOM elements and their values using JavaScript
- Creating and appending elements to the DOM

![](wireframes/tip-calculator-amount.png)

## Set the stage

- Clear the stage (close all other terminal tabs, chrome tabs, email etc...)
- Figure out the "what" and "why" by a) reading through objectives and b) reading through the activities below
- REMEMBER!  It's about the process.  There's no rush.  Take risks, have fun!  Don't be afraid to make mistakes and try things.

## Set Up

1. Fork, clone, `cd` into this project and open it in your text editor
1. Create a standard HTML 
1. Add a CSS file, and wire up the JavaScript and CSS files 
  - add a simple `console.log` in the js file to verify that it's included correctly
  - add a simple style change, like a background color on `body`, to verify that it's referenced correctly

With git, stage the changes, commit with a descriptive message and push

## Story #1

**User can see a properly styled form**

Write your HTML according to the wireframe below.  Make sure to include:

- A heading
- An input field
- A button

Use custom CSS or a CSS framework to layout and style the elements.

![](wireframes/tip-calculator.png)

Self-assess:

- Check your work visually.  Does it match the wireframe?
- Is your HTML valid according to https://validator.w3.org/nu/ ?

Create a checkpoint:

Now's a good time to do a quick git add / commit / push.

## Story #2

**User can see the correct tip amount when they enter just a number (without a $)**

Write javascript to satisfy the following user story:

    When a user enters a number 
    And clicks "Calculate Tip"
    Then they should see the 20% tip amount appear beneath the text field

![](wireframes/tip-calculator-filled-in.png)

Organize your code correctly into both `app.js` and `events.js` files. Seperate the event handler functions.
If the codes is all in one file, divide it accordingly so it still works.

Check your work:

- When you first load the page, do you see any errors in the console?
  - If so, fix them
- Did you use any `onclick` attributes in HTML?
  - If so, move those to `addEventListener` in `app.js`
- Enter amounts like `33` and `45` and `17`.  Do you see more or less than 2 decimals?
  - If so, make sure that you always display all tip amounts to 2 decimals, as the wireframe has specified
- Does the `$` appear correctly in the output?
  - If not, go back and look over the wireframe above and make your output match

Commit with a descriptive message and push.

## Story #3

**User can choose the percent they'd like to tip**

Update your app to enable this story:

    When a user enters a dollar amount
    And chooses the percent they'd like to tip
    And clicks "Calculate Tip"
    Then they should see the correct tip amount appear beneath the text field

![](wireframes/tip-calculator-amount.png)

Commit and push.

## Reflect

- Did you follow the stories step by step or did you find yourself working on multiple stories at once?
- Do you have at least four commits with descriptive messages?

## Stretch Stories

**Users see a new total with the tip added**

    When a user clicks "Calculate Tip"
    Beneath the text field
    They should see the correct tip amount AND a new total with the tip added 

**Users see the tip amount update as they type**

    When a user types, after each keystroke update the tip amount
    Also change the tip amount automatically when the dropdown is selected

**Users tip percentage selection remains after refreshing the page**

    When the page reloads, the user sees the previous selected percentage as default

Use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to save the user's tip selection on change.
When the page loads, find the user's saved tip selection from localStorage and select it from the dropdown
