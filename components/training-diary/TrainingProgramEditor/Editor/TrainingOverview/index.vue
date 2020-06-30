<template>
  <div class="training-overview">
    <program-title />

    <div class="main-info">
      <div class="img-and-social">
        <div class="img__wrapper">
          <img
            class="img"
            src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg"
            alt="training-program-img"
          />
        </div>
        <social-btns class :btnsInfo="{like: 0, dislike: 0, share: 0}" />
      </div>

      <div class="overview">
        <div class="stats-description-marks">
          <div class="stats-and-description">
            <training-stats />
            <training-description />
          </div>

          <app-add-marks-form
            :marks="['mark 1']"
            @addMark="addMark($event)"
            @removeMark="removeMark($event)"
          />
        </div>

        <training-skill />

      </div>
    </div>



  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import SocialBtns from "@/components/basic/SocialBtns"
import ProgramTitle from '@/components/training-diary/TrainingProgramEditor/Editor/TrainingOverview/ProgramTitle'
import TrainingSkill from '@/components/training-diary/TrainingProgramEditor/Editor/TrainingOverview/TrainingSkill'
import AppAddMarksForm from "@/components/basic/AppAddMarksForm"
import TrainingDescription from '@/components/training-diary/TrainingProgramEditor/Editor/TrainingOverview/TrainingDescription'
import TrainingStats from '@/components/training-diary/TrainingProgramEditor/Editor/TrainingOverview/TrainingStats'

export default {
  components: {
    AppBlockTitle,
    ProgramTitle,
    TrainingSkill,
    AppAddMarksForm,
    SocialBtns,
    TrainingDescription,
    TrainingStats
  },
  methods: {
    addMark($event) {
      console.log($event)
    },
    removeMark($event) {
      console.log($event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-overview {
  // border: 1px solid red;

  .main-info {
    display: flex;
    margin-top: 5px;
    .img-and-social {
      width: 300px;
      min-width: 300px;
      max-width: 300px;
      .img__wrapper {
        margin-bottom: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        overflow: hidden;
        .img {
          min-width: 280px;
          // object-fit: cover;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }
    }
    .overview {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      .stats-description-marks {
        flex: 1 1 auto;
        display: flex;
        margin-left: 5px;
        .stats-and-description {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}

</style>
