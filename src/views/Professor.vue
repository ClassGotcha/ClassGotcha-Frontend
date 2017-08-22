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
                                            <strong> {{professor.office}} </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Department
                                        </td>
                                        <td>
                                            <strong>{{professor.department}}</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Email
                                        </td>
                                        <td>
                                            <strong>{{professor.email}}</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Personal Page
                                        </td>
                                        <td>
                                            <strong>{{professor.office}}</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rate
                                        </td>
                                        <td>
                                            {{professor.avg_rate.num__avg}}
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>


                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <button type="button" class="btn btn-default btn-sm btn-block"><i class="fa fa-edit"></i>
                                                Edit
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
                                                                {{classroom.class_time.repeat}} {{classroom.class_time.formatted_start_time}}-{{classroom.class_time.formatted_end_time}}
                                                            </td>
                                                            <td>
                                                                <i class="fa fa-users"></i> {{classroom.students_count}}
                                                            </td>
                                                            <td>
                                                                <span class="label label-primary"><router-link :to="{name:'classroom', params:{classroom_id:classroom.id}}"
                                                                                                               class="client-link">Detail</router-link>
                                                                </span>
                                                            </td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane" id="tab-2">
                                                    <div class="feed-activity-list">
                                                        <div class="feed-element">
                                                            <a href="#" class="pull-left">
                                                                <img alt="image" class="img-circle" src="img/a2.jpg">
                                                            </a>
                                                            <div class="media-body ">
                                                                <small class="pull-right">2h ago</small>
                                                                <strong>Mark Johnson</strong> posted message on <strong>Monica Smith</strong> site. <br>
                                                                <small class="text-muted">Today 2:10 pm - 12.06.2014</small>
                                                                <div class="well">
                                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                                    text ever since the 1500s. Over the years, sometimes
                                                                    by accident, sometimes on purpose (injected humour and
                                                                    the like).
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="feed-element">
                                                            <a class="pull-left">
                                                                <img class="img-circle">
                                                                <div class="author-info">
                                                                    <strong>name</strong><br><br>
                                                                    <span class="label label-warning">Level </span>
                                                                </div>
                                                            </a>
                                                            <div class="media-body">
                                                                <textarea class="form-control" v-model="comment_content"></textarea>
                                                                <div class="m-b-10 m-t-sm">
                                                                    <input type="checkbox" id="check" name="check"> <label for="check"></label>
                                                                    Post as anonymous
                                                                    <button data-dismiss="modal" class=" btn btn-sm btn-primary pull-right">
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
        comment_content: ''
      }
    },
    methods: {
      // Data Loading
      getProfessorData () {
        this.$store.dispatch('getProfessor', this.$route.params.professor_id)

        this.$store.dispatch('getProfessorComments', this.$route.params.professor_id)
      },
    },
    computed: {
      professor () {
        return this.$store.getters.professor_detail
      },
      professor_comments () {
        return this.$store.getters.professor_comments
      },
    },
    created () {
      // Once the vue instance is created, load data
      this.getProfessorData()
    },
    watch: {
      // execute getClassroomData if route changes
      '$route': 'getProfessorData'
    }
  }

</script>
