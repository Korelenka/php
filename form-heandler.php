<?php
// обработка данных формы авторизации
$server = $_SERVER; // 'qwerty' '123'
if ($server['REQUEST_METHOD'] === 'POST') {
    $post = $_POST;
    if ($post['login'] === 'elena' || $post['password'] === '1234') {
        $answer = [
           'message' => 'error',
           'reason' => 'Пользователь с таким логином и паролем уже существует'
        ];
    } else {
        $answer = [
            'message' => 'Регистрация прошла успешно'
        ];
    }
    echo json_encode($answer);
}