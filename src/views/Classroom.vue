<template>
    <div class="page animated fadeInRight">
        <div>
            <div class="row m-t-lg">
                <div class="col-md-8">
                    <div class="profile-image">
                        <img src="~img/major/math.jpg" class="img-circle circle-border m-b-md" alt="profile">
                    </div>
                    <div class="profile-info">
                        <div>
                            <h2 class="no-margins">
                                {{current_classroom.class_short}}
                                <button @click="addClassroom()" class="btn btn-primary" v-if="!user_in_classroom">
                                    <i class="fa fa-plus"></i>
                                    Add To My Classroom
                                </button>
                                <a v-else class="text-primary" title="Quit this classroom" @click="remClassroom()"><i
                                        class="fa fa-sign-out"></i> </a>
                            </h2>
                            <h4>
                                Section {{current_classroom.class_section}}
                            </h4>
                            <small>
                                {{current_classroom.description}}

                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <p>
                {{current_classroom.semester.name}} Semester Process
            </p>
            <div class="progress  m-b">
                <div :style="semesterProcess()" class="progress-bar progress-bar-primary">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <div class="ibox">
                    <div class="ibox-content">
                        <h3>Class Info</h3>
                        <table class="table table-stripped m-b-n-sm">
                            <tbody>
                            <tr>
                                <td class="no-borders">
                                    Time
                                </td>
                                <td class="no-borders">
                                    <strong>{{current_classroom.class_time.repeat}} {{current_classroom.class_time.formatted_start_time}}-{{current_classroom.class_time.formatted_end_time}}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Location
                                </td>
                                <td>
                                    <strong>{{current_classroom.class_time.location}}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Professor
                                </td>
                                <td>
                                    <router-link v-if="current_classroom.professors[0]" :to="{name:'professor', params:{professor_id:current_classroom.professors[0].id}}">
                                        {{current_classroom.professors[0].full_name}}
                                    </router-link>
                                    <span v-if="current_classroom.professors[1]">,</span>
                                    <router-link v-if="current_classroom.professors[1]" :to="{name:'professor', params:{professor_id:current_classroom.professors[1].id}}">
                                        {{current_classroom.professors[1].full_name}}
                                    </router-link>
                                </td>
                            </tr>
                            <!--<tr>-->
                            <!--<td>-->
                            <!--Office Hour-->
                            <!--</td>-->
                            <!--<td>-->

                            <!--</td>-->
                            <!--</tr>-->
                            <tr>
                                <td>
                                    <!--<a>Edit..</a>-->
                                </td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="ibox">
                    <div class="ibox-content">
                        <h3>Class Notes</h3>
                        <ul class="folder-list m-l-n-lg">
                            <li>
                                <router-link :to="{name:'classroomNotes', params:{classroom_id: current_classroom.id}}">
                                    <i class="fa fa-align-justify"></i> All Files
                                </router-link>
                            </li>
                            <li v-show="showFolder('Note')">
                                <router-link
                                        :to="{name:'classroomNotes', params:{classroom_id: current_classroom.id}, query:{folder:'Note'}}">
                                    <i class="fa fa-certificate"></i> Notes
                                    <span class="label label-warning pull-right">NEW!</span>
                                </router-link>
                            </li>
                            <li v-show="showFolder('Lecture')">
                                <router-link
                                        :to="{name:'classroomNotes', params:{classroom_id: current_classroom.id}, query:{folder:'Lecture'}}">
                                    <i class="fa fa-inbox"></i> Lectures
                                    <span class="label label-warning pull-right">NEW!</span>
                                </router-link>
                            </li>
                            <li v-show="showFolder('Lab')">
                                <router-link
                                        :to="{name:'classroomNotes', params:{classroom_id: current_classroom.id}, query:{folder:'Lab'}}">
                                    <i class="fa fa-flask"></i> Labs
                                    <span class="label label-warning pull-right">NEW!</span>
                                </router-link>
                            </li>
                            <li v-show="showFolder('Homework')">
                                <router-link
                                        :to="{name:'classroomNotes', params:{classroom_id: current_classroom.id}, query:{folder:'Homework'}}">
                                    <i class="fa fa-file-text-o"></i> Homework
                                    <span class="label label-warning pull-right">NEW!</span>
                                </router-link>
                            </li>
                            <li v-show="showFolder('Exam')">
                                <router-link
                                        :to="{name:'classroomNotes', params:{classroom_id: current_classroom.id}, query:{folder:'Exam'}}">
                                    <i class="fa fa-bolt"></i> Exams
                                    <span class="label label-warning pull-right">NEW!</span>
                                </router-link>
                            </li>
                            <li v-show="showFolder('Other')">
                                <router-link
                                        :to="{name:'classroomNotes', params:{classroom_id: current_classroom.id}, query:{folder:'Other'}}">
                                    <i class="fa fa-bolt"></i> Others
                                    <span class="label label-warning pull-right">NEW!</span>
                                </router-link>
                            </li>
                        </ul>
                        <router-link :to="{name:'classroomNotes', params:{classroom_id: current_classroom.id}}">Upload new..</router-link>
                    </div>
                </div>
                <div class="ibox">
                    <div class="ibox-content">
                        <h3>Classmates</h3>
                        <div class="user-friends row">
                            <router-link v-if="index!==18" class="col-sm-2" v-for="(student, index) in current_classroom.students" :to="{name:'userDetail', params:{user_id:student.id}}">
                                <img alt="image" class="img-circle"
                                     :src="student.avatar1x">
                            </router-link>
                        </div>
                        <p>
                            <router-link
                                    :to="{name:'classroomStudents', params:{classroom_id:$route.params.classroom_id}}"
                                    class="m-t">More..
                            </router-link>
                        </p>
                    </div>
                </div>
                <div class="ibox hidden-md">
                    <div class="ibox-content">
                        <h3>Create a Study Group Meeting</h3>
                        <h5>Topic</h5>
                        <input placeholder="Review Exam1" v-model="meeting_topic" class="form-control">
                        <h5>Location</h5>
                        <input placeholder="IST 231" v-model="meeting_location" class="form-control">
                        <h5>Time</h5>
                        <input placeholder="4/12/2017 5:00pm" id="meeting-time" name="meeting-time" v-model="meeting_time" class="form-control">
                        <br>
                        <div class="row">
                            <div class="col-sm-4">
                                <input type="radio" id="check1" value="1" name="check" v-model="meeting_last">
                                <label for="check1"></label> 1 Hour
                            </div>
                            <div class="col-sm-4">
                                <input type="radio" id="check2" value="2" name="check" v-model="meeting_last">
                                <label for="check2"></label> 2 Hours
                            </div>
                            <div class="col-sm-4">
                                <input type="radio" id="check3" value="3" name="check" v-model="meeting_last">
                                <label for="check3"></label> 3 Hours
                            </div>
                        </div>
                        <br>
                        <button @click="postTask()" class="btn btn-sm btn-primary"> Create!</button>

                        <a class="m-l" target="_blank" href="http://psu.libcal.com/spaces"> Penn Sate Lib Reserve Link</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="ibox float-e-margins" v-show="user_in_classroom" id="new-moment">
                    <div class="ibox-title">
                        <div class="input-group">
                            <textarea class="form-control" v-model.lazy="content"
                                      placeholder="Wanna say something?"></textarea>
                            <span class="input-group-addon btn btn-primary" @click="showDropzone"> <i
                                    class="fa fa-camera"></i> </span>
                        </div>
                        <upload v-if="dropzone" ref="dropzone"></upload>
                    </div>
                    <div class="ibox-content" style="padding:10px 10px 15px">
                        <div class="m-b-10">
                            <input type="checkbox" v-model="question" id="check" name="check" required>
                            <label for="check"></label>
                            Post as a question
                            <button @click="postMoment" data-dismiss="modal" class=" btn btn-sm btn-primary pull-right">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
                <div class="social-feed-box" v-for="moment in moments">
                    <div class="pull-right social-action dropdown">
                        <button data-toggle="dropdown" class="dropdown-toggle btn-white">
                            <i class="fa fa-angle-down"></i>
                        </button>
                        <ul class="dropdown-menu m-t-xs">
                            <li><a @click="addReport(moment.id)">Report</a></li>
                            <li v-if="moment.creator.id === user_id"><a @click="delMoment(moment.id)">Delete</a></li>
                            <li v-if="moment.creator.id === user_id && moment.solved === false">
                                <a @click="addSolve(moment.id)">Mark as solved</a>
                            </li>
                        </ul>
                    </div>
                    <div class="social-avatar">
                        <router-link :to="{name:'userDetail', params:{user_id:moment.creator.id}}" class="pull-left">
                            <img :src="moment.creator.avatar1x" alt="image" class="img-circle">
                        </router-link>
                        <div class="media-body">
                            <router-link :to="{name:'userDetail', params:{user_id:moment.creator.id}}">
                                {{moment.creator.full_name}} <span class="label label-warning">Level {{moment.creator.level}}</span>
                            </router-link>
                            <span v-show="moment.solved" class="badge badge-primary">Solved</span>
                            <span v-show="moment.solved===false" class="badge badge-info">Question</span>
                            <small class="text-muted">{{momentTime(moment.created)}}</small>
                        </div>
                    </div>
                    <div class="social-body">
                        <p>
                            {{moment.content}}
                        </p>
                        <img v-if="moment.images" :src="moment.images" class="img-responsive">
                        <div class="btn-group">
                            <button @click="addLike(moment)" class="btn btn-white btn-xs">
                                <i class="fa fa-thumbs-up"></i> {{moment.likes}} Like this!
                            </button>
                            <button @click="showCommentBox(moment)" class="btn btn-white btn-xs">
                                <i class="fa fa-comments"></i> Comment
                            </button>
                        </div>
                    </div>
                    <div class="social-footer" v-show="moment.comments.length > 0 || moment.id === comment_id">
                        <div class="social-comment" v-for="comment in moment.comments">
                            <router-link :to="{name:'userDetail', params:{user_id:comment.creator.id}}"
                                         class="pull-left">
                                <img class="img-circle" alt="image"
                                     :src="comment.creator.avatar1x">
                            </router-link>
                            <div class="media-body">
                                <router-link :to="{name:'userDetail', params:{user_id:comment.creator.id}}">
                                    {{comment.creator.full_name}}
                                    <span class="label label-warning">Level {{comment.creator.level}}</span>
                                </router-link>
                                <br/>

                                <small class="text-muted">{{momentTime(comment.created)}}</small>
                                <br/>
                                {{comment.content}}
                            </div>
                        </div>
                        <div class="social-comment" v-show="moment.id === comment_id">
                            <a href="" class="pull-left">

                                <img alt="image" :src="user_avatar">
                            </a>
                            <div class="media-body">
                                <textarea class="form-control" v-model="comment_content"
                                          @keyup.enter="postComment($event, moment.question)" placeholder="Write comment..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-b-lg">
                    <button @click="loadMomentByPage()" class="btn btn-default btn-sm btn-block"><i class="fa fa-chevron-down"></i> Load More</button>
                </div>
            </div>
            <div class="col-lg-4">
                <task></task>
            </div>
        </div>
    </div>
</template>
<script>
  import ClassroomTask from 'components/ClassroomTask'
  import Upload from 'components/UploadImg'

  export default {
    name: 'Classroom',
    head: {
      title: {inner: 'Classroom'}
    },
    components: {
      'upload': Upload,
      'task': ClassroomTask,
    },
    data () {
      return {
        // moment
        content: '',
        question: false,
        dropzone: false,
        moment_page: 1,
        // comment
        comment_content: '',
        comment_id: -1,
        // meeting
        meeting_topic: '',
        meeting_location: '',
        meeting_time: '',
        meeting_last: 1,
      }
    },
    methods: {
      // Data Loading
      getClassroomData () {
        this.$store.dispatch('getClassroom', this.$route.params.classroom_id)
      },
      // Classroom Add/Drop
      addClassroom () {
        this.$store.dispatch('addClassroom', this.$route.params.classroom_id)
          .then(() => {
            this.$root.$children[0].$refs.toastr.s('The classroom is added to your schedule, refresh to see the change', 'Success')
            this.$root.$children[0].$refs.toastr.i('Add Classroom', 'EXP +10')
            this.$store.dispatch('getClassroom', this.$route.params.classroom_id)
          })
      },
      remClassroom () {
        this.$store.dispatch('remClassroom', this.$route.params.classroom_id)
          .then(() => {
            this.$root.$children[0].$refs.toastr.s('The classroom is removed from your schedule, refresh to see the change', 'Success')
            this.$store.dispatch('getClassroom', this.$route.params.classroom_id)
          })
      },
      // Moments
      addLike (moment) {
        this.$store.dispatch('addMomentLike', moment.id)
        moment.likes += 1
      },
      addReport (pk) {
        this.$store.dispatch('reportMoment', pk)
      },
      addSolve (pk) {
        this.$store.dispatch('solveMoment', pk)
      },
      postMoment () {
        if (this.user.is_verified) {
          const formData = {
            content: this.content,
            classroom_id: this.$route.params.classroom_id,
            question: this.question
          }
          this.$store.dispatch('postMoment', formData).then(() => {
            this.content = ''
            this.dropzone = false
            if (this.question)
              this.$root.$children[0].$refs.toastr.i('New Classroom Question', 'EXP +5')
            else
              this.$root.$children[0].$refs.toastr.i('New Classroom Post', 'EXP +1')
          })
        }
        else {
          this.$root.$children[0].$refs.toastr.w('You need to verify your email to post in classroom.', 'Email Unverified')
        }
      },
      loadMomentByPage () {
        this.moment_page = this.moment_page + 1
        this.$store.dispatch('getClassroomMomentsByPage', this.moment_page)
      },
      delMoment (pk) {
        if (this.userLevel < 3) {
          this.$root.$children[0].$refs.toastr.w('You must be at least Level 3 to delete moment.', 'Level Requirement')
          return
        }
        this.$store.dispatch('delMoment', pk)
      },
      postComment (e, question) {
        if (!this.user.is_verified) {
          this.$root.$children[0].$refs.toastr.w('You need to verify your email to comment in classroom.', 'Email Unverified')
          this.comment_content = ''
          this.comment_id = -1
          return
        }

        e.preventDefault()
        const data = {
          formData: {content: this.comment_content},
          id: this.comment_id,
        }
        this.$store.dispatch('postMomentComment', data)

        if (question)
          this.$root.$children[0].$refs.toastr.i('New Question Answer', 'EXP +5')
        else
          this.$root.$children[0].$refs.toastr.i('New Classroom Comment', 'EXP +1')

        this.comment_content = ''
        this.comment_id = -1
      },
      // Utils
      showFolder (name) {
        for (let i in this.current_classroom.folders) {
          if (this.current_classroom.folders[i].name === name)
            return true
        }
        return false
      },
      momentTime (time) {
        /* global moment:true */
        return moment(time).fromNow()
      },
      semesterProcess () {
        /* global moment:true */
        let s = moment(this.current_classroom.semester.formatted_start_date)
        let e = moment(this.current_classroom.semester.formatted_end_date)
        let t = moment()
        const total = e.diff(s, 'days')
        const passed = t.diff(s, 'days')
        let percent = Math.round((passed / total) * 100) + '%'
        return 'width:' + percent
      },
      // UI Switches
      showCommentBox (moment) {
        this.comment_content = ''
        this.comment_id = moment.id
      },
      showDropzone () {
        this.dropzone = !this.dropzone
      },
      // Group Meeting
      postTask () {
        /* global Date:true, moment:true */
        if (this.meeting_topic && this.meeting_time && this.meeting_location) {
          let start = moment(this.meeting_time, 'MM/DD/YYYY hh:mm A').format('YYYY-MM-DDTHH:mm:ss')
          let end = moment(this.meeting_time, 'MM/DD/YYYY hh:mm A').add(this.meeting_last, 'hours').format('YYYY-MM-DDTHH:mm:ss')

          const data = {
            formData: {
              task_name: this.meeting_topic,
              description: 'Study group meeting by' + this.user_full_name,
              start: start,
              end: end,
              location: this.meeting_location,
              category: 5,
              task_of_classroom: parseInt(this.$route.params.classroom_id),
            },
            pk: this.$route.params.classroom_id
          }

          this.$store.dispatch('postClassroomTask', data).then(() => {
            this.$root.$children[0].$refs.toastr.s('New task is added to classroom, refresh to see the change', 'Success')
            this.$root.$children[0].$refs.toastr.i('New Classroom Task', 'EXP +5')
          })

          this.clearTask()

        } else {
          this.task_errMsg = 'Did you miss something?'
        }
      },
      clearTask () {
        this.meeting_topic = ''
        this.meeting_location = ''
        this.meeting_time = ''
        this.meeting_last = 1
      }
    },
    computed: {
      current_classroom () {
        return this.$store.getters.currentClassroom
      },
      user_in_classroom () {
        return this.$store.getters.userInClassroom
      },
      moments () {
        return this.$store.getters.classroomMoments
      },
      user_avatar () {
        return this.$store.getters.userAvatar
      },
      user_full_name () {
        return this.$store.getters.userFullName
      },
      professors () {
        return this.$store.getters.classroomProfessors
      },
      user_id () {
        return this.$store.getters.userID
      },
      user () {
        return this.$store.getters.me
      }

    },
    created () {
      // Once the vue instance is created, load data
      this.getClassroomData()
    },
    watch: {
      // execute getClassroomData if route changes
      '$route': 'getClassroomData',
      // clear date info if user choosed different task type
      // 'task_category': 'clearTask',
      // 'task_subcategory': 'clearTask'
    },
    mounted () {
      /* global $:true */
      $('#meeting-time').datetimepicker()
        .on('dp.change', () => { this.meeting_time = $('#meeting-time').val() })
    }
  }

</script>
