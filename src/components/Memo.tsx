import { memo, useState } from 'react'

// Memoの構文
// memo(関数コンポーネント)

type MemoChildType = {
  count: number
}

const MemoChild = memo(({ count }: MemoChildType) => {
  console.log('Render MemoChild component')

  return (
    <>
      <h3>MemoChild component</h3>
      <p>Memo child count: {count}</p>
    </>
  )
})

const NoMemoChild = ({ count }: MemoChildType) => {
  console.log('Render NoMemoChild component')

  return (
    <>
      <h3>NoMemoChild component</h3>
      <p>No memo child count: {count}</p>
    </>
  )
}

const Memo = () => {
  const [count, setCount] = useState(0)
  const [countToMemoChild, setCountToMemoChild] = useState(0)
  const [countToNoMemoChild, setCountToNoMemoChild] = useState(0)
  const incrementCount = () => {
    setCount((currentCount) => currentCount + 1)
  }
  const incrementMemoChildCount = () => {
    setCountToMemoChild((currentCount) => currentCount + 1)
  }
  const incrementNoMemoChildCount = () => {
    setCountToNoMemoChild((currentCount) => currentCount + 1)
  }

  return (
    <>
      <h2>memo</h2>
      <button onClick={incrementCount}>Increment count</button>
      <button onClick={incrementMemoChildCount}>Increment memo child count</button>
      <button onClick={incrementNoMemoChildCount}>Increment no memo child count</button>
      <p>Count: {count}</p>
      <MemoChild count={countToMemoChild} />
      <NoMemoChild count={countToNoMemoChild} />
      <p>See browser console</p>
      <p>
        <a href="https://github.com/YT-NKGW/react-hooks-memo/blob/main/src/components/Memo.tsx">Source code</a>
      </p>
    </>
  )
}

export default Memo
