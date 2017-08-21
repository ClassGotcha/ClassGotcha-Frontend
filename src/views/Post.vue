<template>
    <div>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>{{currentPost.title}}</h2>
                <ol class="breadcrumb">
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>

                    </li>
                    <li>
                        <router-link :to="{name:'forum'}">Forum</router-link>
                    </li>
                    <li class="active">
                        <strong>Posts</strong>
                    </li>
                </ol>
            </div>
            <div class="col-lg-2">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="wrapper wrapper-content animated fadeInRight">
                    <div class="ibox-content forum-post-container">
                        <div class="forum-post-info">
                            <h4>{{currentPost.title}}</h4>
                        </div>
                        <div class="media">
                            <router-link class="forum-avatar" :to="{name:'userDetail', params:{user_id:currentPost.creator.id}}">
                                <img class="img-circle" :src="currentPost.creator.avatar1x">
                                <div class="author-info">
                                    <strong>{{currentPost.creator.full_name}}</strong><br><br>
                                    <span class="label label-warning">Level {{currentPost.creator.level}}</span>
                                </div>
                            </router-link>
                            <div class="media-body">
                                {{currentPost.content}}
                                <br><br>
                                <i class="fa fa-clock-o"></i> <strong>{{formatTime(currentPost.created)}}</strong>
                                <hr>
                                <div class="row">
                                    <div class="col-md-12">
                                        <span v-if="currentPost.tag===0" class="label label-danger">Bug Report</span>
                                        <span v-if="currentPost.tag===1" class="label label-primary">Suggestion</span>
                                        <span v-if="currentPost.tag===2" class="label warning">Other</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="media" v-for="comment in currentPost.comments">
                            <router-link class="forum-avatar" :to="{name:'userDetail', params:{user_id:comment.creator.id}}">
                                <img class="img-circle" :src="comment.creator.avatar1x">
                                <div class="author-info">
                                    <strong>{{comment.creator.full_name}}</strong><br><br>
                                    <span class="label label-warning">Level {{comment.creator.level}}</span>
                                </div>
                            </router-link>
                            <div class="media-body">
                                {{comment.content}}
                                <br><br>
                                {{formatTime(comment.created)}}
                            </div>
                        </div>
                        <div class="media">
                            <a class="forum-avatar">
                                <img class="img-circle" :src="me.avatar1x">
                                <div class="author-info">
                                    <strong>{{me.full_name}}</strong><br><br>
                                    <span class="label label-warning">Level {{me.level}}</span>
                                </div>
                            </a>
                            <div class="media-body">
                                <textarea class="form-control" v-model="comment_content"></textarea>
                                <a class="btn btn-primary m-t pull-right" @click="addComment()">Add Comment</a>
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
    name: 'Post',
    head: {
      title: {inner: 'Post'}
    },
    components: {
      'spinner': Spinner,
    },
    data () {
      return {
        loaded: false,
        comment_content: ''
      }
    },
    methods: {
      addComment () {
        const data = {
          id: this.$route.params.post_id,
          formData: {content: this.comment_content}
        }
        this.$store.dispatch('postPostComment', data)
      },
      formatTime (time) {
        /* global moment:true */
        return moment.utc(time).add(-5, 'hours').format('lll')
      }
    },
    computed: {
      currentPost () {
        return this.$store.getters.currentPost
      },
      me () {
        return this.$store.getters.me
      }
    },
    created () {
      this.$store.dispatch('getPost', this.$route.params.post_id).then(() => {
        this.loaded = true
      })
    }
  }

</script>
