# Frontend Coding Practice

A structured practice log for frontend engineering interview preparation — covering algorithmic coding tests, frontend technical concepts, and hands-on UI implementation challenges.

I'm building this repository as part of my preparation for frontend engineering roles, with the goal of strengthening JavaScript fundamentals from the ground up, developing consistent problem-solving habits, and building confidence for both coding tests and technical interviews.

## Structure

### `coding-test`

JavaScript coding test and algorithm practice.

Problems are mainly solved on platforms such as Programmers and organized by date and problem name.

Topics include:

- Input / Output
- Arrays
- Strings
- Loops
- Conditional statements
- Sorting
- Map / Set
- Basic algorithms
- Problem-solving patterns

Each problem folder contains:

```text
problem-name/
├── README.md
└── solution.js
```

- `README.md` — Problem description, approach, and retrospective
- `solution.js` — Actual JavaScript solution submitted for the problem

Example:

```text
coding-test/
└── 2026/
    └── 09/
        └── 09-02-2026/
            ├── print-a-string/
            │   ├── README.md
            │   └── solution.js
            │
            └── print-a-and-b/
                ├── README.md
                └── solution.js
```

### `frontend-interview`

Frontend technical interview preparation and concept review.

Topics covered:

- JavaScript fundamentals
- Browser internals
- React
- Web platform APIs
- Accessibility
- Frontend architecture

```text
frontend-interview/
├── event-loop/
├── closure/
└── browser-rendering/
```

### `frontend-challenges`

Hands-on frontend implementation practice — building real UI components and features rather than solving algorithm problems.

```text
frontend-challenges/
├── modal-component/
├── debounce-search/
├── accessible-tabs/
├── todo-list/
└── fetch-user-list/
```

## Coding Test Template

To avoid repeating the same folder and file setup for every problem, this repository uses a `_template` folder.

```text
_template/
├── README.md
└── solution.js
```

### `README.md`

Used to record:

- Problem title
- Source
- Difficulty
- Time spent
- Problem description
- Approach
- What I learned / retrospective

### `solution.js`

Contains the actual JavaScript solution used to solve the problem.

For platform-based problems such as Programmers, the submitted solution is saved as-is whenever possible.

## Usage

Run:

```bash
npm run new --name=problem-name-in-kebab-case
```

Example:

```bash
npm run new --name=print-a-string
```

This automatically creates a new problem folder inside today's date directory.

```text
coding-test/2026/09/09-02-2026/print-a-string/
├── README.md
└── solution.js
```

### Notes

- Problem folder names use kebab-case.
- Date folders use the `MM-DD-YYYY` format.
- Date folders are generated automatically using `$(date +%m-%d-%Y)`.
- Coding test solutions are written primarily in JavaScript.

## Difficulty

Practice starts from **Level 0** and gradually increases in difficulty.

The current focus is not only solving problems correctly, but also understanding:

- How input values are received
- How output should be formatted
- How JavaScript values and data types behave
- How to break a problem into smaller steps
- How to explain the reasoning behind a solution

The difficulty will gradually increase as these fundamentals become more comfortable.
