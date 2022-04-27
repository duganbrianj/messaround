<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
    import ChatWindow from '../components/ChatWindow.vue'
    import NewChatForm from '../components/NewChatForm.vue'
    import Navbar from '../components/Navbar.vue'
    import getUser from '../composables/getUser'
    import { watch } from 'vue'
    import { useRouter } from 'vue-router'
    export default {
        components: { Navbar, NewChatForm, ChatWindow }, 
        setup() {
            const { user } = getUser()
            const router = useRouter()

            watch(user, () => {
                if(!user.value) {
                    router.push({ name: 'Welcome'})
                }
            })
        }
    }
</script>

<style>
    form {
        margin: 10px;
    }
    textarea {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>