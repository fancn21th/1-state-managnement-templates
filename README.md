# state managnement templates repo for large scale react projects

## How to run

### depdendencies

you can install browser extensions as below for better debugging experience

- [redux-devtools](https://github.com/reduxjs/redux-devtools)
- [tanstack-query-devtools](https://tanstack.com/query/latest/docs/framework/react/devtools)

### start dev server

```bash
npm install
npm run dev
```

## Problems

### Big Ball of Mud When Application Get Bigger and Bigger

- hard to understand (biz logic scattered everywhere)
- hard to maintain (tech implementation mess)

### Why it always happens

- the unit of application

  we normally leverage the default mindset of react (component based thinking) to design the application, but when the application get bigger and bigger, this mindset will lead to "big ball of mud" anti-pattern.

  - state / biz logics scattered across multiple components
  - effect chains grows inevitably
  - biz logic also mixed with ui code
  - regret to become as a front-end developer

  ```tsx
  // the unit example
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

> so we want to have an universal state management application template for large scale react projects across multiple teams with hiding different programming habits deep inside of each detailed step

- starts with types and interfaces
  > deeply understand how server state are designed

  good or bad, you can not deny the source of truth is from behind (API)

- define stores (zustand, recoil, jotai, etc)
  > you can think of store design like OOAD (object oriented analysis and design)

  but you can decide the real source of truth is reshaped in client side

- ui components design

  it is twisted with hooks design

- hooks design
  > hooks are warpper of stores and biz logics and dedicated for ui components

  - one hook per component

  - it is twisted with ui components design

## References

### Best Practices

[5 Zustand BEST Practices in 5 Minutes](https://www.youtube.com/watch?v=6tEQ1nJZ51w)

- Only Export Custom Hooks
- Atomic, Stable Selectors
- Separate Actions from State
- Model Actions as Events
- Using Multiple Stores
  [keep-the-scope-of-your-store-small](https://tkdodo.eu/blog/working-with-zustand#keep-the-scope-of-your-store-small)
