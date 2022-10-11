import { useEffect, useState } from 'react'

// useEffectの構文
// useEffect(副作用, 依存配列)

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount((currentCount) => currentCount + 1)
  const decrement = () => setCount((currentCount) => currentCount - 1)

  useEffect(() => {
    console.log(1, '依存配列なし: Componentがレンダーされる度に副作用を実行')
  })

  useEffect(() => {
    console.log(2, '依存配列あり: 副作用に依存する値(count)が更新した時だけ、副作用を実行')
  }, [count])

  useEffect(() => {
    console.log(3, '依存配列が空: 副作用をレンダー後に一度だけ実行')
  }, [])

  useEffect(() => {
    return () => {
      console.log(4, 'クリーンアップ関数: Componentがアンマウント、もしくは副作用が再実行した時に実行')
    }
  })

  return (
    <>
      <h2>useEffect</h2>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>See browser console</p>
      <p>
        <a href="https://github.com/YT-NKGW/react-hooks-memo/blob/main/src/components/UseEffect.tsx">Source code</a>
      </p>
    </>
  )
}

export default UseEffect
