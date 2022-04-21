<template>
<h1>Ninja Reaction Timer</h1>
<button @click="start" :disabled="isPlaying">Play</button>
<VueBlock v-if="isPlaying" :delay="delay" @end="endGame"/>
<ResultsBlock v-if="showResults" :score="score"/>
</template>

<script>
import VueBlock from './components/VueBlock.vue'
import ResultsBlock from './components/ResultsBlock.vue'

export default {
  name: 'App',
  components: {
      VueBlock, ResultsBlock
  },
  data() {
      return {
          isPlaying: false,
          delay: null,
          score: null,
          showResults: false
      }
  },
  methods: {
      start() {
        this.delay = 2000 + Math.random() * 5000
        this.isPlaying = true
        this.showResults = false
      },
      endGame(reactionTime) {
        this.score = reactionTime
        this.isPlaying = false
        this.showResults = true
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
  color: #444;
  margin-top: 60px;
}
button {
    background: #319323;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 15px;
    font-size: 16px;
    letter-spacing: 4px;
    cursor: pointer;
    margin: 10px;
}
button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
}
</style>
