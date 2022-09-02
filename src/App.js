import Clock2 from "./components/Function/Clock2";
import Todos from "./components/Function/Reducer/CobaReducer";
import CobaUseEffect from "./components/Function/cobaUseEffect";

function App() {
  return (
    // <div className="App">
    //   <Comp state={state} />
    //   {/* <Home /> */}
    //   <Product />
    //   <LifeCycleComp />
    // </div>
    // <LifeCycleComp />
    // <Clock />
    <>
      <Clock2 />
      <Todos />
      <CobaUseEffect />
    </>
  );
}

export default App;
