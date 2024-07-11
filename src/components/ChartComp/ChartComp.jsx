import { RiCollapseDiagonalLine, RiExpandDiagonalLine } from "react-icons/ri";
import CustomButton from "../CustomButton/CustomButton";
import { FiPlusCircle } from "react-icons/fi";
import Menubar from "../Menubar/Menubar";
import LineChart from "./LineChart";
import { useContext, useState } from "react";
import { Context } from "../../context/ContextComp";

function ChartComp() {
  const [timeFrame, setTimeFrame] = useState("1w");
  const { fullscreen, setfullscreen } = useContext(Context);

  const iconClassName = "text-xl";

  // useEffect(() => {
  //   // setmargin("my-0");
  //   let timer;
  //   if (fullscreen) {
  //     setmargin("my-[10%]");
  //     // timer = setTimeout(() => {
  //     // }, 100);
  //   } else setmargin("my-0");

  //   // return () => {
  //   //   clearTimeout(timer);
  //   // };
  // }, [fullscreen]);

  return (
    <section
      className={`${
        fullscreen ? "transition-all fixed flex bg-[#fff9]" : ""
      } inset-0`}
    >
      <div
        className={`innerCont transition-all w-full max-w-[1216px] mx-auto ${
          fullscreen ? "my-[10%] px-6 lg:p-0" : "my-0"
        }`}
      >
        <div className="chartOptions flex flex-col md:flex-row justify-between gap-4">
          <div className="buttonsCont flex gap-7">
            <CustomButton onClick={() => setfullscreen(!fullscreen)}>
              {fullscreen ? (
                <>
                  <RiCollapseDiagonalLine className={iconClassName} /> Collapse
                </>
              ) : (
                <>
                  <RiExpandDiagonalLine className={iconClassName} /> Fullscreen
                </>
              )}{" "}
            </CustomButton>
            <CustomButton>
              <FiPlusCircle className={iconClassName} /> Compare
            </CustomButton>
          </div>
          <Menubar
            data={subMenuData}
            startVal={3}
            menuStyleType="solid"
            onClick={(name) => setTimeFrame(name)}
          />
        </div>

        <LineChart timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
      </div>
      {/* <LineChart timeFrame={timeFrame} setTimeFrame={setTimeFrame} /> */}
    </section>
  );
}

const subMenuData = [
  {
    id: 1,
    name: "1d",
  },
  {
    id: 2,
    name: "3d",
  },
  {
    id: 3,
    name: "1w",
  },
  {
    id: 4,
    name: "1m",
  },
  {
    id: 5,
    name: "6m",
  },
  {
    id: 6,
    name: "1y",
  },
  {
    id: 7,
    name: "max",
  },
];

export default ChartComp;
