import { CustomRouter } from "./Router/CustomRouter";


function App() {
  const routerConfig = [{
    path: "/",
    component: <div>Home page</div>
  },
  {
    path: "/test",
    component: <div>Test</div>,
  }]

  return (
    <div><CustomRouter config={routerConfig}/></div>
  );
}

export default App;
