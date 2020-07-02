<template>
  <div class="additional-info">
    <app-block-title>Дополнительная информация</app-block-title>
    <div class="additional-info__content">

      <!-- <div class="author">
        <p class="author__block-title">Автор программы</p>
        <div class="author__info">
          <div class="user-avatar">
            <img src="https://pic.sport.ua/media/images/Foto%202.jpg" alt="user-avatar" class="avatar">
          </div>
          <div class="author__name">
            <p class="name">Дмитрий Коробов</p>
            <p class="status">online</p>
          </div>
          <div class="author__action-btn">
            <i class="ti-new-window"></i>
          </div>
        </div>
      </div> -->

      <training-focus />

      <div class="action-btns">
        <app-button class="mt-10" uppercase >
          <i class="ti-bar-chart"></i>
        </app-button>

        <app-button class="ml-5 mt-10" uppercase >
          <i class="ti-pencil"></i>
        </app-button>

        <app-button class="ml-5 mt-10" uppercase fillArea >Сделать основной</app-button>
      </div>

      <app-button class="mt-10" uppercase fillArea >Начать тренировку</app-button>

    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'
import AppButton from '@/components/basic/AppButton'
import TrainingFocus from '@/components/training-diary/Program/AdditionalInfo/TrainingFocus'

export default {
  components: {
    AppBlockTitle,
    AppButton,
    TrainingFocus
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.additional-info {
  // border: 1px solid red;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  .additional-info__content {
    padding: 10px;
    background: $hiddenBlockBG;
    box-shadow: $boxShadow;
    border-radius: 6px;
    // .author {
    //   display: flex;
    //   flex-direction: column;
    //   // align-items: center;
    //   margin-bottom: 5px;
    //   padding: 10px;
    //   background: $white;
    //   border: 1px solid $blockBorder;
    //   border-radius: 6px;
    //   .author__block-title {
    //     padding-bottom: 10px;
    //     border-bottom: 1px dashed $blockBorder;
    //     text-align: center;
    //     font-weight: 500;
    //   }
    //   .author__info {
    //     display: flex;
    //     align-items: center;
    //     margin-top: 10px;
    //     cursor: pointer;
    //     .user-avatar {
    //       width: 50px;
    //       height: 50px;
    //       border: 1px solid $blockBorder;
    //       border-radius: 6px;
    //       .avatar {
    //         width: 100%;
    //         height: 100%;
    //         object-fit: cover;
    //         border-radius: 6px;
    //       }
    //     }
    //     .author__name {
    //       margin-left: 10px;
    //       .name {
    //         font-weight: 500;
    //         transition: $tr-02;
    //       }
    //       .status {
    //         margin-top: 5px;
    //         font-size: 12px;
    //       }
    //     }
    //     .author__action-btn {
    //       // align-self: flex-start;
    //       margin-left: auto;
    //       padding: 5px;
    //       transition: $tr-02;
    //       cursor: pointer;
    //     }
    //   }
    //   .author__info:hover {
    //     .author__action-btn {
    //       color: $green;
    //     }
    //   }
    // }
    .action-btns {
      display: flex;
    }
  }
}

</style>
