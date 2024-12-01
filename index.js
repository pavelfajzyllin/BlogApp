// Создание массива постов.
const posts = [];

const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtn = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');

const validationTitle = document.querySelector('.js-validation_title');
const validationText = document.querySelector('.js-validation_text');

// Валидация по введению заголовка
postTitleInputNode.addEventListener('input', function(){
    if (postTitleInputNode.value.length > 100) {
        validationTitle.classList.add('validation');
    } else {
        validationTitle.classList.remove('validation');
    }
})

// Валидация по введению поста

postTextInputNode.addEventListener('input', function() {
    if (postTextInputNode.value.length > 200) {
        validationText.classList.add('validation');
    } else {
        validationText.classList.remove('validation');
    }
})

newPostBtn.addEventListener('click', function() {
    // Валидация
    validation();
    // получить данные из поля ввода
    const postFromUser = getPostFromUser();

    // сохранить пост
    addPost(postFromUser);

    // отобразить пост
    renderPosts();

    // Очистить поля ввода
    cleanInputs();

});

// Получение данных от пользователя: заголовок и текст. Вовзращение.
function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;
    
    return {
        title: title,
        text: text,
    };
}

// Добавление в массив поста.
function addPost({ title, text }) {
    posts.unshift({
        title:title,
        text: text,
    });
    
}

// Получение массива постов.
function getPosts() {
    return posts;
}


// Отображение постов.
function renderPosts () {
    // Запись в переменную массива постов.
    const posts = getPosts();

    

    let postsHTML = '';
    // Для каждого объекта в массиве отрисовка разметки.
    posts.forEach(post => {
        let date = getDate();
        postsHTML += `
        <div class='post'>
            <p class='post__date'>${date}</p>
            <p class='post__title'>${post.title}</p>
            <p class='post__text'>${post.text}</p>
        </div>
        `
    });
    
    // Отображение массива постов на странице.
    postsNode.innerHTML = postsHTML;

}

// Очистка полей ввода после публикации поста

function cleanInputs (){
    postTitleInputNode.value = '';
    postTextInputNode.value = '';
}

// Получение текущей даты

function getDate () {
    let Fulldate = new Date ();
    let datePost = `${Fulldate.getDate()}.${Fulldate.getMonth()}.${Fulldate.getFullYear()} ${Fulldate.getHours()}:${Fulldate.getMinutes()}`
    return datePost;
}

// Валидация по количеству символов

function validation () {
    if ((postTitleInputNode.value.length > 100 || postTextInputNode.value.length > 200) || (postTitleInputNode.value.length == '' || postTextInputNode.value.length == '')) {
        newPostBtn.setAttribute('disabled');
    }
}
