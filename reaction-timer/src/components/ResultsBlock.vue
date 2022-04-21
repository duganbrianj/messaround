<template>
<div>Reaction Time: {{ this.score }} ms</div>
<h3 class="rank"> {{ this.rank }}</h3>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
           rank: null 
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = "Ninja Fingers"
        } else if (this.score < 300) {
            this.rank = "Rapid Reflexes"
        } else {
            this.rank = "Slow Boooooy"
        }

        }
    }
</script>
<style>
    .rank {
        font-size: 1.4em;
        color: #954355;
        font-weight: bold;
    }
</style>
