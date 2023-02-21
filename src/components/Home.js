import React, { useState } from "react";
import Loading from "./Loading";

const Home = () => {
    const [fullName, setFullName] = useState('');
    const [currentPosition, setCurrentPosition] = useState('');
    const [currentLength, setCurrentLength] = useState(1);
    const [currentTechnologies, setCurrentTechnologies] = useState('');
    const [headshot, setHeadshot] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            fullName,
            currentPosition,
            currentLength,
            currentTechnologies,
            headshot,
            loading
        });
        setLoading(true);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='app'>
            <h1>Конструктор Резюме</h1>
            <p>Создайте резюме с помощью ChatGPT за несколько секунд</p>
            <form
                onSubmit={handleFormSubmit}
                method='POST'
                encType='multipart/form-data'
            >
                <label htmlFor='fullName'>Введите ваше полное имя</label>
                <input
                    type='text'
                    required
                    name='fullName'
                    id='fullName'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <div className='nestedContainer'>
                    <div>
                        <label htmlFor='currentPosition'>Текущее место работы</label>
                        <input
                            type='text'
                            required
                            name='currentPosition'
                            className='currentPosition'
                            value={currentPosition}
                            onChange={(e) => setCurrentPosition(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='currentLength'>Продолжительность работы</label>
                        <input
                            type='number'
                            required
                            name='currentLength'
                            className='currentInput'
                            value={currentLength}
                            onChange={(e) => setCurrentLength(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='currentTechnologies'>Используемые технологии</label>
                        <input
                            type='text'
                            required
                            name='currentTechnologies'
                            className='currentTechnologies'
                            value={currentTechnologies}
                            onChange={(e) => setCurrentTechnologies(e.target.value)}
                        />
                    </div>
                </div>
                <label>Загрузите ваше фото</label>
                <input
                    type='file'
                    name='photo'
                    required
                    id='photo'
                    accept='image/x-png, image/jpeg'
                    onChange={(e) => setHeadshot(e.target.files[0])}
                />
                <button>СОЗДАТЬ РЕЗЮМЕ</button>
            </form>
        </div>
    );
};

export default Home;
