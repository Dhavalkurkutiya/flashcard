export type Flashcard = {
  id: number;
  question: string;
  answer: string;
};

export const flashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and can be re-declared. let and const are block-scoped. let allows reassignment, while const does not (though object contents can be modified).",
  },
  {
    id: 2,
    question: "What is closure in JavaScript?",
    answer:
      "A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.",
  },
  {
    id: 3,
    question: "What is the difference between == and ===?",
    answer:
      "== compares values with type coercion, while === compares both value and type strictly.",
  },
  {
    id: 4,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution.",
  },
  {
    id: 5,
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the real DOM used by frameworks like React to optimize updates efficiently.",
  },
  {
    id: 6,
    question: "What is the difference between null and undefined?",
    answer:
      "undefined means a variable has been declared but not assigned. null is an intentional assignment representing no value.",
  },
  {
    id: 7,
    question: "What is useEffect used for in React?",
    answer:
      "useEffect is used to handle side effects like API calls, subscriptions, or DOM updates in functional components.",
  },
  {
    id: 8,
    question: "What is a Promise in JavaScript?",
    answer:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation.",
  },
  {
    id: 9,
    question: "What is event delegation?",
    answer:
      "Event delegation is a technique where a parent element handles events for its child elements using event bubbling.",
  },
  {
    id: 10,
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code runs line by line. Asynchronous code allows tasks to run in the background without blocking execution.",
  },
];
