<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>
        <input type="text" placeholder="Display Name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button v-if="!isPending">Sign Up</button>
        <button v-if="isPending">Pending</button>
    </form>
</template>

<script>
    import useSignup from '@/composables/useSignup'
    import { ref } from 'vue'
    export default {
        setup() {
            const { error, signup, isPending } = useSignup()

            const displayName = ref('')
            const email = ref('')
            const password = ref('')

            const handleSubmit = async () => {
                const res = await signup(email.value, password.value, displayName.value)
                if(!error.value) {
                    console.log('User signed up')
                }
            }

            return { email, password, displayName, handleSubmit, isPending, error }
        }
    }
</script>

<style>

</style>