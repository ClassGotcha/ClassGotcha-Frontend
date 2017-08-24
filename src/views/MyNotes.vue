<template>
    <div>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>My Groups</h2>
                <ol class="breadcrumb">
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>

                    </li>
                    <li class="active">
                        <strong>My Notes</strong>
                    </li>
                </ol>
            </div>
            <div class="col-lg-2">

            </div>
        </div>
        <div class="wrapper wrapper-content animated fadeIn">
            <div class="middle-box text-center animated fadeIn">
                <h3 class="font-bold"> Coming soon!
                </h3>
                <div class="error-desc">
                    We are working hard to deliver the newest features!
                    <br>
                    <router-link :to="{name:'home'}" class="btn btn-primary m-t"><i class="fa fa-home"></i> Home</router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: 'Notes',
    head: {
      title: {inner: 'My Notes'}
    },
  }

</script>
