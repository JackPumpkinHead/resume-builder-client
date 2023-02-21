import React from "react";
import ErrorPage from "./ErrorPage";

const Resume = ({ result }) => {
    if (JSON.stringify(result) === "{}") {
        return <ErrorPage />;
    }

    const handlePrint = () => alert("Успешно!");

    return (
        <>
            <button onClick={handlePrint}>Распечатать страницу</button>
            <main className='container'>
                <p>Привет!</p>
            </main>
        </>
    )
}

export default Resume;
