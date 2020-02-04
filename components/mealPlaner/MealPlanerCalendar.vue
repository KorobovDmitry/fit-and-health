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
            <app-select defaultValue="январь" :selectOptionsList="['январь', 'февраль', 'март', 'апрель', 'мая', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']"/>
            <app-select defaultValue="2020" :selectOptionsList="['2020']"/>
            <div class="calendar-settings__change-month-btn">
              <i class="ti-angle-up change-month-btn"></i>
              <i class="ti-angle-down change-month-btn"></i>
            </div>
          </div>
          <div class="week-day">
            <p v-for="(item, index) in weekDaysTitle" :key="index" class="week-day__item">{{ item }}</p>
          </div>
          <div class="date-table">
            <p
              v-for="(item, index) in calendarCellsValues"
              :key="index"
              class="date-table__day-item"
              :class="[
                {'date-table__previosly-day-item': !item.isCurrentMonth}
              ]"
            >{{ item.day }}</p>
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
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      currentDay: new Date().getDate(),
      // weekDay: new Date().getDay()
    }
  },
  computed: {
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
          // previoslyMonthDays.push(previoslyMonthDay + i)
          previoslyMonthDays.push({
            isCurrentMonth: false,
            day: previoslyMonthDay + i
          })
        }
      }

      // Получаем массив дней в текущем месяце
      const currentMonthDays = []
      for (let i = 0; i < this.daysInThisMonth; i++) {
        currentMonthDays.push({
          isCurrentMonth: true,
          day: i + 1
        })
      }

      const nextMonthDays = []
      const freeCells = 42 - ((new Date(this.currentYear, this.currentMonth).getDay() - 1) + this.daysInThisMonth)
      for (let i = 0; i < freeCells; i++) {
        nextMonthDays.push({
          isCurrentMonth: false,
          day: i + 1
        })
      }

      const calendarCellsValues = previoslyMonthDays.concat(currentMonthDays, nextMonthDays)
      // console.log(calendarCellsValues.length)

      return calendarCellsValues
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.meal-planer-calendar {
  position: relative;
  margin-bottom: 5px;
  // background: $white;
  // border: 1px solid $blockBorder;
  // border-radius: 6px;
  .meal-planer-calendar__target-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin: 0 10px;
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
      // justify-content: space-between;
      margin-bottom: 5px;
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
      // margin-bottom: 5px;
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
    .date-table {
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
        width: 50px;
        height: 50px;
      }
      .date-table__previosly-day-item {
        opacity: .4;
      }
    }
  }
}

</style>
