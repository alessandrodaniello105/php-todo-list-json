<?php

require_once __DIR__ . '/partials/head.php';

?>


<body>

  <div id="app" class="container rounded-3 my-3">
    <h2>PHP ToDo List JSON</h2>

    <ul class="list-group">
      <li
        @click="debugElement(element)"
        v-for="(element, index) in list"
        :key="index"
        :class="{'done': element.isDone}"
        class="list-group-item">
      {{ element.text }}
      </li>

    </ul>

    <div class="input-group my-3">
      <input
        v-model="newTask"
        type="text"
        class="form-control"
        placeholder="Inserisci un task da aggiungere">
      <button
        class="btn btn-success"
        type="button"
        id="task-add-btn">
        Invia
      </button>
    </div>


  </div>
  
  <script src="script.js"></script>
</body>
</html>