<template>
    <spinner v-if="!loaded"></spinner>
    <div v-else>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-sm-4">
                <h2>Forum</h2>
                <ol class="breadcrumb">
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>
                    </li>
                    <li class="active">
                        <strong>Forum</strong>
                    </li>
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="wrapper wrapper-content animated fadeIn">
                    <div class="ibox-content m-b-sm border-bottom">
                        <div class="text-center p-lg">
                            <h2>Welcome to ClassGotcha Forum</h2>
                            <span>Here you can report bugs, give us suggestions or contribute new ideas</span>
                            <p></p>
                            <span>Our active developers will response asap!</span>
                            <br>
                            <button type="button" data-toggle="modal" data-target="#newpost" class="btn btn-primary btn-sm m-t">
                                <i class="fa fa-plus"></i> <span class="bold">Add Post</span>
                            </button>
                            <div class="modal inmodal" id="newpost" name="newpost" tabindex="-1" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content animated fadeInDown">
                                        <div class="modal-header ">
                                            <button type="button" class="close" data-dismiss="modal"><span>×</span><span class="sr-only">Close</span></button>
                                            <h2 class="modal-title">New Post</h2>
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-group">

                                                <input v-model="post_title" class="form-control m-b" placeholder="Title">

                                                <textarea v-model="post_content" class="form-control m-b" placeholder="Content"></textarea>
                                                <select v-model="post_tag" class="form-control m-b">
                                                    <option value="0">Bug Report</option>
                                                    <option value="1">Suggestions</option>
                                                    <option value="2">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                                            <button type="button" @click="postNewPost()" class="btn btn-primary">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="faq-item animated fadeIn" v-for="post in posts">
                    <div class="row">
                        <div class="vote-actions m-l">
                            <a @click="upVote(post.id)">
                                <i class="fa fa-chevron-up"> </i>
                            </a>
                            <div>{{post.votes}}</div>
                            <a @click="downVote(post.id)">
                                <i class="fa fa-chevron-down"> </i>
                            </a>
                        </div>
                        <div class="col-md-7">
                            <router-link :to="{name:'post', params:{post_id:post.id}}" class="faq-question">{{post.title}}</router-link>
                            <small>
                                <i class="fa fa-clock-o"></i> {{momentTime(post.created)}}
                                <br>
                                Added by <strong>{{post.creator.full_name}}</strong>
                                |
                                <i class="fa fa-comments-o"></i> Comments {{post.comments_count}}
                            </small>
                        </div>
                        <div class="col-md-3">
                            <div class="tag-list m-t">
                                <span v-if="post.tag===0" class="label label-danger">Bug Report</span>
                                <span v-if="post.tag===1" class="label label-primary">Suggestion</span>
                                <span v-if="post.tag===2" class="label warning">Other</span>
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
    name: 'posts',
    head: {
      title: {inner: 'User Forum'}
    },
    components: {
      'spinner': Spinner
    },
    data () {
      return {
        loaded: false,
        post_title: '',
        post_content: '',
        post_tag: 0,
      }
    },
    methods: {
      momentTime (time) {
        /* global moment:true */
        return moment(time).fromNow()
      },
      postNewPost () {
        this.$store.dispatch('postPost', {
          title: this.post_title,
          content: this.post_content,
          tag: this.post_tag
        })
        this.$root.$children[0].$refs.toastr.i('Post in Forum', 'EXP +10')
      },
      upVote (id) {
        const data = {
          id: id,
          formData: {
            vote: 1
          }
        }
        this.$store.dispatch('addPostVote', data)
      },
      downVote (id) {
        const data = {
          id: id,
          formData: {
            vote: -1
          }
        }
        this.$store.dispatch('addPostVote', data)
      }
    },
    computed: {
      posts () {
        return this.$store.getters.posts
      }
    },
    created () {
      this.$store.dispatch('getPosts').then(() => {
        this.loaded = true
      })
    }
  }

</script>
