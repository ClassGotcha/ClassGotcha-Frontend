<template>
  <div v-else class="animated fadeInDown">
    <div class="row">
           <div class="col-lg-12">
                <div>
                    <div class="ibox-content">
                        <h2>Password Reset</h2>
                        <br>
                        <div v-if="!loaded || loaded && !confirmed">
                            <p>Please enter the email associated with your account</p>
                            <div class="input-group">
                                <input v-model="email" placeholder="Email" type="text" class="form-control"> 
                                <span class="input-group-btn"> 
                                <button type="button" @click="sendEmail()"  class="btn btn-primary">Send Email</button> 
                                </span>
                            </div>
                            <br>
                            <p v-if="loaded && !confirmed" class="text-danger">We couldn't find any accounts with this email address</p>
                        </div>
                        <div v-else-if="loaded && confirmed">                
                            <h3><i class="fa fa-check text-info"></i> We have sent a message that containing a link to reset your password. </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>

</template>

<script>
    import Spinner from 'components/Spinner'
    export default {
        name: 'ForgetSendEmail',
        components: {
            'spinner': Spinner
        },
        data() {
            return {
                loaded: false,
                confirmed: false,
                email: '',
            }
        },
        methods: {
            sendEmail() {
                if (this.email !== '') {
                    const formData = {
                        email: this.email
                    }
                    this.$store.dispatch('forgetSendEmail', formData)
                        .then(() => {
                            this.loaded = true
                            this.confirmed = true
                        })
                        .catch(() => {
                            console.log("fdsfas")
                            this.loaded = true
                            this.confirmed = false
                        })
                }
            },
        }
    }

</script>
