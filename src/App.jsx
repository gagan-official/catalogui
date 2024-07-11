import { useContext } from "react";
import "./App.css";
import ChartComp from "./components/ChartComp/ChartComp";
import Menubar from "./components/Menubar/Menubar";
import { Context } from "./context/ContextComp";

function App() {
  const amount = 63179.71;
  const { fullscreen } = useContext(Context);

  const fullscreenBlur = fullscreen ? "transition-all blur-md" : ""

  return (
    <>
      <h1
        className={`amountHead ${fullscreenBlur}`}
      >
        {" "}
        {amount.toLocaleString()} <span className="amountLabel">USD</span>{" "}
      </h1>
      <h6 className={`subAmt ${fullscreenBlur}`}>
        + 2,161.42 (3.54%)
      </h6>
      <Menubar
        data={dashboardMenuData}
        startVal={2}
        containerClassName={`[border-bottom-width:--marginBorderBottom] border-[--borderColor] ${fullscreenBlur}`}
      />
      <ChartComp />
    </>
  );
}

const dashboardMenuData = [
  {
    id: 1,
    name: "Summary",
    url: "/summary",
  },
  {
    id: 2,
    name: "Chart",
    url: "/chart",
  },
  {
    id: 3,
    name: "Statistics",
    url: "/statistics",
  },
  {
    id: 4,
    name: "Analytics",
    url: "/analytics",
  },
  {
    id: 5,
    name: "Settings",
    url: "/settings",
  },
];

export default App;
