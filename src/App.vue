<template>
  <div id="app">
    <h1>Task todo</h1>
    <input type="text" v-model="task" />
    <button @click="addTodo">Add</button>
    <button @click="aloHatoDo">AloHaaa</button>
    <li v-for="v in getTodos" :key="v.id">{{v.task}}</li>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      task: ""
    };
  },
  computed: {
    ...mapGetters(["getTodos"])
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.task);
    },
    aloHatoDo() {
      this.$store.commit('aloHa','kxxxxxxx')
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
