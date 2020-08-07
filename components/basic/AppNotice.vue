<template>
  <li
    ref="notice"
    class="notice"
    :class="[
      {'notice-success': success},
      {'notice-warning': warning},
      {'notice-info': info},
      {'notice-alert': alert}
    ]"
    @mouseenter="setHoverEffect()"
    @mouseleave="setHoverEffect()"
  >
    <div class="notice__info">
      <div class="info__icon">
        <i v-if="success" class="ti-check-box"></i>
        <i v-if="warning" class="ti-na"></i>
        <i v-if="alert" class="ti-alert"></i>
        <i v-if="info" class="ti-info"></i>
      </div>
      <p class="info__text">{{ notice.message }}</p>
    </div>

    <div ref="timeIndicator" class="notice__time-indicator"></div>

    <button class="notice__close-btn" @click="closeNotice()">
      <i class="ti-close"></i>
    </button>
  </li>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  props: {
    notice: Object
  },
  data () {
    return {
      isVisible: false,
      isHover: false
    }
  },
  computed: {
    success () {
      return this.notice.type === 'success' ? true : false
    },
    warning () {
      return this.notice.type === 'warning' ? true : false
    },
    info () {
      return this.notice.type === 'info' ? true : false
    },
    alert () {
      return this.notice.type === 'alert' ? true : false
    },
    step () {
      let currentIndicatorWidth = this.$refs.timeIndicator.getBoundingClientRect().width
      return ((currentIndicatorWidth / 30) / (this.notice.timeToShow / 1000))
    }
  },
  methods: {
    startTimeIndicator () {
      let currentIndicatorWidth = this.$refs.timeIndicator.getBoundingClientRect().width
      // (ширина / кадры в сек) / (кол-во сек / 1000)
      if (currentIndicatorWidth > 0 && this.isVisible) {
        if (currentIndicatorWidth - this.step < 0) {
          this.closeNotice()
        } else {
          this.$refs.timeIndicator.style.width = currentIndicatorWidth - this.step + 'px'
        }
        setTimeout( () => {
          if (!this.isHover) {
            this.startTimeIndicator()
          }
        }, 1000 / 30)
      }
    },
    setHoverEffect () {
      this.isHover = !this.isHover
      if (!this.isHover) {
        this.startTimeIndicator()
      }
    },
    closeNotice () {
      this.$refs.timeIndicator.style.width = 0
      this.isVisible = false
      // скрыть элемент анимированно
      const noticeWidth = this.$refs.notice.getBoundingClientRect().width
      this.$refs.notice.style.marginLeft = `${noticeWidth + 30}px`
      this.$refs.notice.style.marginRight = `-${noticeWidth + 30}px`
      // поднять notice вверх перед удалением из списка
      setTimeout( () => {
        const noticeHeight = this.$refs.notice.getBoundingClientRect().height
        this.$refs.notice.style.marginTop = `-${noticeHeight + 10}px`
        // удалить notice из списка
        setTimeout( () => {
          this.$store.commit('notifications/removeNotice', this.notice.id)
        }, 400)
      }, 400)
    }
  },
  mounted () {
    this.isVisible = true
    const noticeWidth = this.$refs.notice.getBoundingClientRect().width
    this.$refs.notice.style.marginLeft = `${noticeWidth}px`
    this.$refs.notice.style.marginRight = `-${noticeWidth}px`

    setTimeout( () => {
      this.$refs.notice.style.transition = 'all .4s ease-in-out'
      this.$refs.notice.style.visibility = 'visible'
      this.$refs.notice.style.marginLeft = 0
      this.$refs.notice.style.marginRight = 0
    }, 0 )

    this.startTimeIndicator()
  }
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.notice {
  position: relative;
  margin-bottom: 10px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: $btnActiveShadow;
  visibility: hidden;
  .notice__info {
    display: flex;
    align-items: center;
    color: $white;
    .info__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      i {
        font-size: 20px;
      }
    }
    .info__text {
      // border: 1px solid red;
      margin: 10px 40px 12px 0;
    }
  }
  .notice__time-indicator {
    position: absolute;
    bottom: 2px;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);
  }
  .notice__close-btn {
    // border: 1px solid red;
    position: absolute;
    top: 0;
    right: 0;
    // transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: $white;
    font-size: 12px;
    background: none;
    border: none;
    outline: none;
  }
}

.notice-success {
  background: $green;
}
.notice-warning {
  background: $yellow;
  .notice__info {
    color: $black;
  }
  .notice__close-btn {
    color: $black;
  }
}
.notice-info {
  background: $blue;
}
.notice-alert {
  background: $red;
}

</style>