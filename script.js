const { createApp } = Vue;

createApp({
  data(){
    return {
      apiURL: 'server.php',
      list: [],
      newTask: '',
      errorDeleteTask: false
      // newElement: {
      //   text: this.newTask,
      //   isDone: false
      // }
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
      })
    },

    checkDoneTask(element, index) {
      if (element.isDone == false) {
        this.errorDeleteTask = true;
        setTimeout(() => {
          this.errorDeleteTask = false;
        }, 2000)
      } else {
        this.errorDeleteTask = false;
        this.removeTask(index);
      }
    },

    removeTask(index) {
      const data = new FormData();
      data.append('idTask', index);
      console.log(index);

      axios.post(this.apiURL, data)
      .then(res => {
        this.list = res.data;
      })
    },
    stopClick() {

    },
    getID(index) {
      console.log(index);
    },
    toggleDone(index) {
      const data = new FormData();
      data.append('idDone', index);

      axios.post(this.apiURL, data)
      .then(res => {
        this.list = res.data;
      })
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