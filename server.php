<?php

$todo_tasks_string = file_get_contents('todo-tasks.json');

$tasks_list = json_decode($todo_tasks_string, true);



echo json_encode($tasks_list);

?>