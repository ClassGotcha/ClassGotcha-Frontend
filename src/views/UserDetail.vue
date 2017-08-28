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
                        <img alt="image" class="img-circle m-t-xs img-responsive"
                             :src="user.avatar2x">
                    </td>

                    <td class="desc">
                        <h3 class="text-navy">
                            {{user.full_name}} <span class="label label-warning">Level {{user.level}}</span>
                        </h3>


                        <b>Exp</b>: ({{user.exp}}/100)
                        <div class="progress progress-striped active m-b-sm">
                            <div :style="'width: '+(user.exp+1)+'%'" class="progress-bar"></div>
                        </div>


                        <b>About me</b>:
                        <br>
                        {{user.about_me}}

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
                                                    <li class="active">
                                                        <a href="#tab-0"
                                                           data-toggle="tab">Class Schedule</a>
                                                    </li>

                                                    <li class="">
                                                        <a href="#tab-1"
                                                           data-toggle="tab">Rencent activity</a>
                                                    </li>

                                                    <li class="">
                                                        <a href="#tab-2"
                                                           data-toggle="tab">User Detail</a>
                                                    </li>

                                                    <li class="">
                                                        <a href="#tab-3"
                                                           data-toggle="tab">Badges</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="panel-body">
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tab-0">
                                                    <div class="well" v-if="user.privacy_setting[0]==='0'">
                                                        <p class="text-center"> Hided based on user's privacy setting</p>
                                                    </div>
                                                    <table class="table table-striped" v-if="user.privacy_setting[0]==='1'">
                                                        <thead>
                                                        <tr>
                                                            <th>Class Title</th>
                                                            <th>Section</th>
                                                            <th>Unit</th>
                                                            <th>Time</th>
                                                            <th>Students</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="classroom in user.classrooms">
                                                            <td> {{classroom.class_short}} </td>
                                                            <td> {{classroom.class_section}} </td>
                                                            <td> {{classroom.class_credit}} Unit(s) </td>
                                                            <td> {{classroom.class_time.repeat}} {{classroom.class_time.formatted_start_time}}-{{classroom.class_time.formatted_end_time}} </td>
                                                            <td>
                                                                <i class="fa fa-users"></i> {{classroom.students_count}}
                                                            </td>
                                                            <td>
                                                                <span class="label label-primary">
                                                                    <router-link :to="{name:'classroom', params:{classroom_id:classroom.id}}" class="client-link">Detail</router-link>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane" id="tab-1">
                                                    <div class="feed-activity-list">
                                                        <div class="well" v-if="user_moments.length === 0">
                                                            <p class="text-center"> Oops, nothing here～</p>
                                                        </div>
                                                        <div class="feed-element" v-for="moment in user_moments">
                                                            <a href="#" class="pull-left">
                                                                <img alt="image" class="img-circle" :src="moment.creator.avatar1x">
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
                                                    <div class="form-group m-t-md" v-if="user.privacy_setting[1]==='1'">
                                                        <b class="col-sm-2 control-label">Email</b>
                                                        <p>{{user.email}}</p>
                                                    </div>
                                                    <div class="form-group" v-if="user.privacy_setting[2]==='1'">
                                                        <b class="col-sm-2 control-label">Gender</b>
                                                        <p v-if="user.gender==='Man'">Male</p>
                                                        <p v-else-if="user.gender==='Woman'">Female</p>
                                                        <p v-else>I don't want to tell</p>
                                                    </div>

                                                    <div class="form-group" v-if="user.privacy_setting[3]==='1'">
                                                        <b class="col-sm-2 control-label">Phone</b>
                                                        <p v-if="user.phone">{{user.phone}}</p>
                                                        <br v-else>
                                                    </div>
                                                    <div class="form-group">
                                                        <b class="col-sm-2 control-label">Major</b>
                                                        <p v-if="user.major">{{user.major.major_short}}</p>
                                                        <br v-else>
                                                    </div>
                                                    <div class="form-group">
                                                        <b class="col-sm-2 control-label">Class of</b>
                                                        <p v-if="user.school_year">{{user.school_year}}</p>
                                                        <br v-else>
                                                    </div>
                                                    <hr>
                                                    <div class="form-group" v-if="user.privacy_setting[4]==='1'">
                                                        <b class="col-sm-2 control-label">Facebook</b>
                                                        <p v-if="user.facebook">{{user.facebook}}</p>
                                                        <br v-else>
                                                    </div>
                                                    <div class="form-group" v-if="user.privacy_setting[5]==='1'">
                                                        <b class="col-sm-2 control-label">LinkedIn</b>
                                                        <p v-if="user.linkedin">{{user.linkedin}}</p>
                                                        <br v-else>
                                                    </div>
                                                    <div class="form-group" v-if="user.privacy_setting[6]==='1'">
                                                        <label class="col-sm-2 control-label">Twitter</label>
                                                        <p v-if="user.twitter">{{user.twitter}}</p>
                                                        <br v-else>
                                                    </div>
                                                    <div class="form-group" v-if="user.privacy_setting[7]==='1'">
                                                        <label class="col-sm-2 control-label">SnapChat</label>
                                                        <p v-if="user.snapchat">{{user.snapchat}}</p>
                                                        <br v-else>
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
  import Spinner from 'components/Spinner'

  export default {
    name: 'UserDetail',
    head: {
      title: {inner: 'Profile'}
    },
    components: {
      'upload-avatar': Upload,
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
      momentFormat (time) {
        /* global moment:true */
        return moment(time).format('h:mm a - MM.D.YYYY')
      },
      momentDate (time) {
        /* global moment:true */
        return moment(time).format('MM.D.YYYY')
      },
      addFriend () {
        this.$store.dispatch('addFriend', this.$route.params.user_id)
          .then(() => {
            this.$root.$children[0].$refs.toastr.s('Your Request is sent.', 'Success')
            this.$root.$children[0].$refs.toastr.i('Send Friend Request', 'EXP +5')

          })
          .catch((error) => {
            this.$root.$children[0].$refs.toastr.e(error.body.detail, 'Error')
            console.log(error)
          })
      },
      isFriend () {
        for (let i in this.user.friends) {
          if (this.user.friends[i] === this.me.id)
            return true
        }
        return false
      },
      isPendingFriend () {
        for (let id in this.user.pending_friends) {
          if (id === this.me.id)
            return true
        }
        return false
      },
      addLike (moment) {
        this.$store.dispatch('addMomentLike', moment.id)
        moment.likes += 1
      },
      loadData () {
        this.$store.dispatch('getUser', this.$route.params.user_id)
          .then((response) => {
            this.user = response
          })
        this.$store.dispatch('getUserMoment', this.$route.params.user_id)
          .then((response) => {
            this.user_moments = response
          })
      },
    },
    computed: {
      me () {
        return this.$store.getters.me
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
