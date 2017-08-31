<template>
    <div>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Add New</h2>
                <ol class="breadcrumb">
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>
                    </li>
                    <li>
                        <a>Classroom</a>
                    </li>
                    <li class="active">
                        <strong>Add New</strong>
                    </li>
                </ol>
            </div>
            <div class="col-lg-2">
            </div>
        </div>
        <div class="wrapper wrapper-content  animated fadeInRight">
            <div class="row">
                <div class="col-sm-8">
                    <div class="ibox">
                        <div class="ibox-content">
                            <h2>Search Your Class Here</h2>
                            <p>Just simply type class name 'MATH 140' or class code '23365'</p>
                            <div class="input-group">
                                <input type="text" placeholder="ex: 123456 or Math 141 or cmpsc121" @keydown.enter="classroomSearch($event)" v-model="search_token" class="input form-control">
                                <span class="input-group-btn">
                        <button type="button" @click="classroomSearch($event)" class="btn btn btn-primary"> <i class="fa fa-search"></i> Search</button>
                        </span>
                            </div>
                            <div class="clients-list">
                                <ul class="nav nav-tabs">
                                    <div class="full-height-scroll">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-hover">
                                                <thead>
                                                <tr v-if="resultLength!==0">
                                                    <th>Class code</th>
                                                    <th>Class name</th>
                                                    <th>Class section</th>
                                                    <th>Classmates</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-if="resultLength===0 && search_result_returned">
                                                    <td class="text-center">No result</td>
                                                </tr>
                                                <tr v-if="search_start && !search_result_returned">
                                                    <td class="text-center">
                                                        <spinner></spinner>
                                                    </td>
                                                </tr>
                                                <tr v-for="classroom in searchResult">
                                                    <td><a data-toggle="tab" v-on:click="selectClassroom(classroom)" class="client-link">{{classroom.class_code}}</a></td>
                                                    <td>{{classroom.class_short}}</td>
                                                    <td> Sec {{classroom.class_section}}</td>
                                                    <td><i class="fa fa-group"></i> {{classroom.students_count}}</td>
                                                    <td class="client-status"><span class="label label-primary"><a data-toggle="tab" v-on:click="selectClassroom(classroom)" class="client-link">Show Detail</a></span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="ibox" v-show="selected_classroom.id === 0">
                        <div class="ibox-content">
                            <h2 class="text-center"> No Classroom Selected </h2>
                        </div>
                    </div>
                    <div class="ibox" v-if="selected_classroom.id !== 0">
                        <div class="ibox-content">
                            <div class="tab-content">
                                <div class="tab-pane active">
                                    <div class="row m-b-lg">
                                        <div class="col-lg-4 text-center">
                                            <h2>{{selected_classroom.class_short}}</h2>
                                            <h5>Section {{selected_classroom.class_section}}</h5>
                                        </div>
                                        <div class="col-lg-8">
                                            <strong>Description</strong>
                                            <p>{{selected_classroom.description}}</p>
                                        </div>
                                    </div>
                                    <div class="client-detail">
                                        <div class="row m-b-lg">
                                            <div class="col-sm-6">
                                                <a @click="addClassroom(selected_classroom.id)" class="btn btn-primary btn-sm btn-block">
                                                    <i class="fa fa-plus"></i> Add to Schedule
                                                </a>
                                            </div>
                                            <div class="col-sm-6">
                                                <router-link :to="{name:'classroom', params:{classroom_id: selected_classroom.id}}" class="btn btn-info btn-sm btn-block">
                                                    <i class="fa fa-chevron-up"></i> Enter Classroom
                                                </router-link>
                                            </div>
                                        </div>
                                        <strong>Detail</strong>
                                        <ul class="list-group clear-list">
                                            <li class="list-group-item fist-item">
                                                Professor
                                                <router-link class="pull-right" v-if="selected_classroom.professors[0]" :to="{name:'professor', params:{professor_id:selected_classroom.professors[0].id}}">
                                                    {{selected_classroom.professors[0].full_name}}
                                                </router-link>
                                                <span class="pull-right" v-if="selected_classroom.professors[1]">,&nbsp;</span>
                                                <router-link class="pull-right" v-if="selected_classroom.professors[1]" :to="{name:'professor', params:{professor_id:selected_classroom.professors[1].id}}">
                                                    {{selected_classroom.professors[1].full_name}}
                                                </router-link>
                                            </li>
                                            <li class="list-group-item">
                                                Class Time
                                                <strong class="pull-right">{{formatClassTime}}</strong>
                                            </li>
                                            <li class="list-group-item">
                                                Location
                                                <strong class="pull-right">{{classLocation}}</strong>
                                            </li>
                                        </ul>
                                        <strong>Latest Activities</strong>
                                        <strong>Class Files</strong>
                                        <ul class="folder-list m-t" style="padding: 0">
                                            <li>
                                                <router-link :to="{name:'classroomNotes', params:{classroom_id: selected_classroom.id}}">
                                                    <i class="fa fa-align-justify"></i> All Files
                                                </router-link>
                                            </li>
                                            <li v-show="showFolder('Note')">
                                                <router-link :to="{name:'classroomNotes', params:{classroom_id: selected_classroom.id}, query:{folder:'Note'}}">
                                                    <i class="fa fa-certificate"></i> Notes <span class="label label-warning pull-right">16</span>
                                                </router-link>
                                            </li>
                                            <li v-show="showFolder('Lecture')">
                                                <router-link :to="{name:'classroomNotes', params:{classroom_id: selected_classroom.id}, query:{folder:'Lecture'}}">
                                                    <i class="fa fa-inbox"></i> Lectures
                                                </router-link>
                                            </li>
                                            <li v-show="showFolder('Lab')">
                                                <router-link :to="{name:'classroomNotes', params:{classroom_id: selected_classroom.id}, query:{folder:'Lab'}}">
                                                    <i class="fa fa-flask"></i> Labs
                                                </router-link>
                                            </li>
                                            <li v-show="showFolder('Homework')">
                                                <router-link :to="{name:'classroomNotes', params:{classroom_id: selected_classroom.id}, query:{folder:'Homework'}}">
                                                    <i class="fa fa-file-text-o"></i> Homeworks <span class="label label-danger pull-right">2</span>
                                                </router-link>
                                            </li>
                                            <li v-show="showFolder('Exam')">
                                                <router-link :to="{name:'classroomNotes', params:{classroom_id: selected_classroom.id}, query:{folder:'Exam'}}">
                                                    <i class="fa fa-bolt"></i> Exams
                                                </router-link>
                                            </li>
                                        </ul>
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
  import Spinner from 'components/Spinner'

  export default {
    name: 'AddClassroom',
    head: {
      title: {inner: 'New Classroom'}
    },
    components: {
      'spinner': Spinner
    },
    data: function () {
      return {
        search_token: '',
        selected_classroom: {
          id: 0,
          class_time: {location: 0}
        },
        search_start: false,
        search_result_returned: false
      }
    },
    methods: {
      classroomSearch (e) {
        e.preventDefault()
        this.search_start = true
        this.search_result_returned = false
        this.$store.dispatch('classroomSearch', {search: this.search_token})
          .then(() => {
            this.search_result_returned = true
          })
          .catch(() => {
            this.search_result_returned = true
            this.$root.$children[0].$refs.toastr.e('Ops, something wrong, please try again later', 'Error')
          })
      },
      selectClassroom (classroom) {
        this.selected_classroom = classroom
      },
      addClassroom (id) {
        this.$store.dispatch('addClassroom', id)
          .then(() => {
            this.$root.$children[0].$refs.toastr.s('The classroom is added to your schedule', 'Success')
            this.$root.$children[0].$refs.toastr.i('Add Classroom', 'EXP +10')
          })
          .catch((error) => {
            this.$root.$children[0].$refs.toastr.w(error.body.detail, 'Ops')

          })
      },
      classroomURL (classroom) {
        const url = '/classroom/id/' + classroom.id
        this.$router.push(url)
      },
      showFolder (name) {
        for (let i in this.selected_classroom.folders) {
          if (this.selected_classroom.folders[i].name === name)
            return true
        }
        return false
      },
    },
    computed: {
      searchResult () {
        return this.$store.getters.classSearchResults
      },
      resultLength () {
        return this.$store.getters.classSearchResults.length
      },
      formatClassTime () {
        if (this.selected_classroom) {
          if (this.selected_classroom.class_time.repeat) {
            /* global moment:true */
            return this.selected_classroom.class_time.repeat + ' ' +
              moment(this.selected_classroom.class_time.formatted_start_time, 'HH:mm:ss').format('LT') +
              '-' +
              moment(this.selected_classroom.class_time.formatted_end_time, 'HH:mm:ss').format('LT')
          } else return 'WEB'
        } else return ''
      },
      classLocation () {
        if (this.selected_classroom) {
          return this.selected_classroom.class_time.location
        } else return ''
      }
    }
  }

</script>
