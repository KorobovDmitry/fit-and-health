<template>
  <div class="meal-planer-calendar">

    <app-accordion :isOpened="true">
      <template v-slot:accordionHeader>
        <div class="meal-planer-calendar__target-date">
          <i class="ti-calendar"></i>
          <p class="target-date__selected-day">{{ currentDay }} {{ monthTitle[currentMonth] }} {{ currentYear }}</p>
          <i class="ti-angle-double-down"></i>
        </div>
      </template>
      <template v-slot:accordionHiddenContent>
        <div class="meal-planer-calendar__date-table">
          <div class="calendar-settings">
            <app-select
              :defaultValue="selectedMonth"
              :selectOptionsList="monthTitle"
              @selectValueChanged="month = $event"
              class="calendar-settings__select"
            />
            <app-select
              :defaultValue="selectedYear"
              :selectOptionsList="yearsOptoisArray"
              @selectValueChanged="year = $event"
              class="calendar-settings__select"
            />

            <div class="calendar-settings__change-month-btn">
              <i class="ti-angle-up change-month-btn" @click="prevMonth()"></i>
              <i class="ti-angle-down change-month-btn" @click="nextMonth()"></i>
            </div>
          </div>
          <div class="week-day">
            <p v-for="(item, index) in weekDaysTitle" :key="index" class="week-day__item">{{ item }}</p>
          </div>
          <div ref="calendarTable" class="calendar-table">
            <nuxt-link
              v-for="(item, index) in calendarCellsValues"
              :key="index"
              tag="div"
              :to="`/meal-planer?date=${item.queryDate}`"
              class="date-table__day-item"
              :class="[
                {'date-table__previosly-day-item': !item.isCurrentMonth}
              ]"
            >
              <p class="day-item__value" :data-query-date="item.queryDate" @click="getMealPlanerInfo($event)">{{ item.day }}</p>
            </nuxt-link>
          </div>
        </div>
      </template>
    </app-accordion>

  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'
import AppSelect from '@/components/basic/AppSelect'

export default {
  components: {
    AppAccordion,
    AppSelect
  },
  data () {
    return {
      weekDaysTitle: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
      monthTitle: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
      // год месяц и день возвращает сервер исходя из гет запроса ?date=2020-1-11 и данные находятся в сторе. Поэтому для выпадающих списков и рассчета календарного блока используются данные current
      currentYear: 2020,
      currentMonth: 1,
      currentDay: 11,
      month: this.currentMonth,
      year: this.currentYear
    }
  },
  computed: {
    yearsOptoisArray () {
      let yearsArr = []
      for (let i = 2010; i < 2030; i++) {
        yearsArr.push(i.toString())
      }
      return yearsArr
    },
    selectedMonth () {
      return this.monthTitle[this.currentMonth]
    },
    selectedYear () {
      return this.currentYear.toString()
    },
    daysInThisMonth () {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
    },
    calendarCellsValues () {
      const previoslyMonthDays = []
      const previoslyMonthDaysAmount = new Date(this.currentYear, this.currentMonth, 0).getDay()
      for (let i = 0; i <= previoslyMonthDaysAmount; i++) {
        // если первый день месяца не равен начальному дню недели добавить в массив значение предыдущего месяца
        if (i < previoslyMonthDaysAmount) {
          const previoslyMonthDay = new Date(this.currentYear, this.currentMonth, 0).getDate() - previoslyMonthDaysAmount + 1

          const queryDate = this.currentYear  + '-' + (this.currentMonth - 1) + '-' + (previoslyMonthDay + i)
          previoslyMonthDays.push({
            isCurrentMonth: false,
            day: previoslyMonthDay + i,
            queryDate: queryDate
          })
        }
      }

      // Получаем массив дней в текущем месяце
      const currentMonthDays = []
      for (let i = 0; i < this.daysInThisMonth; i++) {
        const queryDate = this.currentYear  + '-' + this.currentMonth + '-' + (i + 1)
        currentMonthDays.push({
          isCurrentMonth: true,
          day: i + 1,
          queryDate: queryDate
        })
      }

      const nextMonthDays = []
      const freeCells = 42 - previoslyMonthDays.length - currentMonthDays.length
      for (let i = 0; i < freeCells; i++) {
        const queryDate = this.currentYear  + '-' + (this.currentMonth + 1) + '-' + (i + 1)
        nextMonthDays.push({
          isCurrentMonth: false,
          day: i + 1,
          queryDate: queryDate
        })
      }

      const calendarCellsValues = previoslyMonthDays.concat(currentMonthDays, nextMonthDays)
      // console.log(calendarCellsValues.length)

      return calendarCellsValues
    }
  },
  watch: {
    month ($event) {
      // отслеживаем изменение переменной, что бы установить нужное значение для currentMonth и верного расчета календарных дней
      for (let i = 0; i <= this.monthTitle.length; i++) {
        if ($event === this.monthTitle[i]) {
          this.currentMonth = i
        }
      }
    },
    year () {
      this.currentYear = +this.year
    }
  },
  methods: {
    getMealPlanerInfo ($event) {
      const queryDate = {
        date: $event.target.getAttribute('data-query-date')
      }
      this.$store.dispatch('mealPlaner/fetchMealPlanerInfo', queryDate)
      this.currentDay = parseInt(queryDate.date.split('-')[2])
      this.currentMonth = parseInt(queryDate.date.split('-')[1])

      // Установить класс выбранного дня дневника питания
      for (let i = 0; i < this.$refs.calendarTable.children.length; i++) {
        console.log();
        if (this.$refs.calendarTable.children[i].children[0].innerHTML == this.currentDay && this.$refs.calendarTable.children[i].children[0].getAttribute('data-query-date').split('-')[1] == this.currentMonth) {
          this.$refs.calendarTable.children[i].children[0].classList.add('day-item__value--selected')
        } else {
          this.$refs.calendarTable.children[i].children[0].classList.remove('day-item__value--selected')
        }
      }
    },
    prevMonth () {
      if (this.currentMonth > 0) {
        --this.currentMonth
      } else {
        this.currentMonth = 11
        --this.currentYear
      }
    },
    nextMonth () {
      if (this.currentMonth < 11) {
        ++this.currentMonth
      } else {
        this.currentMonth = 0
        ++this.currentYear
      }
    },
    
  },
  mounted () {
    for (let i = 0; i < this.$refs.calendarTable.children.length; i++) {
      if (this.$refs.calendarTable.children[i].children[0].innerHTML == this.currentDay) {
        this.$refs.calendarTable.children[i].children[0].classList.add('day-item__value--selected')
      } else {
        this.$refs.calendarTable.children[i].children[0].classList.remove('day-item__value--selected')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-planer-calendar {
  position: relative;
  margin-bottom: 5px;
  .meal-planer-calendar__target-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .target-date__selected-day {
      font-weight: 500;
    }
  }
  .meal-planer-calendar__date-table {
    // border: 1px solid red;
    margin: 0 5px;
    padding: 10px;
    background: $hiddenBlockBG;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .calendar-settings {
      // border: 1px solid red;
      display: flex;
      margin-bottom: 5px;
      .calendar-settings__select:first-child {
        margin-right: 5px;
      }
      .calendar-settings__change-month-btn {
        display: flex;
        margin-left: auto;
        .change-month-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 12px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
        }
        .change-month-btn:first-child {
          margin-right: 5px;
        }
      }
    }
    .week-day {
      display: flex;
      align-items: center;
      padding: 10px 0;
      background: $white;
      border: 1px solid $blockBorder;
      border-bottom: none;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      .week-day__item {
        // border: 1px solid red;
        margin-right: auto;
        width: 50px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
      }
    }
    .calendar-table {
      display: flex;
      flex-wrap: wrap;
      background: $white;
      border: 1px solid $blockBorder;
      border-top: 1px dashed $blockBorder;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      .date-table__day-item {
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: auto;
        padding: 10px;
        width: 14.28%;
        height: 50px;
        .day-item__value {
          // border: 1px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          cursor: pointer;
        }
        .day-item__value--selected {
          background: $green;
          color: $white;
          font-weight: 600;
          border-radius: 6px;
        }
      }
      .date-table__previosly-day-item {
        opacity: .4;
      }
    }
  }
}

</style>
