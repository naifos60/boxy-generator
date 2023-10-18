import { useDispatch } from "react-redux";
import { updateShadowValue } from "../../features/shadows";

export default function ShadowColorPicker({ inputData, shadowId }) {
  const dispatch = useDispatch();

  function handleInput(e) {
    dispatch(
      updateShadowValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
        shadowId
      })
    );
  }
  return (
    <div className="mt-3 mb-12">
      <p>{inputData.name} </p>
      <div className="flex justify-between items-baseline">
        <div className="flex flex-grow mt-2">
          <input
            value={inputData.value}
            onChange={handleInput}
            className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
            type="text"
          /><input
            value={inputData.value}
            onChange={handleInput}
            className="cursor-pointer h-[40px]"
            type="color"
          />
        </div>    
      </div>
    </div>
  );
}
