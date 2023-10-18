import { useState, useEffect } from "react";
import chevron from "../../assets/chevron.svg";
import { removeShadow } from "../../features/shadows";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowRange from "./ShadowRange";
import { useDispatch } from "react-redux";
import ShadowCheckBox from "./ShadowCheckBox";

export default function Shadow({ panelNumber, shadow }) {
  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true);
    }
  }, []);
  const [toggleShadow, setToggleShadow] = useState(false);

  const dispatch = useDispatch();

  const shadowInputs = shadow.inputs.map((input, index) => {
    if (input.type === "range") {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowId={shadow.id}
        />
      );
    } else if (input.type === "color") {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowId={shadow.id}
        />
      );
    }
  });

  return (
    <li className="bg-gray-50 border-b border-gray-300 p-4">
      <button
        onClick={() => setToggleShadow(!toggleShadow)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"
      >
        <span>Shadow {panelNumber}</span>
        <img
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
          className="font-bold w-5 my-auto"
          src={chevron}
          alt=""
        />
      </button>
      {toggleShadow && (
        <>
          <div className="flex items-end px-6 pt-4">
            <ShadowCheckBox name={"active"} shadowId={shadow.id} />
            <ShadowCheckBox name={"inset"} shadowId={shadow.id} />
            <button
              onClick={() => dispatch(removeShadow(shadow.id))}
              className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
            >
              Remove
            </button>
          </div>
          <div>{shadowInputs}</div>
        </>
      )}
    </li>
  );
}
