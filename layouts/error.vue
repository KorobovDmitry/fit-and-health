<template>
  <div class="not-found-page">
    <p>404</p>

    <hr>

    <!-- <app-tooltip>
      <template v-slot:tooltipElement>
        <p>заголовок аккордиона</p>
      </template>
      <template v-slot:tooltipText>
        <p>Текст подсказки в несколько строк</p>
      </template>
    </app-tooltip> -->

    <hr>

    <!-- <app-accordion>
      <template v-slot:accordionHeader>
        <p>заголовок аккордиона</p>
      </template>
      <template v-slot:accordionHiddenContent>
        <p>Скрытый контент</p>
      </template>
    </app-accordion> -->

    <hr>

    <!-- <app-accordion-list v-for="(item, index) in accordionList" :key="index">
      <template v-slot:accordionHeader>
        <p :data-target-header="index" >заголовок аккордиона: {{ item.header }}</p>
      </template>
      <template v-slot:accordionHiddenContent>
        <p :data-target-hiddeb-content="index">Скрытый контент: {{ item.hiddenContent }}</p>
      </template>
    </app-accordion-list> -->

    <hr>

    <!-- <app-scroll-block-old>
      <template v-slot:scrollContent>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <br>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <br>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <br>
        <p>test</p>
        <br>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </template>
    </app-scroll-block-old> -->

    <hr>

    <app-scroll-block>
      <template v-slot:scrollContent>
        <p>scroll content</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <br>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <br>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <br>
        <p>test</p>
        <br>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </template>
    </app-scroll-block>

  </div>
</template>

<script>
import AppAccordion from '@/components/basic/AppAccordion'
import AppAccordionList from '@/components/basic/AppAccordionList'
import AppScrollBlockOld from '@/components/basic/AppScrollBlockOld'
import AppScrollBlock from '@/components/basic/AppScrollBlock'
import AppTooltip from '@/components/basic/AppTooltip'

export default {
  head: {
    title: 'Fit and Health - 404 ошибка'
  },
  layout: 'empty',
  components: {
    AppAccordion,
    AppAccordionList,
    AppScrollBlockOld,
    AppScrollBlock,
    AppTooltip
  },
  data () {
    return {
      accordionList: [
        {
          header: 'first',
          hiddenContent: 'first block hidden content'
        },
        {
          header: 'second',
          hiddenContent: 'second block content'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

// .not-found-page {
//   border: $redBorder;
// }

</style>
