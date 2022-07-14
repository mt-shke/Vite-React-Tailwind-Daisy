import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import SelectInput from "./components/SelectInput";
import ProgressBar from "./components/ProgressBar";

function App() {
    return (
        <div className="App">
            <p className="btn px-16 font-bold">Hello</p>
            <p>This is my first vite react tailwind daisy ui app, coooool</p>
            <Header />
            <Modal />
            <SelectInput />
            <ProgressBar />
        </div>
    );
}

export default App;
