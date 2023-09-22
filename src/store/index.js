import { createStore, createLogger  } from 'vuex'

const store = createStore({
  plugins: [createLogger()],
  state: {
    users: []
  },
  mutations: {
    setUsers(state, users){
      state.users = users;
    }
  },
  actions: {
    async setUsers({commit}){
      const users = window.localStorage.getItem("users");
      if(users){
        commit("setUsers", JSON.parse(users));
      }else{
        try {
          await fetch("https://dummyjson.com/users")
              .then(data => data.json())
              .then(data => {
                console.log(data);
                commit("setUsers", data.users);
                window.localStorage.setItem("users", JSON.stringify(data.users));
              });
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production'
})
export default store;
(async () => await store.dispatch("setUsers"))();


