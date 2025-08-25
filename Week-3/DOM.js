/*
DOM (Document Object Model)
The DOM is a programming interface (an in-memory representation) that browsers build from the HTML of a page.
The DOM is a W3C (World Wide Web Consortium) standard.

The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
When a web page is loaded, the browser creates a Document Object Model of the page.
With the object model, JavaScript gets all the power it needs to create dynamic HTML:

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page

The W3C DOM standard is separated into 3 different parts:

Core DOM - standard model for all document types
XML DOM - standard model for XML documents
HTML DOM - standard model for HTML documents

*/
/*
Selecting elements
Common selection methods
document.getElementById('id')           // single element or null
document.getElementsByClassName('c')    // live HTMLCollection (updates automatically)
document.getElementsByTagName('li')     // live HTMLCollection
document.querySelector('.card .title')  // first match using CSS selector
document.querySelectorAll('p')          // static NodeList (not live)
*/
/*
Tip: querySelector/querySelectorAll use CSS selectors and are very convenient.

Traversal
Useful properties/methods:
el.parentNode, el.children (elements only), el.childNodes (all nodes), el.firstChild, el.lastChild
el.nextSibling, el.previousSibling (nodes), and el.nextElementSibling, el.previousElementSibling (elements only)
el.closest(selector) — find nearest ancestor matching selector
el.matches(selector) — test whether element matches a selector

Reading and writing content & attributes

el.textContent — text of node (fast, safe).
el.innerText — text as rendered (expensive; affected by CSS).
el.innerHTML — parse/replace HTML inside element (powerful but risky for XSS).
el.getAttribute('data-x') / el.setAttribute('aria-hidden', 'true')
el.dataset.foo maps to data-foo
el.classList — convenient class manipulations:
EXAMPLE
el.classList.add('is-active')
el.classList.toggle('hidden')

Attribute vs property:
input.value (property reflects current value)
input.getAttribute('value') (attribute is initial HTML value)
*/

/*
Creating, inserting, removing elements
Preferred DOM methods (safe, avoids parsing HTML):

EXAMPLE
const li = document.createElement('li')
li.textContent = 'New item'
li.setAttribute('data-id', '42')
parent.appendChild(li)        // add as last child
parent.prepend(li)           // add as first child
parent.insertBefore(li, ref) // insert before ref
li.remove()                  // remove element
*/


































