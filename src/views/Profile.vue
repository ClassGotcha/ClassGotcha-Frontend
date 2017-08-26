<template>
    <div>
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
                        <img alt="image" class="img-circle m-t-xs img-responsive"
                             :src="user.avatar2x">
                    </td>

                    <td class="desc">
                        <h3>
                            <p class="text-navy">
                                {{user.full_name}}
                                <span><small> @{{user.username}} </small></span>
                            </p>

                        </h3>
                        <p>
                            <b>Level</b>: <span class="label label-warning">{{user.level}}</span>
                        </p>
                        <p>
                            <b>Exp</b>: ({{user.exp}}/100)
                        <div class="progress progress-striped active m-b-sm">
                            <div :style="'width: '+(user.exp+1)+'%'" class="progress-bar"></div>
                        </div>
                    </td>
                    <td>
                    </td>
                </tr>
                </tbody>
            </table>
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
                                                    <li class=""><a href="#tab-3" data-toggle="tab">Earned Badges</a>
                                                    <li class=""><a href="#tab-4" data-toggle="tab">In Progress Badges</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="panel-body">
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tab-1">
                                                    <div class="feed-activity-list">
                                                        <div class="well" v-if="user_moments.length === 0">

                                                            <p class="text-center"> Oops, nothing here～</p>
                                                        </div>

                                                        <div class="feed-element" v-for="moment in user_moments">
                                                            <a href="#" class="pull-left">
                                                                <img alt="image" class="img-circle"
                                                                     :src="moment.creator.avatar1x">
                                                            </a>
                                                            <div class="media-body">
                                                                <strong>{{moment.creator.full_name}}</strong>
                                                                post 1 moment in
                                                                <router-link :to="{name:'classroom', params:{'classroom_id':moment.classroom.id}}">
                                                                    <b>{{moment.classroom.class_short}} - {{moment.classroom.class_section}}</b>.
                                                                </router-link>
                                                                <br>
                                                                <small class="text-muted">{{momentFormat(moment.created)}}</small>
                                                                <div class="well">
                                                                    <b>{{moment.content}}</b>
                                                                </div>
                                                                <button class="btn btn-white btn-xs" @click="addLike(moment)"><i
                                                                        class="fa fa-thumbs-up"></i> {{moment.likes}} Like this!
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="tab-2">
                                                    <div class="form-horizontal">
                                                        <div class="form-group m-t-md">
                                                            <label class="col-sm-2 col-lg-1 control-label">Email</label>
                                                            <div class="col-sm-4">
                                                                <input disabled
                                                                       :placeholder="user.email"
                                                                       class="form-control">
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">Password</label>
                                                            <div class="col-sm-4">
                                                                <button @click="change_password = !change_password" class="btn btn-white">
                                                                    <i class="fa fa-lock"></i> Change password
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="form-group" v-show="change_password">
                                                            <div class="col-sm-8  col-lg-4 col-sm-offset-2 col-lg-offset-1">
                                                                <input placeholder="Current Password" v-model="old_password" class="form-control m-b">
                                                                <input placeholder="New Password" v-model="new_password" class="form-control m-b">
                                                                <p class="text-danger">{{password_msg}}</p>
                                                                <button @click="change_password = !change_password" class="btn btn-white m-r">Cancel</button>
                                                                <button @click="passwordChange()" class="btn btn-primary">Submit</button>
                                                            </div>
                                                        </div>

                                                        <div class="hr-line-dashed"></div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">Avatar</label>
                                                            <div class="col-sm-5 col-xm-10">
                                                                <img alt="image" class="img-circle"
                                                                     :src="user.avatar2x">
                                                                <button class="btn btn-white col-sm-offset-1"
                                                                        @click="toggleShow"> {{change_avatar_button_message}}
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-sm-7 col-sm-offset-2">
                                                                <upload-avatar
                                                                        @crop-success="cropImg"
                                                                        @crop-upload-success="cropUploadSuccess"
                                                                        v-model="show"
                                                                        :width="100"
                                                                        :height="100"
                                                                        :headers="headers"
                                                                        img-format="png">
                                                                </upload-avatar>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">Name</label>
                                                            <div class="col-sm-4 col-md-4 col-lg-2">
                                                                <input placeholder="First Name"
                                                                       v-model="user.first_name"
                                                                       class="form-control">
                                                            </div>
                                                            <div class="col-sm-4 col-md-4 col-lg-2">
                                                                <input placeholder="Last Name"
                                                                       v-model="user.last_name"
                                                                       class="form-control">
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">Major</label>
                                                            <div class="col-sm-8 col-md-8 col-lg-4">
                                                                <select class="form-control" v-model="user.major"
                                                                        name="account">
                                                                    <option v-for="major in majors" :value="major.id">
                                                                        {{major.major_short}}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">Class of</label>
                                                            <div class="col-sm-8 col-md-8 col-lg-4">
                                                                <select class="form-control" v-model="user.school_year"
                                                                        name="account">
                                                                    <option value="2016">2016</option>
                                                                    <option value="2017">2017</option>
                                                                    <option value="2018">2018</option>
                                                                    <option value="2019">2019</option>
                                                                    <option value="2020">2020</option>
                                                                    <option value="2021">2021</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">About me</label>
                                                            <div class="col-sm-8 col-md-8 col-lg-4">
                                                                <textarea type="text"
                                                                          v-model="user.about_me"
                                                                          class="form-control">
                                                                </textarea>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">Gender</label>
                                                            <div class="col-sm-8 col-md-8 col-lg-4">
                                                                <select class="form-control"
                                                                        v-model="user.gender"
                                                                        name="account">
                                                                    <option value="Idw">I don't want to tell</option>
                                                                    <option value="Man">Male</option>
                                                                    <option value="Woman">Female</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">Phone</label>
                                                            <div class="col-sm-8 col-md-8 col-lg-4">
                                                                <input v-mask="'(###) ###-####'" placeholder="(###) ###-####" class="form-control">
                                                            </div>
                                                        </div>

                                                        <div class="hr-line-dashed"></div>

                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">Facebook</label>
                                                            <div class="col-sm-8 col-md-8 col-lg-4">
                                                                <input class="form-control">
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">LinkedIn</label>
                                                            <div class="col-sm-8 col-md-8 col-lg-4">
                                                                <input class="form-control">
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">Twitter</label>
                                                            <div class="col-sm-8 col-md-8 col-lg-4">
                                                                <input class="form-control">
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="col-sm-2 col-lg-1 control-label">SnapChat</label>
                                                            <div class="col-sm-8 col-md-8 col-lg-4">
                                                                <input class="form-control">
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
                                                            <th>Badge Name</th>
                                                            <th>Description</th>
                                                            <th>Badge Level</th>
                                                            <th>Action Required</th>
                                                            <th>Achieved Time</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="badge in user.badges" v-if="badge.finished">
                                                            <td>
                                                                <span class="label label-primary">
                                                                    <i class="fa fa-check"></i>  Achieved
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <b class="text-warning">{{badge.badge_type.name}}</b>
                                                            </td>
                                                            <td>
                                                                {{badge.badge_type.description}}
                                                            </td>
                                                            <td>
                                                                Level <b class="text-warning">{{badge.badge_type.level}}</b>
                                                            </td>
                                                            <td>
                                                                {{badge.badge_type.action_required}}
                                                            </td>
                                                            <td>
                                                                {{momentDate(badge.finished)}}
                                                            </td>

                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane" id="tab-4">
                                                    <table class="table table-striped">

                                                        <thead>
                                                        <tr>
                                                            <th>Status</th>
                                                            <th>Badge Name</th>
                                                            <th>Description</th>
                                                            <th>Badge Level</th>
                                                            <th>Action Required</th>
                                                            <th>Action Completed</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>

                                                        <tr v-for="badge in user.badges" v-if="!badge.finished">
                                                            <td>
                                                                <span class="label label-primary">
                                                                    <i class="fa fa-clock"></i>  In Progress
                                                                </span>
                                                            </td>

                                                            <td>
                                                                <b class="text-warning">{{badge.badge_type.name}}</b>
                                                            </td>
                                                            <td>
                                                                {{badge.badge_type.description}}
                                                            </td>
                                                            <td>
                                                                Level <b class="text-warning">{{badge.badge_type.level}}</b>
                                                            </td>
                                                            <td>
                                                                {{badge.badge_type.action_required}}
                                                            </td>
                                                            <td>
                                                                {{badge.counter}}
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
  import * as cookie from '../utils/cookie'

  export default {
    name: 'Profile',
    head: {
      title: {inner: 'My Profile'}
    },
    components: {
      'upload-avatar': Upload
    },
    data: () => {
      return {
        show: false,
        user: {
          about_me: '',
          email: '',
          birthday: null,
          created: '',
          gender: '',
          first_name: '',
          classrooms: [],
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

        // password reset
        old_password: '',
        new_password: '',
        change_password: false,
        password_msg: '',

        // avatar
        change_avatar_button_message: 'Change avatar',
        img_data: '',
        headers: {
          'Authorization': 'JWT ' + cookie.getCookie('token'),
          'X-CSRFToken': cookie.getCookie('csrftoken')
        }

      }
    },
    methods: {
      momentFormat (time) {
        /* global moment:true */
        return moment(time).format('h:mm a - MM.D.YYYY')
      },
      momentDate (time) {
        /* global moment:true */
        return moment(time).format('MM.D.YYYY')
      },
      passwordChange () {
        if (!(this.old_password && this.new_password)) {
          this.password_msg = 'Both field is required'
          return
        }
        const formData = {
          'old_password': this.old_password,
          'new_password': this.new_password
        }
        this.$store.dispatch('passwordChange', formData)
          .then(() => {
            this.password_msg = 'Your Password is updated. Please login use your new password.'
            setTimeout(this.$store.dispatch('logout'), 3000)
          })
          .catch((error) => {
            this.password_msg = error.data.detail
          })
      },
      postChange () {
        this.$store.dispatch('updateSelf', this.user)
          .then(() => {
            this.$store.dispatch('getSelf')
            this.$root.$children[0].$refs.toastr.s('Your Info is updated.', 'Success')
          })
      },
      loadData () {
        this.user = this.$store.getters.me

        this.$store.dispatch('getMajors')
          .then(() => {
            this.majors = this.$store.getters.majors
          })

        this.$store.dispatch('getMoments')
          .then((response) => {
            this.user_moments = response
          })
      },
      addLike (moment) {
        this.$store.dispatch('addMomentLike', moment.id)
        moment.likes += 1
      },
      // UI trigers
      toggleShow () {
        this.show = !this.show
        if (this.show)
          this.change_avatar_button_message = 'Close'
        else
          this.change_avatar_button_message = 'Change avatar'
      },
      majorByID (id) {
        for (let i in this.majors) {
          if (this.majors[i].id === id)
            return this.majors[i].major_short
        }
        return ''
      },
      cropImg (img_data) {
        this.img_data = img_data
      },
      cropUploadSuccess (jsonData, field) {
        this.$store.dispatch('getSelf')
          .then(() => {
            this.user = this.$store.getters.me
            this.$root.$children[0].$refs.toastr.s('Your Avatar is updated.', 'Success')
            // TODO: only +exp first time
            this.$root.$children[0].$refs.toastr.i('First time change avatar', 'EXP +25')
          })
      }
    },
    created () {
      this.loadData()
    },
    // watch: {
    //     // execute getClassroomData if route changes
    //     '$route': 'getUser',
    // },
  }

</script>
