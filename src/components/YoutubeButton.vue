<template>
  <a :href="href" target="blank" class="btn btn-danger px-5">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>
