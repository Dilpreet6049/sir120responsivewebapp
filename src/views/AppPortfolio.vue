<template>
    <div class="content">
      <h2 class="content__heading">Student Portfolio</h2>
      <hr class="content__separator" />
      <h2>Detaiis of Project</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Dilpreet singh</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Student ID</td>
        <td>S223799929</td>
      </tr>
      <tr>
        <td>Technologies</td>
        <td>HTML, CSS, Bootstrap, Vue 3, router & store</td>
      </tr>
    </tbody>
  </table>
  
    </div>
  </template>
  
  <script>
  export default {
    name: "AppPortfolio"
  };
  </script>
  
  <style scoped>
  .content {
    padding: 7rem 2rem;
  }
  .content__heading {
    text-align: center;
    margin-bottom: 1rem;
  }
  .content__separator {
    border-color: gray;
    margin-bottom: 1rem;
  }
  </style>