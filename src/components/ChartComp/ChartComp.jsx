import { RiExpandDiagonalLine } from "react-icons/ri";
import CustomButton from "../CustomButton/CustomButton";
import { FiPlusCircle } from "react-icons/fi";
import Menubar from "../Menubar/Menubar";

function ChartComp() {
  const iconClassName = "text-xl";
  return (
    <section>
      <div className="chartOptions flex flex-col md:flex-row justify-between gap-4">
        <div className="buttonsCont flex gap-7">
          <CustomButton>
            <RiExpandDiagonalLine className={iconClassName} /> Fullscreen
          </CustomButton>
          <CustomButton>
            <FiPlusCircle className={iconClassName} /> Compare
          </CustomButton>
        </div>
        <Menubar data={subMenuData} startVal={3} menuStyleType="solid" />
      </div>
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
