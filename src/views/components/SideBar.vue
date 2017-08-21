<template>
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul side-navigation class="nav metismenu" id="side-menu">
                <li class="nav-header">
                    <div class="logo-element-show">
                        ClassGotcha
                    </div>
                    <div class="logo-element">
                        CG
                    </div>
                </li>
                <li>
                    <router-link :to="{name: 'home'}">
                        <i class="fa fa-th-large"></i>
                        <span class="nav-label">Home</span>
                    </router-link>
                </li>

                <li>
                    <a>
                        <i class="fa fa-book"></i>
                        <span class="nav-label">Classroom</span>
                        <span class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level">
                        <li>
                            <router-link :to="{name:'addClassroom'}">+ Add New</router-link>
                        </li>
                        <li v-for="classroom in classrooms">
                            <router-link :to="{name: 'classroom', params:{classroom_id:classroom.id}}">
                                {{classroom.class_short}}
                            </router-link>
                        </li>
                    </ul>
                </li>
                <!--<li>
                <router-link :to="{name: 'myNotes'}">
                    <i class="fa fa-file-text"></i>
                    <span class="nav-label">My Notes</span>
                </router-link>
                </li>-->
                <li>
                    <router-link :to="{name:'myGroups'}">
                        <i class="fa fa-users"></i>
                        <span class="nav-label">My Groups</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'profile'}">
                        <i class="fa fa-user"></i>
                        <span class="nav-label">Profile</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'forum'}">
                        <i class="fa fa-question-circle"></i>
                        <span class="nav-label">Forum</span>
                        <span class="label label-success pull-right">NEW!</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'sidebar',
    computed: mapGetters({
      fullName: 'userFullName',
      username: 'username',
      classrooms: 'userClassrooms'
    })
  }

</script>
