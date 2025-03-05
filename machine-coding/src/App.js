import { Header } from "./components/Header";
import { Homepage } from "./Pages/Homepage/Homepage";
import { CustomRouter } from "./Router/CustomRouter";

function App() {
  const routerConfig = [
    {
      path: "/",
      component: <Homepage />,
    },
  ];

  return (
    <div>
      <Header />
      <CustomRouter config={routerConfig} />
    </div>
  );
}

export default App;
