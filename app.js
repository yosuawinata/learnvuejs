const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        counterMethods: 0,
        counterMethodsParam: 0
      };
    },
    methods: {
        addMethods() {
            this.counterMethods++; // you can write like this this.counter = this.counter + 1
        },
        substractMethods() {
            this.counterMethods--; // you can write like this this.counterMethods = this.counterMethods - 1
        },
        addWith(param) {
            this.counterMethodsParam = this.counterMethodsParam + param
        },
        substractWith(param) {
            this.counterMethodsParam = this.counterMethodsParam - param
        }
    }
  });
  
  app.mount('#events');  