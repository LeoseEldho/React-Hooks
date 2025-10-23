import UseCounter from '../Hooks/UseCounter'

function CounterCustom() {
const [count,increment,reset,decremnt]=UseCounter()
  return (
    <div>
    <h3>{count}</h3>
      <button onClick={increment}>Increment </button>
      <button onClick={reset}>Reset</button>
      <button onClick={decremnt}>Decremnt</button>
    </div>
  )
}

export default CounterCustom
