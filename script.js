const { createApp } = Vue;

createApp({
  data(){
    return {
      apiURL: 'server.php',
      list: []
    }
  },
  methods: {
    getTasks() {
      const data = new FormData;

      axios.get(this.apiURL)
      .then(res => {
        // const data = res.data;
        this.list = res.data;
        console.log(this.list);
      })
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