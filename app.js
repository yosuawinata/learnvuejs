const app = Vue.createApp({
    data() {
      return {
        counterMethods: 0,
        name: '',
        nameUseModel: '',
        fullName: '',
        fullNameComputed: ''
      };
    },
    computed: {
        setFullNameComputed() {
            console.log('Running again...')
            if (this.fullNameComputed === '') {
                return '';
            };
            return this.fullNameComputed + ' ' + 'Winata';
        }
    },
    methods: {
        setFullName() {
            // this script how to check the page will rendered by vuejs
            // console.log('Running again...')
            if (this.fullName === '') {
                return '';
            };
            return this.fullName + ' ' + 'Winata';
        },
        setName(event) {
            this.name = event.target.value;
        },
        addMethods() {
            this.counterMethods++; // you can write like this.counter = this.counter + 1
        },
        substractMethods() {
            this.counterMethods--; // you can write like this.counterMethods = this.counterMethods - 1
        },
        resetInput() {
            // document.querySelector('input').value=''; // reset the form input with vanilla'js way
            this.name = '';
        },
        resetInput2() {
            this.nameUseModel = '';
        },
        resetInput3() {
            this.fullName = '';
        },
        resetInput4() {
            this.fullNameComputed = '';
        }
    }
  });
  
  app.mount('#events');  