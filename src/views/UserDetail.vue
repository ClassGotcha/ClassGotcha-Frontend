<template>
    <spinner v-if="!user.full_name"></spinner>
    <div v-else>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-sm-4">
                <h2>Profile</h2>
                <ol class="breadcrumb">
                    <li>
                        <router-link to="{name:'home'}">Home</router-link>
                    </li>
                    <li class="active">
                        <strong>Profile</strong>
                    </li>
                </ol>
            </div>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <table class="table shoping-cart-table">
                <tbody>
                <tr>
                    <td width="90">
                        <img v-if="user.avatar" alt="image" class="img-circle m-t-xs img-responsive"
                             :src="user.avatar.avatar2x">
                        <avatar v-else class="img-circle m-t-xs img-responsive" :size="80"
                                :username="user.full_name"></avatar>
                    </td>

                    <td class="desc">
                        <h3>
                            <p class="text-navy">
                                {{user.full_name}}
                                <span><small> @{{user.username}} </small></span>
                            </p>

                        </h3>
                        <p>
                            <b>Level</b>:    <span class="label label-warning">Level {{user.level}}</span>
                        </p>
                        <p>
                            <b>Exp</b>:
                        <div class="progress progress-striped active m-b-sm">
                            <div style="width: 60%;" class="progress-bar"></div>
                        </div>
                        </p>

                        <p>
                            <b>Badges</b>:     under development      </p>

                    </td>
                    <td>
                        <h4>
                            <a href="#tab-2" data-toggle="tab" class="btn btn-white">Edit My Profile</a>
                        </h4>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="row">
                <div class="col-lg-12">

                </div>
                <div class="col-lg-7">

                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox">
                        <div class="ibox-content">
                            <div class="row m-t-sm">
                                <div class="col-lg-12">
                                    <div class="panel blank-panel">
                                        <div class="panel-heading">
                                            <div class="panel-options">
                                                <ul class="nav nav-tabs">
                                                    <li class="active"><a href="#tab-1" data-toggle="tab">Rencent activity</a>
                                                    </li>
                                                    <li class=""><a href="#tab-2"
                                                                    data-toggle="tab">Personal Information</a></li>
                                                    <li class=""><a href="#tab-3" data-toggle="tab">Badges Process</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="panel-body">
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tab-1">
                                                    <div class="feed-activity-list">

                                                        <div class="feed-element" v-for="moment in user_moments">
                                                            <a href="#" class="pull-left">
                                                                <img alt="image" class="img-circle"
                                                                     :src="moment.creator.avatar.avatar1x">
                                                            </a>
                                                            <div class="media-body ">
                                                                <strong>{{moment.creator.full_name}}</strong>
                                                                post 1 moment on Classroom <strong>{{moment.classroom}}</strong>.
                                                                <br>
                                                                <small class="text-muted">{{moment.created}}</small>
                                                                <div class="well">
                                                                    <b>{{moment.content}}</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="tab-2">
                                                    <div class="form-horizontal">
                                                        <div class="hr-line-dashed"></div>
                                                        <div class="form-group">
                                                            <label class="col-lg-2 control-label">Email</label>
                                                            <div class="col-lg-5"><input type="text" disabled
                                                                                         :placeholder="user.email"
                                                                                         class="form-control"></div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-lg-2 control-label">Username</label>
                                                            <div class="col-lg-5"><input type="text" disabled
                                                                                         :placeholder="user.username"
                                                                                         class="form-control"></div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-lg-2 control-label">Password</label>
                                                            <div class="col-lg-5">
                                                                <button class="btn btn-white" type="submit"><i
                                                                        class="fa fa-lock"></i> Change password
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="hr-line-dashed"></div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 control-label">Avatar</label>
                                                            <div class="col-sm-5">
                                                                <img v-if="user.avatar" alt="image" class="img-circle"
                                                                     :src="user.avatar.avatar2x">
                                                                <avatar v-else class="img-circle" :size="64"
                                                                        :username="user.full_name"></avatar>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 control-label">Name</label>
                                                            <div class="col-sm-4"><input type="text"
                                                                                         placeholder="First Name"
                                                                                         v-model="user.first_name"
                                                                                         class="form-control"></div>
                                                            <div class="col-sm-4"><input type="text"
                                                                                         placeholder="Last Name"
                                                                                         v-model="user.last_name"
                                                                                         class="form-control"></div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 control-label">About me</label>
                                                            <div class="col-sm-8">
                                                                <textarea type="text"
                                                                          v-model="user.about_me"
                                                                          class="form-control"></textarea></div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 control-label">Gender</label>
                                                            <div class="col-sm-4">
                                                                <select class="form-control" v-model="user.gender"
                                                                        name="account">
                                                                    <option value="Idw">I don't want to tell</option>
                                                                    <option value="Man">Man</option>
                                                                    <option value="Woman">Woman</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <!--<div class="form-group">
                                                        <label class="col-sm-2 control-label">Phone</label>
                                                        <div class="col-sm-4"><input type="text" v-mask="'(###) ###-####'" placeholder="(###) ###-####" class="form-control"></div>
                                                        </div>
                                                        <div class="form-group">
                                                        <label class="col-sm-2 control-label">Birthday</label>
                                                        <div class="col-sm-4"><input type="text" v-mask="'##-##-####'" placeholder="mm-dd-yyyy" class="form-control"></div>
                                                        </div>-->
                                                        <div class="hr-line-dashed"></div>
                                                        <div class="form-group">
                                                            <label class="col-lg-2 control-label">Major</label>
                                                            <div class="col-lg-5">
                                                                <select class="form-control" v-model="user.major"
                                                                        name="account">
                                                                    <option v-for="major in majors" :value="major.id">
                                                                        {{major.major_short}}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-lg-2 control-label">Class of</label>
                                                            <div class="col-lg-5">
                                                                <select class="form-control" v-model="user.school_year"
                                                                        name="account">
                                                                    <option>I'm class of...</option>
                                                                    <option>2016</option>
                                                                    <option>2017</option>
                                                                    <option>2018</option>
                                                                    <option>2019</option>
                                                                    <option>2020</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="hr-line-dashed"></div>
                                                        <div class="form-group">
                                                            <div class="col-sm-4 col-sm-offset-2">
                                                                <button class="btn btn-primary" @click="postChange()">
                                                                    Save changes
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="tab-3">
                                                    <table class="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Status</th>
                                                            <th>Title</th>
                                                            <th>Start Time</th>
                                                            <th>End Time</th>
                                                            <th>Comments</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <span class="label label-primary"><i
                                                                        class="fa fa-check"></i> Completed</span>
                                                            </td>
                                                            <td>
                                                                Create project in webapp
                                                            </td>
                                                            <td>
                                                                12.07.2014 10:10:1
                                                            </td>
                                                            <td>
                                                                14.07.2014 10:16:36
                                                            </td>
                                                            <td>
                                                                <p class="small">
                                                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                                                    making it look like readable.
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
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
  import Upload from 'components/UploadAvatar'
  import Avatar from 'vue-avatar'
  import Spinner from 'components/Spinner'

  export default {
    name: 'UserDetail',
    head: {
      title: {inner: 'Profile'}
    },
    components: {
      'upload-avatar': Upload,
      'avatar': Avatar.Avatar,
      'spinner': Spinner
    },
    data: () => {
      return {
        show: false,
        user: {
          about_me: '',
          email: '',
          birthday: null,
          full_name: '',
          avatar: '',
          first_name: '',
          classrooms: [],
          user_moments: [],
          phone: '',
          last_name: '',
          last_login: null,
          level: 1,
          major: '',
          pending_friends: '',
          professor: '',
          school_year: '',
          tasks: '',
          username: ''
        },
        majors: [],
        user_moments: [],
        img_data: '',
      }
    },
    methods: {
      editName () {
        // TODO
      },
      postChange () {
        this.$store.dispatch('updateSelf', this.user)
      },
      loadData () {
        this.$store.dispatch('getUser', this.$route.params.user_id)
          .then((response) => {
            this.user = response
            console.log(response)
          })
        this.$store.dispatch('getMajors')
          .then(() => {
            this.majors = this.$store.getters.majors
          })
        this.$store.dispatch('getMoments')
          .then((response) => {
            this.user_moments = response
          })
        // else {
        //     // TODO: cannot load user immediatily after dispath getUser
        //     this.$store.dispatch('getUser', this.$route.params.user_id)
        //     this.user = this.$store.getters.loadedUser
        // }
      },
      majorByID (id) {
        for (let i in this.majors) {
          if (this.majors[i].id === id)
            return this.majors[i].major_short
        }
        return ''
      },
    },
    created () {

      this.loadData()
    },
    watch: {
      // execute getClassroomData if route changes
      '$route': 'loadData',
    },
  }

</script>
