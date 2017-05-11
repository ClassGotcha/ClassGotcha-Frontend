<template>
  <div v-else class="animated fadeInDown">
    <div class="row">
           <div class="col-lg-12">
                <div>
                    <div class="ibox-content">
                        <h2>Password Reset</h2>
                        <br>
                        <p>Please enter the email associated with your account</p>
                        <div class="input-group">
                            <input placeholder="Email" type="text" class="form-control"> 
                            <span class="input-group-btn"> 
                            <button type="button"  class="btn btn-primary">Send</button> 
                            </span>
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
        name: 'confirm',
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
