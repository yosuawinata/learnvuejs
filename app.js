const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn VueJs!', // the first example use data property
            courseGoalA: '<h2>Finish the course and learn VueJs!</h2>',
            courseGoalB: 'Master VueJs and build amazing application!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                // instead hardcode we can use the variable inside using (this) from data property
                // return 'Learn VueJs!';
                return this.courseGoalA;
            }
            else {
                // instead hardcode we can use the variable inside using (this) from data property
                // return 'Master VueJS!';
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');