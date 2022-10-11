import { useState } from 'react'

// useStateの構文
// const [state, state更新関数] = useState(stateの初期値)

const UseState = () => {
  // プリミティブ
  const [count, setCount] = useState(0)
  const increment = () => setCount((currentCount) => currentCount + 1)
  const decrement = () => setCount((currentCount) => currentCount - 1)

  // オブジェクト
  const [device, setDevice] = useState({ iphone: 0, android: 0 })
  const addIPhone = () => {
    setDevice((currentDevice) => ({
      ...currentDevice,
      iphone: currentDevice.iphone + 1,
    }))
  }
  const addAndroid = () => {
    setDevice((currentDevice) => ({
      ...currentDevice,
      android: currentDevice.android + 1,
    }))
  }
  // 以下関数だとstateが更新されない。新しいオブジェクトをdispatchに渡す必要がある
  const wrongAddIPhone = () => {
    device.iphone = device.iphone + 1
    setDevice(device)
  }
  const wrongAddAndroid = () => {
    device.android = device.android + 1
    setDevice(device)
  }

  // 配列
  const [macDevices, setMacDevices] = useState([{ name: 'Mac book' }])
  const newDevice = () => (Math.random() > 0.5 ? 'Mac book' : 'iPhone')
  const addDevice = () => {
    setMacDevices((currentMacDevices) => [...currentMacDevices, { name: newDevice() }])
  }
  const deleteDevice = (index: number) => {
    setMacDevices((currentMacDevices) => currentMacDevices.filter((_, i) => i !== index))
  }
  // オブジェクトと同様に以下関数だとstateが更新されない。新しい配列をdispatchに渡す必要がある
  const wrongAddDevice = () => {
    macDevices.push({ name: newDevice() })
    setMacDevices(macDevices)
  }
  const wrongDeleteDevice = (index: number) => {
    macDevices.filter((_, i) => i !== index)
    setMacDevices(macDevices)
  }

  return (
    <>
      <h2>useState</h2>
      <>
        <h3>プリミティブ</h3>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </>
      <>
        <h3>オブジェクト</h3>
        <p>iPhone: {device.iphone}</p>
        <p>Android: {device.android}</p>
        <button onClick={addIPhone}>Add iPhone</button>
        <button onClick={addAndroid}>Add android</button>
        <button onClick={wrongAddIPhone}>Wrong add iPhone</button>
        <button onClick={wrongAddAndroid}>Wrong add android</button>
      </>
      <>
        <h3>配列</h3>
        <button onClick={addDevice}>Add random device</button>
        <button onClick={wrongAddDevice}>Wrong add random device</button>
        <ul>
          {macDevices.map((device, index) => (
            <li key={index}>
              {device.name}
              <button onClick={() => deleteDevice(index)}>Delete</button>
              <button onClick={() => wrongDeleteDevice(index)}>Wrong delete</button>
            </li>
          ))}
        </ul>
      </>
      <p>
        <a href="https://github.com/YT-NKGW/react-hooks-memo/blob/main/src/components/UseState.tsx">Source code</a>
      </p>
    </>
  )
}

export default UseState
