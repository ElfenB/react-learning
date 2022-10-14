# Improvements Part 1

## Checklist

- [x] use the eslint and prettier settings from biobase also in your project -> your code will look more similar with the biobase code (like lines end with semicolon)

- [ ] don't use technologies which are not present in biobase (like sass)

- [ ] do not use default exports, so all imports are named imports

- [ ] define the type of the props in a type called Props just before the function using it (so one can easily see which fields are expected in props)

- [ ] use type instead of interface to define types (as this is the way we do it in biobase)

- [ ] try to let an empty line between blocks of code which are logically related

- [ ] deconstruct the props in function's arguments (I mean "export function Component({a,b,c}:Props)")

- [ ] when you define a field in a type which can also be undefined you do not need to add "| undefined" if you have the question mark after its name(like "optField?: string" is enough instead of "optField?: string | undefined")

- [ ] the types also start with uppercase

- [ ] if you already know material-ui you can add it to your project and use it instead of plain html (but maybe this is too early)

- [ ] when you create a variable in a function which define a function we need to wrap the function in useCallback()

- [ ] you can replace "{ var !== undefined && \<Comp/>}" which "{var && \<Comp/>}"

- [ ] we have all the imports in one group (no empty lines in between)

- [ ] don't define a function in a function (see 5/Five.tsx)
