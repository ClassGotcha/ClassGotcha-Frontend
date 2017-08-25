<template>
    <div>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Add New Friends</h2>
                <ol class="breadcrumb">
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>
                    </li>
                    <li>
                        <a>Friends</a>
                    </li>
                    <li class="active">
                        <strong>Add New Friends</strong>
                    </li>
                </ol>
            </div>
            <div class="col-lg-2">
            </div>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-sm-12">

                </div>
                <div class="col-sm-12">
                    <div class="ibox">
                        <div class="ibox-content">
                            <h2>Search User</h2>
                            <p>Key Word : "John Martin" or "abcd1234@psu.edu"</p>
                            <div class="input-group">
                                <input placeholder="ex: John Martin or abcd1234@psu.edu" @keydown.enter="userSearch($event)" v-model="search_token" class="input form-control">
                                <span class="input-group-btn">
                                <button type="button" @click="userSearch($event)" class="btn btn btn-primary">
                                    <i class="fa fa-search"></i> Search
                                </button>
                                </span>
                            </div>
                            <div class="m-t-xs">
                                Or <a @click="userRecommendation()">Try Recommendations Beta</a>
                                <a type="button"
                                   class="btn btn-link"
                                   data-toggle="tooltip"
                                   data-placement="top"
                                   title=""
                                   data-original-title="We will recommend users with similar schedules and in same major."><i class="fa fa-info"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="ibox"  v-if="search_result_return && !user_result">
                        <h4 class="text-center"> No Result </h4>
                </div>
                <spinner v-if="search_begin && !search_result_return"></spinner>
                <div class="col-lg-3 col-md-6 col-sm-12" v-for="student in user_result">
                    <div class="contact-box">
                        <router-link :to="{name:'userDetail', params:{user_id:student.id}}">
                            <div class="col-sm-4 col-xs-4">
                                <div class="text-center">
                                    <img class="img-circle m-t-xs img-responsive" :src="student.avatar2x">
                                    <div class="m-t-xs font-bold">@{{student.username}}</div>

                                </div>
                            </div>
                        </router-link>
                        <div class="col-sm-8 col-xs-8">
                            <h3><strong>{{student.full_name}}</strong>
                                <span class="label label-warning">Level {{student.level}}</span>
                            </h3>
                            <address>
                                <strong>Major:</strong> <br>
                                <strong>Class:</strong> {{student.school_year}}<br>
                                <strong>About Me</strong><br>
                                {{student.about_me}}
                            </address>
                            <div class="m-t-xs btn-group">
                                <a @click="sendMessage()" class="btn btn-xs btn-primary"><i class="fa fa-envelope"></i> Message</a>
                                <router-link :to="{name:'userDetail', params:{user_id:student.id}}" class="btn btn-xs btn-white"><i class="fa fa-user"></i> Profile </router-link>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import Spinner from 'components/Spinner'

  export default {
    name: 'AddFriend',
    head: {
      title: {inner: 'New Friends'}
    },
    components: {
      'spinner': Spinner
    },
    data: function () {
      return {
        search_begin: false,
        search_result_return: false,
        search_token: '',
        user_result: []
      }
    },
    methods: {
      userSearch (e) {
        e.preventDefault()
        this.search_begin = true
        this.search_result_return = false

        this.$store.dispatch('searchUser', {search: this.search_token})
          .then((response) => {
            this.user_result = response
            this.search_result_return = true
          })
          .catch(() => {
            console.log('asdf')
            this.search_result_return = true
            this.$root.$children[0].$refs.toastr.e('Ops, something wrong, please try again later', 'Error')
          })
      },
      userRecommendation () {
        this.search_begin = true
        this.search_result_return = false
        this.$store.dispatch('getUserRecommendations')
          .then((response) => {
            this.user_result = response
            this.search_result_return = true
          })
          .catch(() => {
            this.search_result_return = true
            this.$root.$children[0].$refs.toastr.e('Ops, something wrong, please try again later', 'Error')
          })
      },
    },
    computed: {},
    mounted () {
      /* global $:true */
      $('[data-toggle="tooltip"]').tooltip()
    }
  }

</script>
