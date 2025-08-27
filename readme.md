## Question and Answer:

### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

### Answer:
The differences between these query methods firstly getElementById, this is used as a method when have to find single, specific HTML element by its unique ID attribute, its perfect for those section which will be used for one single time. Then the getElementsByClassName, this is used for  when a collection of elements that share the smae class name.This is useful for when a single purpose done by multiple elements. Lastly, the querySelector / querySelectorAll, these are used for find the elements based on CSS selectors.Here, querySelector finds and returns the first element that matches the selector.But querySelectorAll finds and returns all elements that match the selector. It returns a static NodeList. In case of random class sets as a beginner queryselectorAll is the best choice.

### 2. How do you **create and insert a new element into the DOM**?

### Answer:
To create and insert a new element into the DOM we have to use document.createElement() and create a new div. After that insert them as innerHTML. Then append it to the desired section. 

### 3. What is **Event Bubbling** and how does it work?

### Answer:
Event Bubbling is DOM term. In this method when a event happen it will go one step up events parent node to the root. It works step by step upward to the root of the event. Like, If user click a button it will goes root of the button and get the job done.

### 4. What is **Event Delegation** in JavaScript? Why is it useful?

### Answer:
Event delegation process is about putting one event listener on the parent element to handle all the events that bubble up from its children.In this way we don't have to goes upward step by step then grab the element. In delegation process we will able to grab the item by its parentnode.

### 5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Answer:
The difference are the preventDefault method stops the default browser action for an event. On the other hand stopPropagation method stops the event from bubbling up the DOM tree.

---


- 📂 **GitHub Repository** https://github.com/am-mahmud/emergency-hotline
- 🌐 **Live Link** https://am-mahmud.github.io/emergency-hotline/

---

