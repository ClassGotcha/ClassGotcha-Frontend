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

                        <div class="ibox">------------------------
                         <div class="ibox-content">
                                <h2>Password Reset</h2>
                                   <div class="form-group">
                            <span class="help-block m-b-none">New Password</span>
                                    <input type="password" v-model="password1" class="form-control" placeholder="Password" required>
                                       </div>
                                       <div class="form-group">
                            <span class="help-block m-b-none">Re-enter Password</span>
                                    <input type="password" v-model="password2" class="form-control" placeholder="Password" required>
                                       </div>

                                <router-link :to="{name:'home'}" class="btn btn-primary">Confirm</router-link>
                            </div>
                        </div>

                        <div class="ibox" >
                            <div class="ibox-content">
                                <h2><i class="fa fa-check"></i> You are all set!</h2>
                                <p>You have successfully reset your password.</p>
                                <router-link :to="{name:'login'}" class="btn btn-primary">Login</router-link>
                            </div>
                        </div>
                    </div>
                    
        </div>
  </div>

</template>

<script>
    import Spinner from 'components/Spinner'
    export default {
        name: 'forget',
        components: {
            'spinner': Spinner
        },
        data() {
            return {
                loaded: false,
                password1: '',
                password2: '',
                confirmed: false
            }
        },
        methods: {
            toeknVerify() {
                if (typeof this.$route.qurey === 'undefined') {
                    this.loaded = true
                } else {
                    this.$store.dispatch('forgetTokenVerify', this.$route.qurey.token)
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
            this.toeknVerify()
        }
    }

</script>
