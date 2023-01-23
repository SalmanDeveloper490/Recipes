<template>
  <header>
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-4">
          <router-link :to="{ name: 'home' }">
            <img src="../assets/images/logo.png" alt="logo" class="logo" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="float-end">
            <button
              class="btn btn-primary"
              type="button"
              id="customButton"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              Open Menu
            </button>

            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  <router-link :to="{ name: 'home' }">
                    <img
                      src="../assets/images/logo.png"
                      alt="logo"
                      class="logo"
                    />
                  </router-link>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div class="mt-3">
                  <ul class="menuLinks">
                    <li>
                      <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'byName' }"
                        >Search meals</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ name: 'byLetter' }"
                        >Meals by letters</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script></script>

<style></style>
