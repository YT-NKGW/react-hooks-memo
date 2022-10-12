import { useRef } from 'react'

// useReの構文
// const refオブジェクト = useRef(初期値)

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    if (!inputRef.current) return

    inputRef.current.focus()
  }

  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <div>
        <button onClick={focusInput}>Focus input</button>
      </div>
      <p>
        <a href="https://github.com/YT-NKGW/react-hooks-memo/blob/main/src/components/UseRef.tsx">Source code</a>
      </p>
    </>
  )
}

export default UseRef
