const { createApp } = Vue;

createApp({
  data(){
    return {
      apiURL: 'server.php',
      list: [],
      newTask: ''
    }
  },
  methods: {
    getTasks() {
      // const data = new FormData;

      axios.get(this.apiURL)
      .then(res => {
        // const data = res.data;
        this.list = res.data;
        console.log(this.list);
      })
    },
    getID(index) {
      console.log(index);
    },
    debugElement(element) {
      element.isDone = !element.isDone;
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