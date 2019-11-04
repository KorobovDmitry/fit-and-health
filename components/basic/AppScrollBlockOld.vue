<template>
  <div ref="scrollBlock" class="scroll-block" @wheel.self="scrollBlock($event)">
    <div ref="scrollContent" class="scroll-block__content">
      <slot name="scrollContent"></slot>
    </div>
    <div ref="scrollLine" class="scroll-block__scroll-line"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    scrollBlock ($event) {
      // сделать проверку на классы блока и контента перед началом прокуртки. Остановить всплытие события при прокрутке , если контент прокручен не до конца
      console.log($event.target.firstChild.classList)

      let scrollBlockHeight = this.$refs.scrollBlock.getBoundingClientRect().height
      let contentHeight = this.$refs.scrollContent.getBoundingClientRect().height
      let contentMarginTop = parseFloat(this.$refs.scrollContent.style.marginTop)
      let maxScroll = scrollBlockHeight - contentHeight
      let hiddenContentHeight = maxScroll - contentMarginTop
      let scrollStep = 50

      // получаем значение шага прокрутки контента в процентах от невидимой области прокручиваемого контента
      let percentToScrol = 100 / ((hiddenContentHeight + contentMarginTop) / scrollStep) * -1
      // console.log(percentToScrol)

      // узнать сколько процентов содержится в 20px по отношению к hiddenContentHeight
      // 100 / (hiddenContentHeight / scrollStep)

      if ($event.deltaY > 0) {
        // скрол вверх
        if (contentMarginTop > maxScroll) {
          if (hiddenContentHeight < scrollStep * -1) {
            // Content перемещение
            this.$refs.scrollContent.style.marginTop = contentMarginTop - scrollStep + 'px'
            // ScrollLine перемещение
            // процент перемещенного контента равен проценту перемещенного скрол лайна
            this.$refs.scrollLine.style.marginTop = parseFloat(this.$refs.scrollLine.style.marginTop) + ((scrollBlockHeight - parseFloat(this.$refs.scrollLine.style.height)) / 100 * percentToScrol) + 'px'
          } else {
            // скрол оставшейся части контента (меньше шага прокуртки scrollStep)
            this.$refs.scrollContent.style.marginTop = contentMarginTop + parseFloat(hiddenContentHeight) + 'px'
            // скрол оставшейся части scrollLine
            this.$refs.scrollLine.style.marginTop = scrollBlockHeight - parseFloat(this.$refs.scrollLine.style.height) + 'px'
          }
        } else {
          // console.log(`скрол НЕЛЬЗЯ выполнить`)
        }
      } else {
        // скрол вниз
        if (contentMarginTop < 0) {
          if (contentMarginTop <= scrollStep * -1) {
            this.$refs.scrollContent.style.marginTop = contentMarginTop + scrollStep + 'px'
            this.$refs.scrollLine.style.marginTop = parseFloat(this.$refs.scrollLine.style.marginTop) - ((scrollBlockHeight - parseFloat(this.$refs.scrollLine.style.height)) / 100 * percentToScrol) + 'px'
          } else {
            this.$refs.scrollContent.style.marginTop = 0 + 'px'
            this.$refs.scrollLine.style.marginTop = 0 + 'px'
          }
        } else {
          // console.log(`скрол НЕЛЬЗЯ выполнить`)
        }
      }
    }
  },
  mounted: function () {
    let scrollBlockHeight = this.$refs.scrollBlock.getBoundingClientRect().height
    let contentHeight = this.$refs.scrollContent.getBoundingClientRect().height
    let hiddenContentHeight = contentHeight - scrollBlockHeight

    if (scrollBlockHeight - hiddenContentHeight > 60) {
      this.$refs.scrollLine.style.height = scrollBlockHeight - hiddenContentHeight + 'px'
      // console.log('высота scroll line: ' + this.$refs.scrollLine.style.height)
    } else {
      this.$refs.scrollLine.style.height = 60 + 'px'
      // console.log('высота scroll line: ' + this.$refs.scrollLine.style.height)
    }

    this.$refs.scrollContent.style.marginTop = 0
    this.$refs.scrollLine.style.marginTop = 0
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

.scroll-block {
  border: 1px solid red;
  position: relative;
  display: flex;
  width: 200px;
  height: 200px;
  overflow: hidden;
  .scroll-block__content {
    // border: 1px solid blue;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    transition: .25s linear;
  }
  .scroll-block__scroll-line {
    position: absolute;
    top: 0;
    right: 2px;
    width: 4px;
    background: rgba(0,0,0,.2);
    border-radius: 4px;
    cursor: pointer;
    transition: .25s linear;
  }
  .scroll-block__scroll-line:hover {
    width: 6px;
    background: rgba(0,0,0,.4);
  }
}
</style>
