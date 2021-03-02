<template>
  <div class="challenge">
    <div class="challenge__card">
      <div class="card__content">
        <!-- <p class="card__title">Название вызова</p> -->

        <div class="image-and-socials">
          <div class="image__wrapper">
            <img
              class="image"
              src="https://wallpapercave.com/wp/wp1836146.jpg"
            />
          </div>
          <social-btns
            class="mt-5"
            :btnsInfo="{ like: 1, dislike: 0, share: 10 }"
          />
        </div>

        <div class="description-and-skill">
          <p class="card__title">Название вызова</p>
          <div class="description">
            <p class="description__block-title">Описание</p>
            <p class="description__text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную, дороге за ее однажды несколько, эта диких грустный рыбного сих ручеек меня? Переписывается решила точках родного толку, имеет все имени, всемогущая свой вопрос свое осталось парадигматическая.</p>
          </div>
          <div class="training-skill">
            <p>Уровень сложности:</p>
            <p>Высокий</p>
          </div>
        </div>

        <div class="marks">
          <p class="marks__block-title">Отметки</p>
        </div>

        <div class="actions">
          <nuxt-link class="action__item" to="" title="Подробнее">
            <i class="ti-layout"></i>
          </nuxt-link>
          <nuxt-link class="action__item" to="" title="Приступить к выполнению">
            <i class="ti-control-play"></i>
          </nuxt-link>

          <nuxt-link class="action__item mt-auto" to="" title="Искать похожие">
            <i class="ti-search"></i>
          </nuxt-link>
          <nuxt-link class="action__item" to="" title="Лучшие результаты">
            <i class="ti-cup"></i>
          </nuxt-link>

          <nuxt-link class="action__item" to="" title="Не интересно">
            <i class="ti-reload"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialBtns from '@/components/basic/SocialBtns'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    SocialBtns,
    AppButton
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.challenge {
  // border: 1px solid red;
  margin-bottom: 20px;
  width: 100%;
  .challenge__card {
    display: flex;
    flex-direction: column;
    .card__content {
      display: flex;
      padding: 10px;
      background: $hiddenBlockBG;
      border-radius: 6px;
      box-shadow: $boxShadow;
      .image-and-socials {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-width: 400px;
        max-width: 400px;
        .image__wrapper {
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .image {
            object-fit: cover;
            object-position: center;
            border-radius: 6px;
          }
        }
      }
      .description-and-skill {
        // flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        .card__title {
          padding: 10px 20px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          text-align: center;
          font-weight: 500;
        }
        .description {
          flex: 1 1 auto;
          margin-top: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .description__block-title {
            text-align: center;
            font-weight: 500;
            padding-bottom: 10px;
            border-bottom: 1px dashed $blockBorder;
          }
          .description__text {
            padding: 10px 10px 0 10px;
          }
        }
        .training-skill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }
      .marks {
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        padding: 10px;
        width: 100%;
        max-width: 250px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
      .actions {
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        padding: 10px;
        background: $white;
        border: 1px solid $blockBorder;
        border-radius: 6px;
        .action__item {
          margin-bottom: 5px;
          padding: 5px 0;
          i {
            font-size: 20px;
            transition: $tr-02;
          }
        }
        .action__item:last-child {
          margin-bottom: 0;
        }
        .action__item:hover {
          i {
            color: $green;
          }
        }
      }
    }
  }
}

</style>