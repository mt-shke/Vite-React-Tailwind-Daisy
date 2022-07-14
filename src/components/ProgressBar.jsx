import { useState } from "react";

const ProgressBar = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <button
                onClick={() => setValue((p) => (p <= 10 ? 0 : p - 10))}
                className="bg-warning px-4 py-4 rounded-md border-black border-[1px] text-white font-semibold text-lg"
            >
                Minus
            </button>
            <progress class="progress w-56" value={value} max="100"></progress>
            <button
                onClick={() => setValue((p) => p + 10)}
                className="btn bg-warning"
            >
                Plus
            </button>
        </div>
    );
};
export default ProgressBar;
