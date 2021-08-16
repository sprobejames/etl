<template>
  <div>
    <h1>Users</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.fullName }}</td>
          <td>{{ user.email }}</td>
          <td><img :src="user.avatar" width="48" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import User from "./models/User";

export default {
  name: "App",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    this.users = await new User().findAll();
  },
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
