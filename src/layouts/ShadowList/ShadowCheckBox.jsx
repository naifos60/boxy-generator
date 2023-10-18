import { useDispatch, useSelector } from "react-redux";
import { updateCheckBox } from "../../features/shadows";

export default function ShadowCheckBox({ name, shadowId }) {
  const checkBoxShadows = useSelector((state) =>
    state.shadows.find((shadow) => shadow.id === shadowId)
  );
  const dispatch = useDispatch();

  return (
    <>
      <input
        onChange={() => dispatch(updateCheckBox({ shadowId, name }))}
        type="checkbox"
        checked={checkBoxShadows[name]}
        id={`checkbox-${name}-${shadowId}`}
        className="h-4 w-4 border-gray-300 rounded mr-2"
      />
      <label
        className="leading-4 mr-5"
        htmlFor={`checkbox-${name}-${shadowId}`}>
        {name.charAt(0).toUpperCase() + name.slice(1) }
      </label>
    </>
  );
}
