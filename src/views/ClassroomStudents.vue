<template>
    <div>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-9">
                <h2>Students</h2>
                <ol class="breadcrumb">
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>
                    </li>
                    <li>
                        Classrooms
                    </li>
                    <li>
                        <router-link :to="{name:'classroom', params:{classroom_id:currentClassroom.id}}"> {{currentClassroom.class_short}}</router-link>
                    </li>
                    <li class="active">
                        <strong>Classmates</strong>
                    </li>
                </ol>
            </div>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12" v-for="student in currentClassroom.students">
                    <div class="contact-box">
                        <router-link :to="{name:'userDetail', params:{user_id:student.id}}">
                            <div class="col-sm-4 col-xs-4">
                                <div class="text-center">
                                    <img class="img-circle m-t-xs img-responsive" :src="student.avatar2x">
                                    <!--<div class="m-t-xs font-bold">@{{student.username}}</div>-->

                                </div>
                            </div>
                        </router-link>
                        <div class="col-sm-8 col-xs-8">
                            <h3><strong>{{student.full_name}}</strong>
                                <span class="label label-warning ">Level {{student.level}}</span>
                            </h3>
                            <address>
                                <strong>Major:</strong> <span v-if="student.major">{{student.major.major_short}}</span><br>
                                <strong>Class of:</strong> {{student.school_year}}<br>
                            </address>
                            <div class="m-t-xs btn-group">
                                <a @click="addFriend(student.id)" class="btn btn-xs btn-primary"><i class="fa fa-user-plus"></i> + Add Friend</a>
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
    name: 'ClassroomStudent',
    head: {
      title: {inner: 'Classmates'}
    },
    methods: {
      addFriend (pk) {
        this.$store.dispatch('addFriend', pk)
          .then(() => {
            this.$root.$children[0].$refs.toastr.s('Your Request is sent.', 'Success')
            this.$root.$children[0].$refs.toastr.i('Send Friend Request', 'EXP +5')
          })
          .catch((error) => {
            this.$root.$children[0].$refs.toastr.e(error.body.detail, 'Error')
            console.log(error)
          })
      }
    },
    computed: {
      currentClassroom () {
        return this.$store.getters.currentClassroom
      }
    }
  }

</script>
