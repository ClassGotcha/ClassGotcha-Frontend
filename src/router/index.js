import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import AuthLayout from 'components/AuthLayout'
import DefaultLayout from 'components/DefaultLayout'
import App from 'components/App'

import Home from 'views/Home'
import Register from 'views/auth/Register'
import Login from 'views/auth/Login'
import ForgetReset from 'views/auth/ForgetReset'
import ForgetSendEmail from 'views/auth/ForgetSendEmail'
import Confirm from 'views/auth/Confirm'

import AddClassroom from 'views/AddClassroom'
import Classroom from 'views/Classroom'
import ClassroomStudents from 'views/ClassroomStudents'
import Profile from 'views/Profile'
import Chat from 'views/Chat'
import Notes from 'views/Notes'
import Page404 from 'views/404'
import Page403 from 'views/403'
import Professor from 'views/Professor'
import UserDetail from 'views/UserDetail'
import Forum from 'views/Forum'
import MyFriends from 'views/MyFriends'
import AddFriend from 'views/AddFriend'
import MyNotes from 'views/MyNotes'
import Post from 'views/Post'
import Landing from 'views/Landing'
import Jobs from 'views/Jobs'


Vue.use(Router)
Vue.use(Resource)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: App,
            children: [{
                    path: '/',
                    component: Landing,
                    name: 'landing'
                },
                {
                    path: '/jobs',
                    component: Jobs,
                    name: 'jobs'
                }
            ]
        },
        {
            // use auth layout
            path: '/authlayout',
            component: AuthLayout,
            children: [{
                    path: '/login',
                    component: Login,
                    name: 'login'
                }, {
                    path: '/register',
                    component: Register,
                    name: 'register'
                }, {
                    path: '/forget',
                    component: ForgetReset,
                    name: 'forget',
                },
                {
                    path: '/forget/email',
                    component: ForgetSendEmail,
                    name: 'forgetemail'
                }, {
                    path: '/confirm',
                    component: Confirm,
                    name: 'confirm'
                }
            ]
        }, {
            // use default layout
            path: '/deafaultlayout',
            component: DefaultLayout,
            children: [{
                path: '/home',
                component: Home,
                name: 'home'
            }, {
                path: '/classroom/add',
                component: AddClassroom,
                name: 'addClassroom'
            }, {
                path: '/classroom/id/:classroom_id',
                //  access anywhere in the vm with this.$route.params.classroom_id
                component: Classroom,
                name: 'classroom'
            }, {
                path: '/classroom/id/:classroom_id/files',
                //  access anywhere in the vm with this.$route.params.classroom_id
                component: Notes,
                name: 'classroomNotes'
            }, {
                path: '/classroom/id/:classroom_id/students',
                //  access anywhere in the vm with this.$route.params.classroom_id
                component: ClassroomStudents,
                name: 'classroomStudents'
            }, {
                path: '/chatroom/id/:chatroom_id',
                component: Chat,
                name: 'chat'
            }, {
                path: '/404',
                component: Page404,
                name: '404'
            }, {
                path: '/403',
                component: Page403,
                name: '403'
            }, {
                path: '/profile/me',
                component: Profile,
                name: 'profile'
            }, {
                path: '/profile/id/:user_id',
                component: UserDetail,
                name: 'userDetail'
            }, {
                path: '/professor/id/:professor_id',
                component: Professor,
                name: 'professor'
            }, {
                path: '/mynotes',
              component: MyNotes,
              name: 'myNotes'
            }, {
              path: '/friends',
              component: MyFriends,
              name: 'myFriends'
            }, {
              path: '/friend/add',
              component: AddFriend,
              name: 'addFriend'
            }, {
                path: '/forum/:post_id',
                component: Post,
                name: 'post'
            }, {
                path: '/forum',
                component: Forum,
                name: 'forum'
            }]
        }
    ]
})
