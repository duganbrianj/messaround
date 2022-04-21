<template>
  <h1>{{ title }}</h1>
  <input type="text" value="" ref="name">
  <button @click="handleClick">Click Me</button>
  <div v-if="showModal">
    <AppModal theme="sale" @close="toggleModal">
        <template v-slot:links>
            <a href="#">Sign Up Now</a>
            <a href="#">Second</a>
        </template>
        <h1>Header</h1>
        <p>Paragraph</p>
    </AppModal>
  </div>
  <div v-if="showModalTwo">
    <AppModal @close="toggleModalTwo">
        <h1>Header Two</h1>
        <p>Paragraph Two</p>
    </AppModal>
  </div>
  <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">open modal two</button>
</template>

<script>
import AppModal from './components/AppModal.vue'

export default {
  name: 'App',
  components: {
      AppModal
  },
  data() {
      return {
          title: 'My first Vue App',
          header: 'Header',
          text: 'What what what',
          showModal: false,
          showModalTwo: false
      }
  },
  methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },
      toggleModalTwo() {
        this.showModalTwo = !this.showModalTwo
      },
      handleClick() {
        console.log(this.$refs.name.value)
        this.$refs.name.classList.add('active')
        this.$refs.name.focus()
      }
  }
}
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
h1 {
    border-bottom: 5px solid #ddd;
}
</style>
