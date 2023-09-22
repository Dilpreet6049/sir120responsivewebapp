<template>
  <section class="user">
    <template v-if="user">
      <h2 class="user__name">{{ userData.firstName }}</h2>
      <img
          :src="userData.image"
          :ismap="userData.firstName"
          class="user__picture"
      />
      <p class="user__email">{{ userData.email}}</p>

      <!-- User extended info -->
      <RouterLink class="user__more" :to="`/user/${username}/info`">Show user info 👀</RouterLink>
      <RouterView :username="username"/>
    </template>
  </section>
</template>

<script>
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {computed, ref} from "vue";

export default {
  name: "AppUser",
  setup() {
    const route = useRoute();
    const store = useStore();
    const users = computed(() => store.state.users);
    const username = ref(route.params.id);
    console.log('Finder user: ');
    console.log(username);
    const user = computed(() => users.value.find(user => user.id === username.value));
    console.log(user);
    const userData = computed(() => {
      return  {
        fullName: `${user.value.firstName} ${user.value.lastName}`,
        thumbnail: user.value.image
      }
    });
    return {
      user,
      userData,
      username
    }
  }
};
</script>

<style scoped>
.user {
  padding: 7rem 0.5rem;
  text-align: center;
}

.user__name{
  margin-bottom: 1rem;
}

.user__picture {
  border: 1px solid;
  margin: 0px auto;
}

.user__more {
  display: block;
  margin-top: 1rem;
  color: black;
}

</style>