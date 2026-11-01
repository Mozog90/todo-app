# White Box Testing - Todo List

AD361 Learning Practice: White Box Testing

This is the Todo app provided for the assignment. I added tests for the functions in `src/todoUtils.ts`. All six tests are in one file, `src/todoUtils.test.ts`.

## Running the project

```bash
npm install
npm run dev
```

## Running the tests

```bash
npm test
npm run coverage
```

The test file has three suites:

- **createTodo (statement coverage):** Checks text, starting `done` value, and numeric ID.
- **addTodo (branch coverage):** Checks blank input and valid input.
- **countDone (loop coverage):** Checks zero, one, and several todos.

**Results:** 6 tests passed. Coverage for `todoUtils.ts` was 100% for statements, branches, functions, and lines.

I also tried skipping the blank-input test to see how it affected branch coverage, then restored it.

## AI transparency

AI helped organize the tests and project documentation.
