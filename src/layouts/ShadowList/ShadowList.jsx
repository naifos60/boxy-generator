import { useDispatch, useSelector } from "react-redux";
import { addShadow } from "../../features/shadows";
import Shadow from "./Shadow";

export default function ShadowList() {
  const shadows = useSelector((state) => state.shadows);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="font-bold text-lg">Customize shadows</p>
        <button
          onClick={() => dispatch(addShadow(shadows.id))}
          className="py-1 px-3 text-sm text-white rounded bg-blue-600 focus:ring-4 focus:ring-offset-2 hover:bg-blue-700 cursor-pointer"
        >
          Add a shadow
        </button>
      </div>
      <ul>
        {shadows.map((shadow, index) => (
          <Shadow key={shadow.id} panelNumber={index + 1} shadow={shadow} />
        ))}
      </ul>
    </div>
  );
}
