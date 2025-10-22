# state managnement templates repo for large scale react projects

## How to run

### depdendencies

[redux-devtools](https://github.com/reduxjs/redux-devtools)

[tanstack-query-devtools](https://tanstack.com/query/latest/docs/framework/react/devtools)

### start dev server

```bash
npm install
npm run dev
```


## Problem Statement

### Big Ball of Mud When Application Get Bigger and Bigger

- hard to understand (biz logic loss)
- hard to maintain (tech implementation mess)

### Why

- unit of application

  > state and biz logics scattered across multiple components
  > effect chains are complex and intertwined
  > biz logic mixed with ui code
  > hard to debug issues

  ```tsx
  const ParitalComponent = () => {
    // states
    const [count, setCount] = useState(0)

    // effects
    useEffect(() => {
      // do something
    }, [count])

    // jsxs / ui templates
    return <div>部分组件</div>
  }
  ```

## Solution Overview

### Application Template for State Management

- starts with types and interfaces
  > deeply understand how server state are designed

- define stores (zustand, recoil, jotai, etc)
  > you can think of store design like OOAD (object oriented analysis and design)

- ui components design

- hooks design
  > hooks are warpper of stores and biz logics and dedicated for ui components

  - one hook per component

## References

#### Best Practices

[5 Zustand BEST Practices in 5 Minutes](https://www.youtube.com/watch?v=6tEQ1nJZ51w)

- Only Export Custom Hooks
- Atomic, Stable Selectors
- Separate Actions from State
- Model Actions as Events
- Using Multiple Stores
  [keep-the-scope-of-your-store-small](https://tkdodo.eu/blog/working-with-zustand#keep-the-scope-of-your-store-small)
