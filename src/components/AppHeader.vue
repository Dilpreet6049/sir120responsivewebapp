<template>
  <header class="header">
    <!--nav class="header__nav">
      <RouterLink class="header__nav__link" to="/">
        Home
      </RouterLink>
      <RouterLink class="header__nav__link" to="/about">
        About
      </RouterLink>
      <RouterLink class="header__nav__link" to="/contact">
        Contact
      </RouterLink>
      <RouterLink class="header__nav__link" to="/legal">
        Courses
      </RouterLink>
    </nav-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <!--a class="navbar-brand" href="">Navbar</a-->
            <RouterLink class="navbar-brand" to="/">
                        Home
                        </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/portfolio">
                        Portfolio
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about">
                        About
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink class="nav-link" to="/contact">
                        Contact
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped>
.header {
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9);
}
.header__title {
  color: goldenrod;
}
.header__nav {
  display: flex;
  justify-content: space-evenly;
}
.header__nav__link {
  text-decoration: none;
  color: white;
}
</style>