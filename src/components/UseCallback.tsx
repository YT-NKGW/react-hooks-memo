import { useCallback, memo, useState } from 'react'

// useCallbackの構文
// useCallback(コールバック関数, 依存配列)

type ChildPropsType = {
  callback: () => void
  callbackDepCount: () => void
  noCallback: () => void
}

const MemoChild = memo(({ callback, callbackDepCount, noCallback }: ChildPropsType) => {
  return (
    <>
      <h3>MemoChild</h3>
      <button onClick={callback}>callback</button>
      <button onClick={callbackDepCount}>callbackDepCount</button>
      <button onClick={noCallback}>noCallback</button>
    </>
  )
})

const NoMemoChild = memo(({ callback, callbackDepCount, noCallback }: ChildPropsType) => {
  return (
    <>
      <h3>NoMemoChild</h3>
      <button onClick={callback}>callback</button>
      <button onClick={callbackDepCount}>callbackDepCount</button>
      <button onClick={noCallback}>noCallback</button>
    </>
  )
})

const UseCallback = () => {
  const [count, setCount] = useState(0)
  const callback = useCallback(() => {
    console.log('Render callback function')
  }, [])
  const callbackDepCount = useCallback(() => {
    console.log('Render callbackDepCount function')
    console.log(count)
  }, [count])
  const noCallback = () => {
    console.log('Render noCallback function')
  }
  const incrementCount = () => {
    setCount((currentCount) => currentCount + 1)
  }

  return (
    <>
      <h2>useCallback</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment count</button>
      <MemoChild callback={callback} callbackDepCount={callbackDepCount} noCallback={noCallback} />
      <NoMemoChild callback={callback} callbackDepCount={callbackDepCount} noCallback={noCallback} />
      <p>See browser console</p>
      <p>
        <a href="https://github.com/YT-NKGW/react-hooks-memo/blob/main/src/components/UseCallback.tsx">Source code</a>
      </p>
    </>
  )
}

export default UseCallback
