import { useState } from "react";
import styles from "./Menubar.module.css";

// menuStyleType: "solid" / default: border
// startVal <Number>

function Menubar({ data, containerClassName, menuStyleType, startVal, onClick }) {
  const [menuID, setMenuID] = useState(startVal);
  const isSolid = menuStyleType?.includes("solid");
  const menuStyleClass = isSolid ? "solid" : "border";
  //   const activeUrl = "/chart";
  return (
    <ul
      className={`${styles.menubarCont} ${isSolid ? "!gap-1 m-0" : "my-8"} ${
        containerClassName ?? ""
      }`}
    >
      {data ? (
        data.map((items) => {
          const [id, name] = Object.keys(items);
          return (
            <li
              key={items[id]}
              className={`menuList cursor-pointer text-[--lightFontColor] ${
                styles[menuStyleClass]
              } ${menuID === items[id] ? styles.active : ""}`}
              onClick={() => {setMenuID(items[id]); onClick && onClick(items[name])}}
            >
              {items[name]}
            </li>
          );
        })
      ) : (
        <span className="text-red-500 max-w-xl">
          {" "}
          {
            "No Data Provided! Please give this component an array of object to 'data' prop that should be like this: [{ id: <Number>, something: <Stirng>, link: <Stirng> }]"
          }
        </span>
      )}
    </ul>
  );
}

export default Menubar;
