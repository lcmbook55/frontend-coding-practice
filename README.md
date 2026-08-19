# Frontend Coding Practice

A structured practice log for frontend engineering interview preparation — covering algorithmic coding tests, frontend technical concepts, and hands-on UI implementation challenges.

I'm building this repository as part of my preparation for frontend engineering roles in the US, with the goal of strengthening JavaScript fundamentals from the ground up, developing consistent problem-solving habits, and building confidence for both coding tests and technical interviews.

## Schedule

- Wednesday & Friday
- 1 problem per session (2 problems per week)

## Structure

### `coding-test`

JavaScript algorithm and data structure practice.

Topics covered:

- Arrays
- Strings
- Loops
- Sorting
- Map / Set
- Basic problem solving

Each problem is organized by date, then by problem name in kebab-case.

```text
coding-test/
└── 2026/
    └── 08/
        └── 08-19-2026/
            ├── find-max-number/
            │   ├── README.md
            │   ├── solution.js
            │   └── solution.test.js
            │
            └── remove-duplicates/
                ├── README.md
                ├── solution.js
                └── solution.test.js
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

## Template

To avoid repeating the same folder/file setup for every new problem, this repo uses a `_template` folder.

```text
_template/
├── solution.js       # Solution code (exported via module.exports)
├── solution.test.js  # Test file (Jest)
└── README.md         # Problem description, approach, and retrospective
```

### Usage

Run the following command to automatically copy the template into today's date folder:

```bash
npm run new --name=problem-name-in-kebab-case
```

Example:

```bash
npm run new --name=two-sum
```

→ Creates `coding-test/2026/08/08-20-2026/two-sum/` with `solution.js`, `solution.test.js`, and `README.md`.

### Notes

- `--name` should be written in kebab-case (e.g. `find-max-number`)
- The date folder is generated automatically based on `$(date +%m-%d-%Y)`, so there's no need to create it manually
- See `scripts.new` in `package.json` for the underlying script definition

## Difficulty

Practice starts from **Level 0** and gradually increases in difficulty, focusing on building strong fundamentals before moving on to more advanced problems.
