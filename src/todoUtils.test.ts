import { createTodo, addTodo, countDone } from "./todoUtils";
import type { Todo } from "./todoUtils";

describe("createTodo statement coverage", () => {
  it("creates a todo with the correct starting values", () => {
    const todo = createTodo("Buy milk");

    expect(todo.text).toBe("Buy milk");
    expect(todo.done).toBe(false);
    expect(typeof todo.id).toBe("number");
  });
});

describe("addTodo branch coverage", () => {
  it("does not add a todo when the text is blank", () => {
    const todos: Todo[] = [];
    const result = addTodo(todos, "   ");

    expect(result).toEqual([]);
  });

  it("adds a todo when the text is valid", () => {
    const todos: Todo[] = [];
    const result = addTodo(todos, "Buy milk");

    expect(result).toHaveLength(1);
    expect(result[0].text).toBe("Buy milk");
    expect(result[0].done).toBe(false);
  });
});

describe("countDone loop coverage", () => {
  it("returns zero for an empty list", () => {
    const todos: Todo[] = [];

    expect(countDone(todos)).toBe(0);
  });

  it("counts one finished todo", () => {
    const todos: Todo[] = [{ id: 1, text: "Buy milk", done: true }];

    expect(countDone(todos)).toBe(1);
  });

  it("counts finished todos in a list of several items", () => {
    const todos: Todo[] = [
      { id: 1, text: "Buy milk", done: true },
      { id: 2, text: "Walk the dog", done: false },
      { id: 3, text: "Write tests", done: true },
    ];

    expect(countDone(todos)).toBe(2);
  });
});
