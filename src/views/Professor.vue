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
                                                            <a href="#" class="pull-left">
                                                                <img alt="image" class="img-circle" src="img/a3.jpg">
                                                            </a>
                                                            <div class="media-body ">
                                                                <small class="pull-right">2h ago</small>
                                                                <strong>Janet Rosowski</strong> add 1 photo on <strong>Monica Smith</strong>.
                                                                <br>
                                                                <small class="text-muted">2 days ago at 8:30am</small>
                                                            </div>
                                                        </div>
                                                        <div class="feed-element">
                                                            <a href="#" class="pull-left">
                                                                <img alt="image" class="img-circle" src="img/a4.jpg">
                                                            </a>
                                                            <div class="media-body ">
                                                                <small class="pull-right text-navy">5h ago</small>
                                                                <strong>Chris Johnatan Overtunk</strong> started following
                                                                <strong>Monica Smith</strong>. <br>
                                                                <small class="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                                                <div class="actions">
                                                                    <a class="btn btn-xs btn-white"><i class="fa fa-thumbs-up"></i> Like </a>
                                                                    <a class="btn btn-xs btn-white"><i class="fa fa-heart"></i> Love</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="feed-element">
                                                            <a href="#" class="pull-left">
                                                                <img alt="image" class="img-circle" src="img/a5.jpg">
                                                            </a>
                                                            <div class="media-body ">
                                                                <small class="pull-right">2h ago</small>
                                                                <strong>Kim Smith</strong> posted message on <strong>Monica Smith</strong> site. <br>
                                                                <small class="text-muted">Yesterday 5:20 pm - 12.06.2014</small>
                                                                <div class="well">
                                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                                    text ever since the 1500s. Over the years, sometimes
                                                                    by accident, sometimes on purpose (injected humour and
                                                                    the like).
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="feed-element">
                                                            <a href="#" class="pull-left">
                                                                <img alt="image" class="img-circle" src="img/profile.jpg">
                                                            </a>
                                                            <div class="media-body ">
                                                                <small class="pull-right">23h ago</small>
                                                                <strong>Monica Smith</strong> love <strong>Kim Smith</strong>.
                                                                <br>
                                                                <small class="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                                            </div>
                                                        </div>
                                                        <div class="feed-element">
                                                            <a href="#" class="pull-left">
                                                                <img alt="image" class="img-circle" src="img/a7.jpg">
                                                            </a>
                                                            <div class="media-body ">
                                                                <small class="pull-right">46h ago</small>
                                                                <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>.
                                                                <br>
                                                                <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
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
