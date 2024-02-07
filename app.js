const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        counterMethods: 0,
        counterMethodsParam: 0,
        name: '',
        nameWithParam: '',
        confirmedName: '',
        confirmedNameWithParam: '',
        startingCounter: 10
      };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm(event) {
            // event.preventDefault(); // this function to prevent refreshment data (vue app restarted) until the input data can be lost (using vanilla way)
            alert('Data has been submitted!')
        },
        setName(event) {
            this.name = event.target.value;
        },
        setNameWithParam(event, lastName) {
            this.nameWithParam = event.target.value + ' ' + lastName;
        },
        setConfirmationNameWithParam(event, lastName) {
            this.confirmedNameWithParam = event.target.value + ' ' + lastName;
        },
        setNameWithConfirmation(event, lastName) {
            this.confirmedName = this.confirmedNameWithParam;
        },
        addMethods() {
            this.counterMethods++; // you can write like this.counter = this.counter + 1
        },
        substractMethods() {
            this.counterMethods--; // you can write like this.counterMethods = this.counterMethods - 1
        },
        addWith(param) {
            this.counterMethodsParam = this.counterMethodsParam + param
        },
        substractWith(param) {
            this.counterMethodsParam = this.counterMethodsParam - param
        },
        addWithStartCount(param) {
            this.startingCounter = this.startingCounter + param
        },
        substractWithStartCount(param) {
            this.startingCounter = this.startingCounter - param
        }
    }
  });
  
  app.mount('#events');  