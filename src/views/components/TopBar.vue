<template>
    <div class="row border-bottom">
        <nav class="navbar navbar-static-top " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <a class="navbar-minimalize minimalize-styl-2 btn btn-primary ">
                    <i class="fa fa-bars"></i>
                </a>
                <div role="search" class="navbar-form-custom">
                    <!--<div class="form-group">-->
                    <!--<input type="text" placeholder="" class="form-control" name="top-search" id="top-search">-->
                    <!--</div>-->
                </div>
            </div>
            <ul class="nav navbar-top-links navbar-right">
                <li>
                    <div class="alert alert-success m-b-n" v-if="!user.is_verified">
                        <i class="fa fa-info"></i> We have sent a verification link to your email, please verify your email before use ClassGotcha.
                        <a v-if="!resendClicked" class="btn btn-link btn-xs text-success" style="font-size:12px;padding:0;min-height:0;" @click="resendEmail">Resend</a>
                        <button  v-if="resendClicked"  class="btn btn-link btn-xs" disabled style="font-size:12px;padding:0;min-height:0;">Resent</button>

                    </div>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle count-info" data-toggle="dropdown">
                        <i class="fa fa-user-plus"></i>
                        <span class="label label-primary" v-if="pending_friends.length">{{pending_friends.length}}</span>
                    </a>
                    <ul v-if="!pending_friends.length" class="dropdown-menu dropdown-messages">
                        <div>
                            No New Friend Invitations
                        </div>
                    </ul>
                    <ul class="dropdown-menu dropdown-messages" v-else>
                        <div v-for="(friend, index)  in pending_friends">
                            <li class="divider" v-if="index!==0"></li>
                            <li>
                                <div class="dropdown-messages-box">
                                    <router-link :to="{name:'userDetail', params:{user_id:friend.id}}">{{friend.full_name}}</router-link>
                                    send you a friend request
                                    <span class="pull-right text-muted small">
                                        <div class="btn-group">
                                            <button class="btn btn-xs btn-primary" type="button" @click="acceptFriend(friend.id)">
                                                <i class="fa fa-check"></i>
                                            </button>
                                            <button class="btn btn-xs btn-white" type="button" @click="denyFriend(friend.id)">
                                                <i class="fa fa-times"></i>
                                            </button>
                                        </div>
                                    </span>
                                </div>
                            </li>
                        </div>
                    </ul>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle count-info" data-toggle="dropdown">
                        <i class="fa fa-bell"></i>
                        <span class="label label-primary" v-if="notifications.length">{{notifications.length}}</span>

                    </a>
                    <ul v-if="!notifications.length" class="dropdown-menu dropdown-messages">
                        <div>
                            No New Notifications
                        </div>
                    </ul>
                    <ul class="dropdown-menu dropdown-messages" v-else>
                        <!-- TODO add notification-->
                        <div v-for="(notification, index) in notifications">
                            <li class="divider" v-if="index!==0"></li>
                            <li>
                                <div class="dropdown-messages-box">
                                    <router-link v-if="notification.sender" :to="{name:'userDetail', params:{user_id:notification.sender.id}}">{{notification.sender.full_name}}</router-link>
                                    {{notification.content}}
                                    <br>
                                    <small class="text-muted"> {{momentFormat(notification.created)}}   </small>
                                    <span class="pull-right text-muted small">
                                        <div class="btn-group">
                                            <button class="btn btn-xs btn-white" type="button" @click="readNotification(notification.id)">
                                                <i class="fa fa-times"></i> Dismiss
                                            </button>
                                        </div>
                                    </span>
                                </div>
                            </li>
                        </div>
                    </ul>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle count-info" data-toggle="dropdown">
                        <img :src="user.avatar1x" alt="image" style="width: 30px; height: 30px;" class="img-circle m-t-n-xs m-r-sm">
                        {{ username }}
                    </a>
                    <ul class="dropdown-menu ">
                        <li class="m-l-md">
                            <router-link :to="{name:'profile'}">
                                <i class="fa fa-user"></i> Profile
                            </router-link>
                        </li>

                        <li class="divider"></li>
                        <li class="m-l-md">
                            <router-link :to="{name:'addFriend'}">
                                <i class="fa fa-user-plus"></i> Add Friends
                            </router-link>
                        </li>
                        <li class="divider"></li>
                        <li class="m-l-md">
                            <a v-on:click="$store.dispatch('logout')">
                                <i class="fa fa-sign-out"></i> Log out
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
  export default {
    name: 'TopBar',
    data () {
      return {
        interval: null,
        resendClicked: false
      }
    },
    methods: {
      getNotifications () {
        this.$store.dispatch('getNotifications')
      },
      readNotification (pk) {
        this.$store.dispatch('readNotification', pk)
      },
      acceptFriend (pk) {
        this.$store.dispatch('acceptFriend', pk).then(() => {
          this.$store.dispatch('getFriends')
          this.$root.$children[0].$refs.toastr.i('Accept Friend Request', 'EXP +5')
        })
      },
      denyFriend (pk) {
        this.$store.dispatch('remFriend', pk).then(() => {
          this.$store.dispatch('getPendingFriends')
        })
      },
      getPendingFriends () {
        this.$store.dispatch('getPendingFriends')
      },
      resendEmail () {
        this.$store.dispatch('resend')
        this.resendClicked = true
        this.$root.$children[0].$refs.toastr.s('Please Check Your Email', 'Email Resent')

      },
      momentFormat (time) {
        /* global moment:true */
        return moment(time).format('h:mm a - MM.D.YYYY')
      },
    },
    computed: {
      pending_friends () {
        return this.$store.getters.userPendingFriends
      },
      username () {
        return this.$store.getters.userFullName
      },
      notifications () {
        return this.$store.getters.notifications
      },
      user () {
        return this.$store.getters.me
      },
    },
    mounted () {
      this.getNotifications()

      this.interval = setInterval(function () {
        this.getNotifications()
        this.getPendingFriends()
      }.bind(this), 30000)
    },
    beforeDestroy () {
      clearInterval(this.interval)
    }
  }

</script>
