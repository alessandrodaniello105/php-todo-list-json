<?php

// $todo_tasks = [

  // [
  //   text => 'Tidy the room up',
  //   isDone => false
  // ],
  // [
  //   text => 'Tidy the code up',
  //   isDone => false
  // ],
  // [
  //   text => 'Get dressed',
  //   isDone => false
  // ],
  // [
  //   text => 'Wash yourself',
  //   isDone => false
  // ]

// ];





require_once __DIR__ . '/partials/head.php';

?>


<body>

  <div id="app" class="container rounded-3 my-3">
    <h2>PHP ToDo List JSON</h2>

    <ul class="list-group">
    <li
      v-for="(element, index) in todoTasks"
      :key="index"
      class="list-group-item">
    {{ element.text }}
    </li>

  </ul>

  </div>
  
  <script src="script.js"></script>
</body>
</html>