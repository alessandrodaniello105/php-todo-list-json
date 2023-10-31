<?php

$todo_tasks_string = file_get_contents('todo-tasks.json');

$tasks_list = json_decode($todo_tasks_string, true);

if( isset($_POST['newTaskElement']) ) {
  $newTaskEl = json_decode($_POST['newTaskElement']);

  $tasks_list[] = $newTaskEl;
  file_put_contents( 'todo-tasks.json', json_encode($tasks_list) );

}
file_put_contents( 'todo-tasks.json', json_encode($tasks_list) );

header('Content-Type: application/json');
echo json_encode($tasks_list);

?>