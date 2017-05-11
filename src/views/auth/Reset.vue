<template>
<spinner v-if="!loaded"></spinner>
  <div v-else class="animated fadeInDown">

    <div class="row">
           <div class="col-lg-12">
                        <div v-if="!confirmed" class="ibox">
                            <div class="ibox-content">
                                <h2><i class="fa fa-times"></i> Ooops, Something went wrong</h2>
                                <p class="text-danger">Error Message: Invalid token</p>
                                <p>Tips: Did you use the right link?</p>

                                
                            </div>
                        </div>
                        <div v-else>
                         <div class="ibox-content">
                                <h2><i class="fa fa-check"></i> Congratulations</h2>
                                <p>Your email address has been proved!</p>
                                <router-link :to="{name:'home'}" class="btn btn-primary">Continue</router-link>
                            </div>
                        </div>
                    </div>
        </div>
  </div>

</template>

<script>
    import Spinner from 'components/Spinner'
    export default {
        name: 'reset',
        components: {
            'spinner': Spinner
        },
        data() {
            return {
                loaded: false,
                title: '',
                confirmed: false
            }
        },
        methods: {
            confirm() {
                if (typeof this.$route.qurey === 'undefined') {
                    this.loaded = true
                } else {
                    this.$store.dispatch('confirm', this.$route.qurey.token)
                        .then(() => {
                            this.loaded = true
                            this.confirmed = true
                        })
                        .catch(() => {
                            this.loaded = true
                        })
                }
            },
        },
        created() {
            this.confirm()
        }
    }

</script>
