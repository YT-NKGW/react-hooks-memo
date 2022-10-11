import { useState, useEffect } from 'react'

import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import './App.css'

function App() {
  const RenderableComponents = {
    [UseState.name]: { component: <UseState /> },
    [UseEffect.name]: { component: <UseEffect /> },
  } as const
  type RenderableComponentType = typeof RenderableComponents[keyof typeof RenderableComponents]

  const [renderableComponent, setRenderableComponents] = useState<RenderableComponentType>(
    RenderableComponents.UseState
  )

  useEffect(() => {
    setRenderableComponents(renderableComponent)
  }, [renderableComponent])

  const updateRenderComponent = (component: RenderableComponentType) => {
    if (component === renderableComponent) return

    setRenderableComponents(component)
  }

  return (
    <div className="App">
      <h1>React hooks memo</h1>
      <p>
        See <a href="https://github.com/YT-NKGW/react-hooks-memo">this repository</a>
      </p>
      <p>
        {Object.keys(RenderableComponents).map((component) => (
          <a key={component} onClick={() => updateRenderComponent(RenderableComponents[component])}>
            {component}{' '}
          </a>
        ))}
      </p>
      {renderableComponent.component}
    </div>
  )
}

export default App
