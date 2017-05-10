<template>
   <div class="row border-bottom">
      <nav class="navbar navbar-static-top " role="navigation" style="margin-bottom: 0">
         <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " ><i class="fa fa-bars"></i> </a>
            <div role="search" class="navbar-form-custom">
               <div class="form-group">
                  <input type="text" placeholder="" class="form-control" name="top-search" id="top-search">
               </div>
            </div>
         </div>
         <ul class="nav navbar-top-links navbar-right">
            <li><span class="m-r-sm text-muted welcome-message">
               </span>
            </li>
            <li>
               <a class="right-sidebar-toggle">
               <i class="fa fa-user-plus"></i>
               </a>
            </li>
            <li class="dropdown">
               <a class="dropdown-toggle count-info" data-toggle="dropdown">
               <i class="fa fa-bell"></i><span class="label label-warning" v-show="pending_friends.length">{{pending_friends.length}}</span>   
               </a>
               <ul v-if="!pending_friends.length">
               </ul>
               <ul v-else class="dropdown-menu dropdown-messages">
                  <li v-for="friend in pending_friends">
                     <div class="dropdown-messages-box">
                     <div class="">
                     <router-link :to="{name:'userDetail', params:{user_id:friend.id}}">{{friend.full_name}}</router-link>  Friend request
                                    <span class="pull-right text-muted small"><div class="btn-group">
                                <button class="btn btn-xs btn-primary" type="button" @click="acceptFriend(friend.id)">Accept</button>
                                <button class="btn btn-xs btn-white" type="button" @click="denyFriend(friend.id)">Dismiss</button>
                                
                            </div>
</span>

                    </div>
                  </div>
                  </li>
               </ul>
            </li>
            <li>
               <a class="right-sidebar-toggle">
               <i class="fa fa-comments"></i> Chat
               </a>
            </li>
         </ul>
      </nav>
   </div>
</template>
<script>
    export default {
        name: 'TopBar',
        methods: {
            acceptFriend(pk) {
                this.$store.dispatch('acceptFriend', pk).then(() => {
                    this.$store.dispatch('getFriends')
                    this.$store.dispatch('getPendingFriends')
                })
            },
            denyFriend(pk) {
                this.$store.dispatch('remFriend', pk).then(() => {
                    this.$store.dispatch('getPendingFriends')
                })
            }
        },
        computed: {
            pending_friends() {
                return this.$store.getters.userPendingFriends
            },
            username() {
                return this.$store.getters.userFullName
            },
        }
    }

</script>
