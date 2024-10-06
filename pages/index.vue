<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl flex justify-center items-center font-bold mb-4">
      Todo List
    </h1>
    <div class="mb-4 flex justify-center items-center">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Add a new todo"
        class="border p-2 mr-2"
      />
      <button @click="addTodo" class="bg-blue-500 text-white px-4 py-2">
        Add
      </button>
    </div>

    <table
      class="table-auto w-full border-collapse border border-gray-300 text-center"
    >
      <thead>
        <tr class="border-b border-gray-300">
          <th class="px-4 py-2 border-r border-gray-300">Note</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todos"
          :key="index"
          class="border-b border-gray-300"
        >
          <td class="px-4 py-2 border-r border-gray-300">{{ todo.text }}</td>
          <td class="px-4 py-2">
            <button
              @click="editTodo(index)"
              class="bg-yellow-500 text-white px-2 py-1 mr-2"
            >
              Edit
            </button>
            <button
              @click="removeTodo(index)"
              class="bg-red-500 text-white px-2 py-1"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.dispatch("addTodo", { text: this.newTodo });
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.$store.dispatch("removeTodo", index);
    },
    editTodo(index) {
      this.$router.push({ path: `/edit/${index}` });
    },
  },
};
</script>
