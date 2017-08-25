<template>
    <div>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>My Friends</h2>
                <ol class="breadcrumb">
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>

                    </li>
                    <li class="active">
                        <strong>My Friends</strong>
                    </li>
                </ol>
            </div>
            <div class="col-lg-2">

            </div>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12" v-for="student in userFriends">
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
  export default {
    name: 'MyFriends',
    head: {
      title: {inner: 'MyFriends'}
    },
    methods: {
      sendMessage () {
        this.$root.$children[0].$refs.toastr.w('We are still working on this :)', 'Sorry')
      }
    },
    computed: {
      userFriends () {
        return this.$store.getters.userFriends
      },
    }
  }

</script>
