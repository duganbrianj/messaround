<template>
    <form @submit.prevent="handleSubmit">
        <h3>Log in</h3>
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button v-if="!isPending">Log In</button>
        <button v-if="isPending">Pending</button>
    </form>
</template>

<script>
    import useLogin from '@/composables/useLogin'
    import { ref } from 'vue'
    export default {
        setup() {
            const { error, login, isPending } = useLogin()

            const email = ref('')
            const password = ref('')

            const handleSubmit = async () => {
                const res = await login(email.value, password.value)
                if(!error.value) {
                    console.log("User Logged In")
                }
            }

            return { email, password, handleSubmit, error, isPending }
        }
    }
</script>

<style>

</style>