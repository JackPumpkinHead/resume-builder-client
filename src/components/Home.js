import React, { useState } from "react";
import Loading from "./Loading";

const Home = () => {
    const [fullName, setFullName] = useState('');
    const [currentPosition, setCurrentPosition] = useState('');
    const [currentLength, setCurrentLength] = useState(1);
    const [companyInfo, setCompanyInfo] = useState([{ name: "", position: "" }]);
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

    //👇🏻 updates the state with user's input
    const handleAddCompany = () =>
        setCompanyInfo([...companyInfo, { name: "", position: "" }]);

//👇🏻 removes a selected item from the list
    const handleRemoveCompany = (index) => {
        const list = [...companyInfo];
        list.splice(index, 1);
        setCompanyInfo(list);
    };
//👇🏻 updates an item within the list
    const handleUpdateCompany = (e, index) => {
        const { name, value } = e.target;
        const list = [...companyInfo];
        list[index][name] = value;
        setCompanyInfo(list);
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

                <h3>Предыдущие места работы</h3>
                {companyInfo.map((company, index) => (
                    <div className='nestedContainer' key={index}>
                        <div className='companies'>
                            <label htmlFor='name'>Название места работы</label>
                            <input
                                type='text'
                                name='name'
                                required
                                onChange={(e) => handleUpdateCompany(e, index)}
                            />
                        </div>
                        <div className='companies'>
                            <label htmlFor='position'>Занимаемая должность</label>
                            <input
                                type='text'
                                name='position'
                                required
                                onChange={(e) => handleUpdateCompany(e, index)}
                            />
                        </div>

                        <div className='btn__group'>
                            {companyInfo.length - 1 === index && companyInfo.length < 4 && (
                                <button id='addBtn' onClick={handleAddCompany}>
                                    Добавить
                                </button>
                            )}
                            {companyInfo.length > 1 && (
                                <button id='deleteBtn' onClick={() => handleRemoveCompany(index)}>
                                    Удалить
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                <button>СОЗДАТЬ РЕЗЮМЕ</button>
            </form>
        </div>
    );
};

export default Home;
