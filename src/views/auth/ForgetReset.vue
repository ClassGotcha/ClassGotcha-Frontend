<template>
    <spinner v-if="!loaded"></spinner>
    <div v-else class="animated fadeInDown">
        <div class="row">
            <div v-if="!token_valid" class="ibox">
                <div class="ibox-content">
                    <h2><i class="fa fa-times"></i> Ooops, Something went wrong</h2>
                    <p class="text-danger">Error Message: {{err_msg}}</p>
                    <p>Tips: Did you use the right URL?</p>
                </div>
            </div>
            <div class="ibox" v-if="(token_valid && !password_changed)">
                <div class="ibox-content">
                    <h2>Password Reset</h2>
                    <div class="form-group">
                        <span class="help-block m-b-none">New Password</span>
                        <input type="password" v-model="password1" class="form-control" placeholder="Password" required>
                        <p class="text-danger">{{err_msg}}</p>
                    </div>
                    <div class="form-group">
                        <span class="help-block m-b-none">Re-enter Password</span>
                        <input type="password" v-model="password2" class="form-control" placeholder="Password" required>
                    </div>
                    <button @click="passwordUpdate()" class="btn btn-primary">Confirm</button>
                </div>
            </div>
            <div class="ibox" v-if="password_changed">
                <div class="ibox-content">
                    <h2><i class="fa fa-check"></i> You are all set!</h2>
                    <p>You have successfully reset your password.</p>
                    <router-link :to="{name:'login'}" class="btn btn-primary">Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Spinner from 'components/Spinner'

  export default {
    name: 'forget',
    head: {
      title: {inner: 'Reset Password'}
    },
    components: {
      'spinner': Spinner
    },
    data () {
      return {
        loaded: false,
        password1: '',
        password2: '',
        token_valid: false,
        password_changed: false,
        err_msg: ''
      }
    },
    methods: {
      toeknVerify () {
        if (!this.$route.query.hasOwnProperty('token')) {
          this.loaded = true
          this.err_msg = 'Token Not Found'
        } else {
          this.$store.dispatch('forgetTokenVerify', this.$route.query.token)
            .then(() => {
              this.loaded = true
              this.token_valid = true
              console.log((this.token_valid && !this.password_changed))

            })
            .catch((error) => {
              this.loaded = true
              console.log(error)
              this.err_msg = 'Token Invalid'
            })
        }
      },
      passwordUpdate () {
        if (this.password1 === '' || this.password1 !== this.password2) {
          this.err_msg = 'Password doesn\'t match'
        }

        const formData = {
          token: this.$route.query.token,
          password: this.password2
        }
        this.$store.dispatch('forgetPassReset', formData)
          .then(() => {
            this.password_changed = true
          })
          .catch((error) => {
            console.log(error)

            this.err_msg = error.body.detail
          })
      }
    },
    created () {
      this.toeknVerify()
    }
  }

</script>
