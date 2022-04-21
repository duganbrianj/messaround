<template>
    <h1>Job Details Page</h1>
    <p>The job id is {{ id }}</p>
</template>

<script>
export default {
    props: ['id'],
                        //The below was replaced by the above
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>
  