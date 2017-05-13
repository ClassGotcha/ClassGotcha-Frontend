<template>
   <div class="animated fadeInRight">
    <calendar></calendar>
   </div>
</template>
<script>
    import Calendar from 'components/Calendar'

    export default {
        name: 'Home',
        head: {
            title: { inner: 'Home' }
        },
        // data() {
        //     // return {
        //     //     event_sources: []
        //     // }
        // },
        components: {
            'calendar': Calendar
        },
        methods: {

        },
        computed: {
            user() {
                return this.$store.getters.me
            }
        },

    }

</script>
