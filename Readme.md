1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
answer : getElementById selects one element by ID, getElementsByClassName selects all elements by class (live html-Collection), and querySelector/querySelectorAll select the first or all elements using any CSS selector.

2. How do you **create and insert a new element into the DOM**?
answer: Use document.createElement() to make a new element and appendChild()to insert it into a parent in the DOM.

3. What is **Event Bubbling** and how does it work?
answer:Event bubbling is a mechanism of the DOM (Document Object Model).When an event happens on an element, that event bubbles up through the DOM tree from the child element to its parent element.
The way it works:
button→div→body→html.

4. What is **Event Delegation** in JavaScript? Why is it useful?
answer:Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, you attach a single event listener to their parent.
It is useful because No need to attach separate listeners to every child and Only one listener is used instead of many.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
answer: preventDefault() stops the browser’s default action and stopPropagation() stops the event from reaching parent elements.