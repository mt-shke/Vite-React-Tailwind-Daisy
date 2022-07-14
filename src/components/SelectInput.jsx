const SelectInput = () => {
    return (
        <div class=" w-full max-w-xs">
            <label class="label">
                <span class="label-text">Pick the best fantasy franchise</span>
                <span class="label-text-alt">Alt label</span>
            </label>
            <select class="select select-bordered">
                <option disabled selected>
                    Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
            </select>
            <label class="label">
                <span class="label-text-alt">Alt label</span>
                <span class="label-text-alt">Alt label</span>
            </label>
        </div>
    );
};
export default SelectInput;
