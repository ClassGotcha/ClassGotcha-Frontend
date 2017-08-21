<template>
    <div class="row border-bottom">
        <nav class="navbar navbar-static-top " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <a class="navbar-minimalize minimalize-styl-2 btn btn-primary ">
                    <i class="fa fa-bars"></i>
                </a>
                <div role="search" class="navbar-form-custom">
                    <div class="form-group">
                        <input type="text" placeholder="" class="form-control" name="top-search" id="top-search">
                    </div>
                </div>
            </div>
            <ul class="nav navbar-top-links navbar-right">
                <li>
                    <span class="m-r-sm text-muted welcome-message">
                    </span>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle count-info" data-toggle="dropdown">
                        <i class="fa fa-bell"></i>
                    </a>
                    <ul v-if="!pending_friends.length">
                        <!--<li>No Message</li>-->
                    </ul>
                    <ul v-else class="dropdown-menu dropdown-messages">
                        <!-- TODO add notification-->
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
                <li>
                    <a class="dropdown-toggle count-info" data-toggle="dropdown">
                        <i class="fa fa-user"></i> {{ username }}
                    </a>
                    <ul class="dropdown-menu ">
                        <li class="m-l-md">
                            <router-link :to="{name:'profile'}">

                                <i class="fa fa-user"></i> Profile

                            </router-link>
                        </li>

                        <li class="divider"></li>
                        <li class="m-l-md">
                            <router-link :to="{name:'profile'}">

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
    methods: {
      acceptFriend (pk) {
        this.$store.dispatch('acceptFriend', pk).then(() => {
          this.$store.dispatch('getFriends')
          this.$store.dispatch('getPendingFriends')
        })
      },
      denyFriend (pk) {
        this.$store.dispatch('remFriend', pk).then(() => {
          this.$store.dispatch('getPendingFriends')
        })
      }
    },
    computed: {
      pending_friends () {
        return this.$store.getters.userPendingFriends
      },
      username () {
        return this.$store.getters.userFullName
      },
    }
  }

</script>
