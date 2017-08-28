<template>
    <div>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Professor</h2>
                <ol class="breadcrumb">
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>

                    </li>
                    <li class="active">
                        <strong>Professor</strong>
                    </li>
                </ol>
            </div>
            <div class="col-lg-2">
            </div>
        </div>
        <div class="wrapper wrapper-content">
            <div class="row animated fadeInRight">
                <div class="col-md-4">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Professor Detail</h5>
                        </div>
                        <div>
                            <div class="ibox-content">
                                <h2>{{professor.full_name}}</h2>
                                <table class="table table-stripped ">
                                    <thead>

                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td class="no-borders">
                                            Office
                                        </td>
                                        <td class="no-borders">
                                            <strong v-if="!edit"> {{professor.office}} </strong>
                                            <input class="form-control" v-if="edit" v-model="office">
                                        </td>
                                    </tr>
                                    <!--<tr>-->
                                    <!--<td>-->
                                    <!--Department-->
                                    <!--</td>-->
                                    <!--<td>-->
                                    <!--<strong>{{professor.department}}</strong>-->
                                    <!--<div class="col-sm-8 col-md-8 col-lg-4">-->
                                    <!--<input class="form-control" v-if="edit" v-model="last_name">-->
                                    <!--</div>-->
                                    <!--</td>-->
                                    <!--</tr>-->
                                    <tr>
                                        <td>
                                            Email
                                        </td>
                                        <td>
                                            <strong v-if="!edit">{{professor.email}}</strong>
                                            <input class="form-control" v-if="edit" v-model="email">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Personal Page
                                        </td>
                                        <td>
                                            <strong v-if="!edit">{{professor.personal_page}}</strong>
                                            <input class="form-control" v-if="edit" v-model="personal_page">
                                        </td>
                                    </tr>
                                    <!--<tr>-->
                                    <!--<td>-->
                                    <!--Rate-->
                                    <!--</td>-->
                                    <!--<td>-->
                                    <!--{{professor.avg_rate.num__avg}}-->
                                    <!--</td>-->
                                    <!--</tr>-->
                                    </tbody>
                                </table>


                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <button type="button" @click="editProfessor()" class="btn btn-default btn-sm btn-block"><i class="fa fa-edit"></i>
                                                Edit
                                            </button>
                                        </div>
                                        <div class="col-md-6">
                                            <button type="button" v-if="edit" @click="updateProfessor()" class="btn btn-primary btn-sm btn-block">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="ibox float-e-margins">
                        <div class="ibox-content">
                            <ul class="nav nav-tabs">
                                <li class="active"><a href="#tab-1" data-toggle="tab">Course Teaching</a></li>
                                <li class=""><a href="#tab-2" data-toggle="tab">Recent comments</a></li>
                            </ul>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="panel blank-panel">
                                        <div class="panel-heading">
                                            <div class="panel-options">
                                            </div>
                                        </div>
                                        <div class="panel-body">
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tab-1">
                                                    <table class="table table-striped">
                                                        <tbody>
                                                        <tr v-for="classroom in professor.classrooms">
                                                            <td>
                                                                <h5>{{classroom.class_short}}</h5>
                                                            </td>
                                                            <td>
                                                                Section {{classroom.class_section}}
                                                            </td>
                                                            <td>
                                                                {{classroom.class_credit}} Unit(s)
                                                            </td>
                                                            <td>
                                                                {{classroom.class_time.repeat}} {{classroom.class_time.formatted_start_time}}-{{classroom.class_time.formatted_end_time}}
                                                            </td>
                                                            <td>
                                                                <i class="fa fa-users"></i> {{classroom.students_count}}
                                                            </td>
                                                            <td>
                                                                <span class="label label-primary">
                                                                    <router-link :to="{name:'classroom', params:{classroom_id:classroom.id}}"
                                                                                                               class="client-link">Detail</router-link>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane" id="tab-2">
                                                    <div class="feed-activity-list">
                                                        <div class="well" v-if="professor_comments.length === 0">
                                                            <p class="text-center"> Oops, nothing here～</p>
                                                        </div>
                                                        <div class="feed-element" v-for="comment in professor_comments">
                                                            <a href="#" class="pull-left" v-if="comment.is_anonymous">
                                                                <img alt="image" class="img-circle" src="https://classgotcha-us-standard-20161024.s3.amazonaws.com/avatars/default/user-male50.png">
                                                            </a>
                                                            <a href="#" class="pull-left" v-else>
                                                                <img alt="image" class="img-circle" :src="comment.creator.avatar1x">
                                                            </a>
                                                            <div class="media-body ">
                                                                <small class="pull-right"></small>
                                                                <strong v-if="comment.is_anonymous">Anonymous User</strong><strong v-else>{{comment.creator.full_name}}</strong> <span
                                                                    class="label label-sm label-warning">Level {{comment.creator.level}}</span>
                                                                <br>
                                                                <small class="text-muted">{{momentTime(comment.created)}}</small>
                                                                <div class="well">
                                                                    {{comment.content}}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="feed-element">
                                                            <a class="forum-avatar">
                                                                <img :src="user.avatar1x" class="img-circle">
                                                                <div class="author-info">
                                                                    <strong>{{user.full_name}}</strong><br><br>
                                                                    <span class="label label-warning">Level {{user.level}}</span>
                                                                </div>
                                                            </a>
                                                            <div class="media-body">
                                                                <textarea class="form-control" v-model="comment_content"></textarea>
                                                                <div class="m-b-10 m-t-sm">
                                                                    <input type="checkbox" v-model="is_anonymous" id="check" name="check"> <label for="check"></label>
                                                                    Post as anonymous
                                                                    <button @click="postProfessorComment()" data-dismiss="modal" class=" btn btn-sm btn-primary pull-right">
                                                                        Post
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Professor',
    head: {
      title: {inner: 'Professor'}
    },
    data: () => {
      return {
        comment_content: '',
        is_anonymous: false,
        // Update Professor

        email: '',
        office: '',

        personal_page: '',

        edit: false
      }
    },
    methods: {
      // Data Loading
      getProfessorData () {
        this.$store.dispatch('getProfessor', this.$route.params.professor_id)
        this.$store.dispatch('getProfessorComments', this.$route.params.professor_id)
      },
      updateProfessor () {
        const formData = {
          id: this.$route.params.professor_id,
          email: this.email,
          office: this.office,

          personal_page: this.personal_page,
        }
        this.$store.dispatch('updateProfessor', formData)
        this.$root.$children[0].$refs.toastr.s('Professor info is updated', 'Success')
        this.$root.$children[0].$refs.toastr.i('Improve professor info.', 'EXP +5')
        this.editProfessor()
      },
      editProfessor () {
        if (this.user.level < 5) {
          this.$root.$children[0].$refs.toastr.w('User must be at least Level 5', 'Level Requirement')
        }
        else {
          this.first_name = this.professor.first_name
          this.last_name = this.professor.last_name
          this.email = this.professor.email
          this.office = this.professor.office
          this.personal_page = this.professor.personal_page
          this.edit = !this.edit
        }
      },

      postProfessorComment () {
        const formData = {
          id: this.$route.params.professor_id,
          content: this.comment_content,
          is_anonymous: this.is_anonymous
        }
        this.$store.dispatch('postProfessorComment', formData).then(() => {
          this.$root.$children[0].$refs.toastr.s('Comment on professor!', 'Success')
        })
      },

      momentTime (time) {
        /* global moment:true */
        return moment(time).fromNow()
      },
    },
    computed: {
      professor () {
        return this.$store.getters.professor_detail
      },
      professor_comments () {
        return this.$store.getters.professor_comments
      },
      user () {
        return this.$store.getters.me
      }
    },
    created () {
      // Once the vue instance is created, load data
      this.getProfessorData()
    },
    watch: {
      // execute getClassroomData if route changes
      '$route': 'getProfessorData',
    }
  }

</script>
