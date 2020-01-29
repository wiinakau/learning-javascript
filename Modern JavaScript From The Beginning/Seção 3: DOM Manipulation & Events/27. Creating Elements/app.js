// Create new element li
li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Creat text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element link
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';

// Add attribute
link.setAttribute('href', '#');

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

