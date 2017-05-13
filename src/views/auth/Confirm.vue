<template>
<spinner v-if="!loaded"></spinner>
  <div v-else class="animated fadeInDown">

    <div class="row">
           <div class="col-lg-12">
                        <div v-if="!token_vaild" class="ibox">
                            <div class="ibox-content">
                                <h2><i class="fa fa-times"></i> Ooops, Something went wrong</h2>
                                <p class="text-danger">Error Message: {{err_msg}}</p>
                                <p>Tips: Did you use the right URL?</p>

                                
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
        name: 'confirm',
        components: {
            'spinner': Spinner
        },
        data() {
            return {
                loaded: false,
                title: '',
                token_vaild: false,
                err_msg: ''
            }
        },
        methods: {
            confirm() {
                if (typeof this.$route.query === 'undefined') {
                    this.loaded = true
                    this.err_msg = "Token Not Found"

                } else {
                    this.$store.dispatch('confirm', this.$route.query.token)
                        .then(() => {
                            this.loaded = true
                            this.token_vaild = true
                        })
                        .catch((error) => {
                            this.loaded = true
                            this.err_msg = error.body.detail
                            console.log(error.body.detail)

                        })
                }
            },
        },
        created() {
            this.confirm()
        }
    }

</script>
