const { createApp } = Vue;

createApp({
  data(){
    return {
      apiURL: 'server.php',
      list: [],
      newTask: '',

    }
  },
  methods: {
    getTasks() {

      axios.get(this.apiURL)
      .then(res => {
        this.list = res.data;
      })
    },
    addTask() {

      let newElement = {
        text: this.newTask,
        isDone: false
      }

      let newElementString = JSON.stringify(newElement);

      const data = new FormData();
      data.append('newTaskElement', newElementString);

      axios.post(this.apiURL, data)
      .then(res => {
        this.list = res.data;
        this.newTask = '';
        console.log(this.list);
      })
    },
    getID(index) {
      console.log(index);
    },
    toggleDone(element) {
      element.isDone = !element.isDone;
    },
    debugElement(element) {
      console.log(element);
    }
  },
  mounted() {
    this.getTasks();
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