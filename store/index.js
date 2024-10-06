// store/index.js
export const state = () => ({
  todos: [],
});

export const mutations = {
  ADD_TODO(state, todo) {
    state.todos.push(todo);
  },
  REMOVE_TODO(state, index) {
    state.todos.splice(index, 1);
  },
  UPDATE_TODO(state, { index, text }) {
    state.todos[index].text = text;
  },
};

export const actions = {
  addTodo({ commit }, todo) {
    commit("ADD_TODO", todo);
  },
  removeTodo({ commit }, index) {
    commit("REMOVE_TODO", index);
  },
  updateTodo({ commit }, { index, text }) {
    commit("UPDATE_TODO", { index, text });
  },
};
