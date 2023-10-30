const { createApp } = Vue;

createApp({
  data(){
    return {
      todoTasks: [
        {
        text: 'Tidy the room up',
        isDone: false
        },
        {
          text: 'Tidy the code up',
          isDone: false
        },
        {
          text: 'Get dressed',
          isDone: false
        },
        {
          text: 'Wash yourself',
          isDone: false
        }
      ]
    }
  }
}).mount('#app');


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