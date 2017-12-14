<template>
  <div id="test">
    <button
      v-on:click="fart"
    >Fart</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      fart: function () {
        const number = Math.ceil(Math.random() * 4);
        const src = `http://www.pacdv.com/sounds/fart-sounds/fart-${number}.wav`;
        const audio = new Audio(src);
        audio.play();
      }
    }
  }
</script>

<style scoped>
#test {
  text-align: center;
  margin-top: 100px;
}

button {
  width: 100px;
  height: 40px;
  top: 100px;
  font-size: 20px;
}
</style>
