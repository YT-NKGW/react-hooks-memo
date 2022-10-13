import { useMemo, useState } from 'react'

// useMemoの構文
// useMemo(() => 計算ロジック, 依存配列)

const UseMemo = () => {
  const [memoCount, setMemoCount] = useState(0)
  const [nomemoCount, setNoMemoCount] = useState(0)

  const memoDoubleCount = useMemo<number>(() => {
    // 依存しているmemoCountが変更された場合のみこの関数を再レンダーする
    console.log('Render memoDoubleCount')

    return memoCount * 2
  }, [memoCount])

  const noMemoDoubleCount = () => {
    // このコンポーネントがレンダーされるたびにこの関数が再レンダーされる
    console.log('Render noMemoDoubleCount')
    return nomemoCount * 2
  }

  const incrementMemoCount = () => {
    setMemoCount((currentCount) => currentCount + 1)
  }

  const incrementNoMemoCount = () => {
    setNoMemoCount((currentCount) => currentCount + 1)
  }

  return (
    <>
      <h2>useMemo</h2>
      <div>Memo count: {memoCount}</div>
      <div>Memo double count: {memoDoubleCount}</div>
      <div>No memo count: {nomemoCount}</div>
      <div>No memo double count: {noMemoDoubleCount()}</div>
      <button onClick={incrementMemoCount}>Increment memo count</button>
      <button onClick={incrementNoMemoCount}>Increment no memo count</button>
      <p>See browser console</p>
      <p>
        <a href="https://github.com/YT-NKGW/react-hooks-memo/blob/main/src/components/UseMemo.tsx">Source code</a>
      </p>
    </>
  )
}

export default UseMemo
