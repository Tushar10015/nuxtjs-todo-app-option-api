<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 flex justify-center items-center">
      Edit Todo
    </h1>

    <div class="mb-4 flex justify-center items-center">
      <input v-model="updatedTodo" type="text" class="border p-2 mr-2" />
      <button @click="updateTodo" class="bg-blue-500 text-white px-4 py-2">
        Save
      </button>
      <button @click="goBack" class="bg-gray-500 text-white px-4 py-2 ml-4">
        Back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updatedTodo: "",
    };
  },
  computed: {
    todo() {
      return this.$store.state.todos[this.$route.params.id];
    },
  },
  mounted() {
    this.updatedTodo = this.todo.text;
  },
  methods: {
    updateTodo() {
      this.$store.dispatch("updateTodo", {
        index: this.$route.params.id,
        text: this.updatedTodo,
      });
      this.$router.push("/");
    },
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
