import getBoxShadowValue from "../../../utils/getBoxShadowValue";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ModalResult({ closeModal }) {
  const shadowValues = useSelector((state) => state.shadows);
  const boxValues = useSelector((state) => state.boxProperties);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => (document.body.style.overflowY = "auto");
  }, []);

  let runningAnimation = false;
  function handleCopy(e) {
    if (!runningAnimation) {
      runningAnimation = true;
      e.target.textContent = "Copied !";

      setTimeout(() => {
        e.target.textContent = "Copy";
        runningAnimation = false;
      }, 1250);
    }

    navigator.clipboard.writeText(
      `
      shadow-box: ${getBoxShadowValue(shadowValues)}
      border-radius: ${boxValues[0].value}px;
      height: ${boxValues[1].value}px;
      width: ${boxValues[2].value}px;
      color: ${boxValues[3].value};
       `
    );
  }
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
      >
        <div className="flex items-end mb-5">
          <p className="font-semibold mr-5">Here is your code 🎉</p>
          <button
            onClick={handleCopy}
            className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded"
          >
            Copy
          </button>
          <button
            onClick={closeModal}
            className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
          >
            Close
          </button>
        </div>
        <div className="bg-gray-100 px-4 py-4 flex flex-col gap-2">
          <p>
            <span className="font-semibold text-md">Box-shadow : </span>
            <span> {getBoxShadowValue(shadowValues)}</span>
          </p>
          <p>
            <span className="font-semibold text-md">Border-radius : </span>
            <span> {boxValues[0].value}px;</span>
          </p>
          <p>
            <span className="font-semibold text-md">Height : </span>
            <span> {boxValues[1].value}px;</span>
          </p>
          <p>
            <span className="font-semibold text-md">Width : </span>
            <span> {boxValues[2].value}px;</span>
          </p>
          <p>
            <span className="font-semibold text-md">Background-color : </span>
            <span> {boxValues[3].value};</span>
          </p>
        </div>
      </div>
    </div>
  );
}
