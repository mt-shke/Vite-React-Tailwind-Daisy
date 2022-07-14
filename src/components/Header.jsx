const Header = () => {
    return (
        <div>
            <div className="text-6xl text-red-600">Coo</div>

            <article className="px-8 bg-warning">
                <button class="btn btn-primary opacity-40">Button</button>
                <button class="btn w-64 rounded-full">Button</button>

                <button class="btn btn-primary">One</button>
                <button class="btn btn-secondary">Two</button>
                <button class="btn btn-accent btn-outline">Three</button>

                <button class="btn rounded-full">One</button>
                <button class="btn rounded-none px-16 text-yellow-200 bg-error">
                    Two
                </button>
            </article>
        </div>
    );
};
export default Header;
