<template>
    <div>
        <div class="row  border-bottom white-bg dashboard-header">
            <div class="col-sm-3">
                <!--<h2 v-show="!show_event_detail && !create_new_event">Recommended Tasks</h2>-->
                <h2 v-show="show_event_detail">Event Detail
                    <a @click="getPlan()" class="btn btn-sm  btn-warning pull-right"> Plan Generator (Beta)
                    </a>
                    <a type="button"
                       data-toggle="tooltip"
                       class="btn btn-sm btn-warning pull-right"
                       data-placement="bottom"
                       title=""
                       data-original-title="We will generate a personalized study plan for you based on your class schedule, homework, quiz and exams.">
                        <i class="fa fa-info"></i>
                    </a>
                </h2>
                <h2 v-show="create_new_event">New Event
                    <a @click="getPlan()" class="btn btn-sm  btn-warning pull-right"> Plan Generator (Beta)
                    </a>
                    <a type="button"
                       data-toggle="tooltip"
                       class="btn btn-warning btn-sm  pull-right"
                       data-placement="bottom"
                       title=""
                       data-original-title="We will generate a personalized study plan for you based on your class schedule, homework, quiz and exams.">
                        <i class="fa fa-info"></i>
                    </a></h2>

                <!--<div class="ibox-content" v-show="!show_event_detail && !create_new_event">-->
                <!--<div id="external-events">-->
                <!--<p>Drag a event and drop into calendar.</p>-->
                <!--<div v-for="recommened_task in user_recommended_tasks" class="external-event" :class="eventTaskBg(recommened_task)">{{recommened_task.task_name}} </div>-->
                <!--</div>-->
                <!--</div>-->

                <br>
                <!--<button class="btn form-control m-b" v-show="show_event_detail || create_new_event" @click="show_event_detail=false; create_new_event=false;">Go back to recommended tasks</button>-->
                <button class="btn form-control m-b"
                        v-show="show_event_detail"
                        @click="show_event_detail=false; create_new_event=true;">Create New Event
                </button>

                <div v-if="show_event_detail">
                    <div class="form-group">
                        <label>Event Name</label>
                        <input class="form-control" :disabled="event.category!==6" placeholder="Title" v-model="event.task_name">
                    </div>
                    <div class="form-group" v-if="event.task_of_classroom">
                        <label>Classroom</label>
                        <input class="form-control" disabled v-model="event.task_of_classroom.class_short">
                    </div>

                    <div class="form-group" v-show="event.start">
                        <div class="row" v-if="event.repeat">
                            <div class="col-md-6">
                                <label>Start</label>
                                <input class="form-control" disabled v-show="event.category!==6" :value="event.formatted_start_time" placeholder="Start">
                                <input class="form-control" v-if="event.category===6" v-model="event.formatted_start_time" placeholder="Start">
                            </div>
                            <div class="col-md-6">
                                <label>End</label>
                                <input class="form-control" disabled v-show="event.category!==6" :value="event.formatted_end_time" placeholder="End">
                                <input class="form-control" v-if="event.category===6" v-model="event.formatted_end_time" placeholder="End">
                            </div>
                        </div>
                        <div class="row" v-else>
                            <div class="col-md-12">
                                <label>Start</label>
                                <input class="form-control m-b" disabled v-show="event.category!==6" :value="formatTime(event.formatted_start_datetime)" placeholder="Start">
                                <input class="form-control" v-if="event.category===6" v-model="event.formatted_start_datetime" placeholder="Start">
                            </div>
                            <div class="col-md-12">
                                <label>End</label>
                                <input class="form-control" disabled v-show="event.category!==6" :value="formatTime(event.formatted_end_datetime)" placeholder="End">
                                <input class="form-control" v-if="event.category===6" v-model="event.formatted_end_datetime" placeholder="End">
                            </div>
                        </div>
                    </div>
                    <div class="form-group" v-show="!event.start">
                        <div class="row" v-if="event.repeat">
                            <div class="col-md-12">
                                <label>Due</label>
                                <input class="form-control" disabled v-show="event.category!==6" :value="event.formatted_end_time" placeholder="End">
                                <input class="form-control" v-if="event.category===6" v-model="event.formatted_end_time" placeholder="End">
                            </div>
                        </div>
                        <div class="row" v-else>
                            <div class="col-md-12">
                                <label>Due</label>
                                <input class="form-control" disabled v-show="event.category!==6" :value="formatTime(event.formatted_end_datetime)" placeholder="End">
                                <input class="form-control" v-if="event.category===6" v-model="event.formatted_end_datetime" placeholder="End">
                            </div>
                        </div>
                    </div>

                    <div class="form-group" v-show="event.category!==6">
                        <label>Category</label>
                        <input class="form-control" disabled :value="categoryName(event.category)">
                    </div>

                    <div class="form-group" v-if="event.group">
                        <label>Group</label>
                        <input class="form-control" :disabled="event.category!==6" placeholder="Group" :value="event.group">
                    </div>

                    <div class="form-group" v-show="event.location || event.category===6">
                        <label>Location</label>
                        <input class="form-control" disabled v-show="event.category!==6" placeholder="Location" :value="event.location">
                        <input class="form-control" v-if="event.category===6" placeholder="Location" v-model="event.location">
                    </div>
                    <div class="form-group" v-if="event.repeat || event.category===6">
                        <label>Repeat</label>
                        <br>
                        <div class="btn-group">
                            <button class="btn btn-white btn-sm" :disabled="event.category!==6" :class="event.repeat.includes('Su')? 'active':''" @click="addTaskRepeat('Su')">Su</button>
                            <button class="btn btn-white btn-sm" :disabled="event.category!==6" :class="event.repeat.includes('Mo')? 'active':''" @click="addTaskRepeat('Mo')">Mo</button>
                            <button class="btn btn-white btn-sm" :disabled="event.category!==6" :class="event.repeat.includes('Tu')? 'active':''" @click="addTaskRepeat('Tu')">Tu</button>
                            <button class="btn btn-white btn-sm" :disabled="event.category!==6" :class="event.repeat.includes('We')? 'active':''" @click="addTaskRepeat('We')">We</button>
                            <button class="btn btn-white btn-sm" :disabled="event.category!==6" :class="event.repeat.includes('Th')? 'active':''" @click="addTaskRepeat('Th')">Th</button>
                            <button class="btn btn-white btn-sm" :disabled="event.category!==6" :class="event.repeat.includes('Fr')? 'active':''" @click="addTaskRepeat('Fr')">Fr</button>
                            <button class="btn btn-white btn-sm" :disabled="event.category!==6" :class="event.repeat.includes('Sa')? 'active':''" @click="addTaskRepeat('Sa')">Sa</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block" @click="updateTask()" v-if="event.category===6">Update</button>
                        <button class="btn btn-danger btn-block" @click="deleteTask()" v-if="event.category===6">Delete</button>
                        <button class="btn btn-info btn-block" @click="removeTask()" v-if="event.task_of_classroom">Remove From My Calendar</button>
                        <router-link class="btn btn-primary btn-block" v-if="event.category===0" :to="{name:'classroom', params:{classroom_id:event.classroom.id}}">Go to {{event.classroom.class_short}}</router-link>
                        <router-link class="btn btn-primary btn-block" v-if="event.task_of_classroom" :to="{name:'classroom', params:{classroom_id:event.task_of_classroom.id}}">
                            Go to {{event.task_of_classroom.class_short}}
                        </router-link>

                    </div>
                </div>

                <div v-if="create_new_event">
                    <div class="form-group">
                        <label>Event Name *</label>
                        <input class="form-control" placeholder="Title" v-model="new_event.task_name">
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Start date</label>
                                <input class="form-control" v-model="new_event.start_date" placeholder="Start">
                            </div>
                            <div class="col-md-6">
                                <label>Start time</label>
                                <input class="form-control" v-model="new_event.start_time" placeholder="Start">
                            </div>
                            <div class="col-md-6">
                                <label>End date</label>
                                <input class="form-control" v-model="new_event.end_date" placeholder="End">
                            </div>
                            <div class="col-md-6">
                                <label>End time</label>
                                <input class="form-control" v-model="new_event.end_time" placeholder="End">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Location</label>
                        <input class="form-control" placeholder="Location" v-model="new_event.location">
                    </div>
                    <div class="form-group">
                        <label>Repeat</label>
                        <br>
                        <div class="btn-group">
                            <button class="btn btn-white btn-sm" :class="new_event.repeat.includes('Su')? 'active':''" @click="addNewTaskRepeat('Su')">Su</button>
                            <button class="btn btn-white btn-sm" :class="new_event.repeat.includes('Mo')? 'active':''" @click="addNewTaskRepeat('Mo')">Mo</button>
                            <button class="btn btn-white btn-sm" :class="new_event.repeat.includes('Tu')? 'active':''" @click="addNewTaskRepeat('Tu')">Tu</button>
                            <button class="btn btn-white btn-sm" :class="new_event.repeat.includes('We')? 'active':''" @click="addNewTaskRepeat('We')">We</button>
                            <button class="btn btn-white btn-sm" :class="new_event.repeat.includes('Th')? 'active':''" @click="addNewTaskRepeat('Th')">Th</button>
                            <button class="btn btn-white btn-sm" :class="new_event.repeat.includes('Fr')? 'active':''" @click="addNewTaskRepeat('Fr')">Fr</button>
                            <button class="btn btn-white btn-sm" :class="new_event.repeat.includes('Sa')? 'active':''" @click="addNewTaskRepeat('Sa')">Sa</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block" @click="postNewTask()">Create</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-9">
                <div ref="calendar" id="calendar"></div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        // selected event
        event: {
          // type: 0, // Event
          // formatted_start_time: '',
          // formatted_start_date: '',
          // formatted_end_date: '',
          // category: 7, // Other
          // formatted_end_time: '',
          // description: '',
          // id: '',
          // location: '',
          // repeat_list: [],
          // start: '',
          // task_name: '',
        },
        // new event
        new_event: {
          task_name: '',
          type: 0, // Event
          start_time: '',
          start_date: '',
          start: '',
          end_time: '',
          end_date: '',
          end: '',
          category: 6, // Other
          description: '',
          location: '',
          repeat: '',
        },

        // full calendar
        events: [],
        event_sources: [],

        // category dictionary
        category_choices: {
          0: {name: 'Class'},
          1: {name: 'Homework'},
          2: {name: 'Quiz'},
          3: {name: 'Exam'},
          4: {name: 'Todo'},
          5: {name: 'Group Meeting'},
          6: {name: 'Other'}
        },

        // UI triggers
        show_event_detail: false,
        create_new_event: true

      }
    },
    methods: {
      createEvents () {
        const event_color0 = '#1ab394'
        const event_color1 = '#f8ac59'
        const event_color2 = '#ed5565'
        const event_color3 = '#ed5565'
        const event_color6 = '#23c6c8'

        const user_tasks = this.$store.getters.userTasks

        for (let i in user_tasks) {
          const task = user_tasks[i]
          /* global moment:true */

          // classes
          if (task.category === 0) {
            this.events.push({
              id: task.id,
              title: task.task_name + '\n' + task.location,
              editable: false,
              color: event_color0,
              start: task.formatted_start_time,
              end: task.formatted_end_time,
              dow: task.repeat_list,
              repeat: [{
                start: task.formatted_start_date,
                end: task.formatted_end_date
              }]
            })
          }

          // homework
          else if (task.category === 1) {
            let homework = {
              id: task.id,
              title: task.task_name,
              color: event_color1,
              editable: false,
              start: moment.utc(task.end).add(-0.5, 'hours').format(),
              end: task.end,
            }
            if (task.repeat_list.length) {
              homework.dow = task.repeat_list
              homework.start = moment.utc(task.formatted_end_time, 'HH:mm:ss').add(-0.5, 'hours').format('HH:mm:ss')
              homework.end = task.formatted_end_time
            }
            this.events.push(homework)
          }

          // quiz
          else if (task.category === 2) {
            this.events.push({
              id: task.id,
              title: task.task_name,
              editable: false,
              color: event_color2,

              start: (task.start ? task.start : task.end),
              end: (task.start ? task.end : moment.utc(task.end).add(0.5, 'hours').format()),
            })
          }

          // exam
          else if (task.category === 3) {
            this.events.push({
              id: task.id,
              title: (task.location ? task.task_name + '\n' + task.location : task.task_name),
              editable: false,
              color: event_color3,
              start: (task.start ? task.start : task.end),
              end: (task.start ? task.end : moment.utc(task.end).add(0.5, 'hours').format()),

            })
          }

          // group meetings
          else if (task.category === 5) {
            let other = {
              id: task.id,
              title: (task.location ? task.task_name + '\n' + task.location : task.task_name),
              editable: false,
              color: event_color6,
              start: task.start,
              end: task.end,
            }
            this.events.push(other)
          }

          // others
          else if (task.category === 6) {

            let other = {
              id: task.id,
              title: (task.location ? task.task_name + '\n' + task.location : task.task_name),
              editable: true,
              color: event_color6,
              start: (task.start ? task.start : task.end),
              end: (task.start ? task.end : moment.utc(task.end).add(0.5, 'hours').format()),
            }
            if (task.repeat_list.length) {
              other.dow = task.repeat_list
              other.start = (task.formatted_start_time ? task.formatted_start_time : task.formatted_end_time)
              other.end = (task.formatted_start_time ? task.formatted_end_time : moment.utc(task.formatted_end_time).add(0.5, 'hours').format())
            }
            this.events.push(other)

          }
        }

        return Promise.resolve(this.events)
      },

      createExternalEvents () {
        //        /* global $:true */
        //        $('#external-events div.external-event').each(function () {
        //          // store data so the calendar knows to render an event upon drop
        //          $(this).data('event', {
        //            title: $.trim($(this).text()), // use the element's text as the event title
        //            stick: true // maintain when user navigates (see docs on the renderEvent method)
        //          })
        //          // make the event draggable using jQuery UI
        //          $(this).draggable({
        //            zIndex: 10,
        //            revert: true, // will cause the event to go back to its
        //            revertDuration: 1 //  original position after the drag
        //          })
        //
        //        })
      },

      postNewTask () {
        let formData = this.new_event
        formData.start = formData.start_date + 'T' + formData.start_time
        formData.end = formData.end_date + 'T' + formData.end_time
        formData.involved = [this.user.id]
        formData.creator = this.user.id
        if (!formData.repeat) {
          delete formData['repeat']
        }
        this.$store.dispatch('postTask', formData)
          .then(() => {
            this.$store.dispatch('getTasks')
              .then(() => {
                this.createEvents().then(() => {
                  this.$emit('reload-events')
                  this.$root.$children[0].$refs.toastr.s('New event is added to your schedule, refresh to see the change', 'Success')
                })
              })
          })
          .catch((error) => {
            this.$root.$children[0].$refs.toastr.e(error.body.detail, 'Success')
          })
      },

      updateTask () {
        this.$store.dispatch('updateTask', this.event)
          .then(() => {
            this.$store.dispatch('getTasks')
              .then(() => {
                this.createEvents().then(() => {
                  $(this.$el).fullCalendar('rerenderEvents')
                  this.$root.$children[0].$refs.toastr.s('Event is updated, refresh to see the change', 'Success')

                })
              })
          })
          .catch((error) => {
            this.$root.$children[0].$refs.toastr.e(error.body.detail, 'Success')
          })
      },

      deleteTask () {
        this.$store.dispatch('deleteTask', this.event.id)
          .then(() => {
            this.$store.dispatch('getTasks')
              .then(() => {
                this.createEvents()
                  .then((e) => {
                    console.log(e)
                    $(this.$el).fullCalendar('removeEvents')
                    $(this.$el).fullCalendar('addEventSource', this.events)
                    $(this.$el).fullCalendar('rerenderEvents')
                    this.$root.$children[0].$refs.toastr.s('Event is removed from your schedule, refresh to see the change', 'Success')
                  })
              })
          })
          .catch((error) => {
            this.$root.$children[0].$refs.toastr.e(error.body.detail, 'Error')

          })
      },

      removeTask () {
        this.$store.dispatch('removeTask', this.event.id)
          .then(() => {
            this.$store.dispatch('getTasks')
              .then(() => {
                this.createEvents()
                  .then((e) => {
                    console.log(e)
                    $(this.$el).fullCalendar('removeEvents')
                    $(this.$el).fullCalendar('addEventSource', this.events)
                    $(this.$el).fullCalendar('rerenderEvents')
                    this.$root.$children[0].$refs.toastr.s('Event is removed from your schedule, refresh to see the change', 'Success')
                  })
              })
          })
          .catch((error) => {
            this.$root.$children[0].$refs.toastr.e(error.body.detail, 'Error')
          })
      },

      getPlan () {
        this.$store.dispatch('getUserPlan', this.event.id)
          .then(() => {
            this.$store.dispatch('getTasks')
              .then(() => {
                this.createEvents()
                  .then((e) => {
                    console.log(e)
                    $(this.$el).fullCalendar('removeEvents')
                    $(this.$el).fullCalendar('addEventSource', this.events)
                    $(this.$el).fullCalendar('rerenderEvents')
                    this.$root.$children[0].$refs.toastr.s('Your latest study plan is generated!', 'Success')
                  })
              })
          })
          .catch((error) => {
            this.$root.$children[0].$refs.toastr.e(error.body.detail, 'Error')
          })
      },
      // data formatter
      formatTime (time) {
        /* global moment: true */
        return moment.utc(time).format('l LT')
      },

      // look up method
      categoryName (id) {
        if (this.category_choices[id])
          return this.category_choices[id].name
        else return null
      },

      // data control
      addTaskRepeat (day) {
        if (this.event.repeat.includes(day))
          this.event.repeat = this.event.repeat.replace(day, '')
        else
          this.event.repeat = this.event.repeat + day
      },

      addNewTaskRepeat (day) {
        if (this.new_event.repeat.includes(day))
          this.new_event.repeat = this.new_event.repeat.replace(day, '')
        else
          this.new_event.repeat = this.new_event.repeat + day
      },
    },
    computed: {
      user () {
        return this.$store.getters.me
      },

    },
    created () {
      this.createEvents()
    },
    mounted () {
      /* global $:true */
      const cal = $('#calendar')
      const self = this

      this.$on('remove-event', (event) => {
        if (event && event.hasOwnProperty('id')) {
          $(this.$el).fullCalendar('removeEvents', event.id)
        } else {
          $(this.$el).fullCalendar('removeEvents', event)
        }
      })

      this.$on('rerender-events', () => {
        $(this.$el).fullCalendar('rerenderEvents')
      })

      this.$on('refetch-events', () => {
        $(this.$el).fullCalendar('refetchEvents')
      })

      this.$on('render-event', (event) => {
        $(this.$el).fullCalendar('renderEvent', event)
      })

      this.$on('reload-events', () => {
        $(this.$el).fullCalendar('removeEvents')
        $(this.$el).fullCalendar('addEventSource', this.events)
      })

      this.$on('rebuild-sources', () => {
        $(this.$el).fullCalendar('removeEvents')
        this.event_sources.map(event => {
          $(this.$el).fullCalendar('addEventSource', event)
        })
      })

      cal.fullCalendar({
        scrollTime: '08:00:00',
        // droppable: true,
        // ignoreTimezone: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listWeek'
        },
        sync: false,
        defaultView: 'agendaWeek',
        editable: true,
        selectable: true,
        selectHelper: true,
        aspectRatio: 1.3,
        timeFormat: 'HH:mm',
        events: self.events,
        eventSources: self.event_sources,
        nowIndicator: true,
        unselectAuto: false,

        eventClick (event) {
          // The following code did this:
          // When click a event, if the event id is found in self.user_tasks, show event
          // else, this is a new event, create it
          let found = false
          const user_tasks = self.$store.getters.userTasks

          for (let i in user_tasks) {
            if (user_tasks[i].id === event.id) {
              self.event = user_tasks[i]
              found = true
              self.show_event_detail = true
              self.create_new_event = false
            }
          }
          if (!found) {
            self.new_event.task_name = event.title
            // full calendar event has a start attribute with an time
            // So I'm constructing time from this
            const event_start = moment.utc(event.start._d.toISOString())
            const event_end = moment.utc(event.end._d.toISOString())

            self.new_event.start_date = event_start.format('YYYY-MM-DD')
            self.new_event.start_time = event_start.format('HH:mm:ss')
            self.new_event.end_date = event_end.format('YYYY-MM-DD')
            self.new_event.end_time = event_end.format('HH:mm:ss')
            self.show_event_detail = false
            self.create_new_event = true
          }
          $(self.$el).trigger('event-selected', event)
        },
        eventResize (event) {
          $(self.$el).trigger('event-resize', event)
          self.event = event
          self.show_event_detail = true
        },

      })
      // this.createExternalEvents()

      /* global $:true */
      $('[data-toggle="tooltip"]').tooltip()

    },
    watch: {
      events: {
        deep: true,
        handler (val) {
          this.$emit('reload-events')
        },
      },
      event_sources: {
        deep: true,
        handler (val) {
          this.$emit('rebuild-sources')
        },
      },
    },
    beforeDestroy () {
      this.$off('remove-event')
      this.$off('rerender-events')
      this.$off('refetch-events')
      this.$off('render-event')
      this.$off('reload-events')
      this.$off('rebuild-sources')
    },
  }

</script>
<style>
    /* FULLCALENDAR */

    .fc-time-grid .fc-slats td {
        height: 2.5em;
        border-bottom: 0;
    }

    .fc-ltr .fc-time-grid .fc-event-container {
        margin: 0 2px;
    }

    .fc-event {
        border-radius: 1px
    }

    .fc-state-default {
        background-color: #ffffff;
        background-image: none;
        background-repeat: repeat-x;
        box-shadow: none;
        color: #333333;
        text-shadow: none;
    }

    .fc-state-default {
        border: 1px solid;
    }

    .fc-button {
        color: inherit;
        border: 1px solid #e7eaec;
        cursor: pointer;
        display: inline-block;
        height: 1.9em;
        line-height: 1.9em;
        overflow: hidden;
        padding: 0 0.6em;
        position: relative;
        white-space: nowrap;
    }

    .fc-state-active {
        background-color: #1ab394;
        border-color: #1ab394;
        color: #ffffff;
    }

    .fc-header-title h2 {
        font-size: 16px;
        font-weight: 600;
        color: inherit;
    }

    .fc-content .fc-widget-header,
    .fc-content .fc-widget-content {
        border-color: #e7eaec;
        font-weight: normal;
    }

    .fc-border-separate tbody {
        background-color: #F8F8F8;
    }

    .fc-state-highlight {
        background: none repeat scroll 0 0 #FCF8E3;
    }

    .external-event {
        padding: 5px 10px;
        border-radius: 2px;
        cursor: pointer;
        margin-bottom: 5px;
    }

    .fc-ltr .fc-event-hori.fc-event-end,
    .fc-rtl .fc-event-hori.fc-event-start {
        border-radius: 2px;
    }

    .fc-event,
    .fc-agenda .fc-event-time,
    .fc-event a {
        padding: 4px 6px;
        background-color: #23c6c8;
        /* background color */
        border-color: #23c6c8;
        /* border color */
    }

    .fc-event {
        border: 0px;
        border-left: 5px solid #23c6c8;
    }

    .fc-event-time,
    .fc-event-title {
        color: #717171;
        padding: 0 1px;
    }

    .ui-calendar .fc-event-time,
    .ui-calendar .fc-event-title {
        color: #fff;
    }

    .fc-agenda-view .fc-day-grid .fc-row {
        min-height: 1.5em;
    }
</style>
