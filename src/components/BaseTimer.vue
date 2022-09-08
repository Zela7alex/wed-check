<template>
  <div>
    <h2 id="time-left">
      <i class="fa fa-clock-o"></i>{{ displayDays }}:{{ displayHours }}:{{
        displayMinutes
      }}:{{ displaySeconds }}
    </h2>
  </div>
</template>

<script>
export default {
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
  }),

  computed: {
    // This is the math logic to split up days, hours, secs etc.
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
  },
  mounted() {
    this.showRemaining()
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const end = new Date(2022, 9, 8, 16, 1, 1, 1)
        const distance = end.getTime() - now.getTime()

        if (distance < 0) {
          clearInterval(timer)
          return
        }
        const days = Math.floor(distance / this._days)
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)
        this.displayMinutes = minutes < 10 ? '0' + minutes : minutes
        this.displaySeconds = seconds < 10 ? '0' + seconds : seconds
        this.displayHours = hours < 10 ? '0' + hours : hours
        this.displayDays = days < 10 ? '0' + days : days
      })
    },
  },
}
</script>

<style lang="css" scoped>
#time-left {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
i {
  margin-right: 1%;
}
h2 {
  color: rgb(245, 241, 230);
  text-shadow: rgb(175, 188, 190) 1px 3px 0.5px;
}
</style>
