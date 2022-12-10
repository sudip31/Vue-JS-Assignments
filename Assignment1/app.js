const app = Vue.createApp({
  data() {
    return {
      name: "Sudipta",
      age: 31,
      imageUrl:
        "https://i.pinimg.com/736x/0d/b5/87/0db587ecc36bdaf8bd41f94d68dd4d5b.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.randam;
    },
  },
});
app.mount("#assignment");
