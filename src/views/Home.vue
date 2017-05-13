<template>
   <div class="animated fadeInRight">
    <calendar></calendar>
   </div>
</template>
<script>
    import Calendar from 'components/Calendar'

    export default {
        name: 'Home',
        // data() {
        //     // return {
        //     //     event_sources: []
        //     // }
        // },
        components: {
            'calendar': Calendar
        },
        methods: {
            login_check() {
                if (!this.$store.getters.login_status)
                    this.$router.push({ name: 'login' })
            }
        },
        computed: {
            user() {
                return this.$store.getters.me
            }
        },
        created() {
            this.login_check()
        }

    }

</script>
