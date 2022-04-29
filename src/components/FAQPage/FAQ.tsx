

const FAQ = (props) => {
    return(
        <section className="main__faq faq">
            <h1 className="faq__title">Ответы на вопросы:</h1>
            <h3 className="faq__question">Какие технологии использовались при создании</h3>
            <div className="faq__answer">
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Typescript</li>
                    <li>Sass</li>
                    <li>Axios</li>
                    <li>БЭМ методология</li>
                </ul>
            </div>

            <h3 className="faq__question">Страничка пользователей</h3>
            <p className="faq__answer">На страничке отображаются пользователи полученные асинхронным запросом с <a href="https://jsonplaceholder.typicode.com/">api</a>, есть поиск по имени и сортировка по каждому столбцу как по возрастанию так и по убыванию </p>

            <h3 className="faq__question">Страничка постов</h3>
            <p className="faq__answer">На страничке отображаются посты полученные асинхронным запросом с <a href="https://jsonplaceholder.typicode.com/">api</a>, есть поиск включающий поиск по заголовку и по содержимому поста. Подключена пагинация, посты отображаются по 10шт на одной странице</p>
        </section>
    )
}

export default FAQ