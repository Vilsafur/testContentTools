<template>
  <div class="page" size="A4" data-editable :data-name="name">
    <p>What are you waiting for? Start writing!</p>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: ['name']
}
</script>

<style lang="scss">
.page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);

  &[size="A4"] {
    width: 21cm;
    height: 29.7cm;

    &[layout="landscape"] {
      width: 29.7cm;
      height: 21cm;
    }
  }
}
</style>
