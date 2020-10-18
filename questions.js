let questions = [
  {
    question: 'How we can get the attributes of an object in js? es: let object = { name:"bob"}',
    choice1: 'object.name',
    choice2: 'object[1]',
    choice3: 'name',
    choice4: 'object(name)',
    answer: 1
  },

  {
    question: 'When we reference at an elements by his class name what we get?',
    choice1: 'string',
    choice2: 'list',
    choice3: 'object',
    choice4: 'HTML collection',
    answer: 4
    },
  
  {
    question: "What's the difference between local and global scope?",
    choice1: 'Local scope are normal variable while the global scope require a special sintax',
    choice2: 'Local can be access only in the block of code where they are declared, while the global can be referred from everywhere in the programm',
    choice3: 'Local scope are variable, global scope are constant',
    choice4: 'There are no difference',
    answer: 2
  },
  
  {
    question: "What's the difference between a function declaration and a function expression?",
    choice1: "The declaration function dosn't acept a parameter while the expression function requiere it",
    choice2: 'The function declaration names the function while the function expression ensure that the function is anonymous',
    choice3: 'In the function declaration the "function" keyword takes places of "var" in declaring a variable. And a expression function, creates a function, in places where you would normally use a value',
    choice4: 'There are no difference',
    answer: 3
  },  

  {
    question: "What's the difference between while loop and do while loop?",
    choice1: 'Do while loop run at least one time',
    choice2: 'There are no difference',
    choice3: 'While loop is more longer to type',
    choice4: "Do while it's works only whit array",
    answer: 1
  },

  {
    question: 'How many way we have to declare a function in js?',
   choice1: '1',
   choice2: '2',
   choice3: '3',
   choice4: '4',
   answer: 3
 },

 { 
  question: 'How we can change the color of an h1 using js?',
  choice1: 'h1.style.color',
  choice2: 'h1.css.color',
  choice3: 'h1.color',
  choice4: 'h1.css.syle.color',
  answer: 1
  },

  {
  question: 'What is the correct syntax for refering to an external script called "xxx.js"?',
  choice1: '<script name="xxx.js">',
  choice2: '<script href="xxx.js">',
  choice3: '<script src="xxx.js">',
  choice4: '<script file="xxx.js">',
  answer: 3
  },
  
  { question: 'How do you make a list that lists its items with squares?',
  choice1: 'list-style: square',
  choice2: 'list: square',
  choice3: 'list-type: square' ,
  choice4: 'list-decoration: square',
  answer: 1
  },

  { question: 'Which of the following statement is false?',
  choice1: 'Absolute position is relative to the parent element with relative position',
  choice2: 'In relative position "left: 10px" means push to the left',
  choice3: 'In absolute position "left: 10px" means push to the left' ,
  choice4: 'Absolute position allow us to move the element where we want',
  answer: 3
  },
 
  { question: 'If we set a height of 100vh ..',
  choice1: 'The page is bigger than the screen',
  choice2: 'The page is 100px height',
  choice3: 'The page takes the entire space of the screen',
  choice4: 'The page is going to be responsive by itself',
  answer: 3
  },

  { question: 'What the border-box does?',
  choice1: 'Display a border',
  choice2: 'Set the total dimension of the element that we pass in the width',
  choice3: 'Set a bigger dimension respect the width',
  choice4: 'Only works with flex-box',
  answer: 2
  },

  { question: 'How do you make each word in a test start with a capital letter?',
  choice1: "You can't do that with CSS",
  choice2: 'text-transform: capitalize',
  choice3: 'text-style: capitalize' ,
  choice4: 'transfrom: capitalize',
  answer: 2
  },
  
  { question: 'How can set a variable in css?',
  choice1: 'var = name-variable',
  choice2: 'var(--name-variable)',
  choice3: '--name-variable: value' ,
  choice4: 'variable: value',
  answer: 3
  },

  {
    question: 'The HTML global attribute "contentenditable" is used to:',
    choice1: 'Return the position of the first found occurrence of content inside a string',
    choice2: 'Specifies a context menu for an element. The menu appears when a user right click on the element',
    choice3: 'Update content from the server',
    choice4: 'Specify whether the content of an element should be editable or not',
    answer: 4
  },
  
  { question: 'What the differnce between HTML and XML?',
  choice1: 'There are no difference',
  choice2: 'HTML is used to create basic structure for a webpage. XML is generally used to store text data only.',
  choice3: 'XML is used to display and how data looks. HTML is used to transport and store data.' ,
  choice4: 'XML was previous that HTML5',
  answer: 2
  },
  
  {
    question: 'What is the correct HTML for making a checkbox?',
    choice1: '<check>',
    choice2: '<input style="checkbox">',
    choice3: '<checkbox>',
    choice4: '<input type="checkbox">',
    answer: 4
  },

  { question: 'What is the correct HTML for making a drop-down menu list?',
  choice1: '<input type="dropdown">',
  choice2: '<select>',
  choice3: '<list>',
  choice4: '<input type="list"',
  answer: 2
  },

  { question: 'What is the default property display of an img?',
  choice1: 'block',
  choice2: 'inline',
  choice3: 'inline-block' ,
  choice4: 'static',
  answer: 3
  },

  {
    question: 'Wich is the correct syntax in order to collegate two or more HTML file?',
    choice1: '<a href="/page-name.html"></a>',
    choice2: '<a url="#"></a>',
    choice3: '<link url="page-name.html">' ,
    choice4: '<link href="page-name">',
    answer: 1
  },
];

export default questions;