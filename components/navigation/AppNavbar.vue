<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <nuxt-link to="/" exact no-prefetch>FH</nuxt-link>
    </div>

    <div
      v-for="(linkGroup, index) in mainNav"
      :key="index"
      class="navbar__page-links-group"
      :class="[{'navbar__page-links-group--active': linkGroup.active}]"
    >
      <nuxt-link
        v-for="(item, index) in linkGroup.links"
        :key="index"
        :to="item.link"
        exact
        no-prefetch
        class="navbar__page-link"
        active-class="navbar__page-link--active"
        :title="item.title"
        @click.native="updateGroupHeight($event)"
      >
        <i :class="item.icon"></i>
      </nuxt-link>
    </div>

    <i
      class="ti-export logout"
      title="Выйти"
      @click="logout()"
    ></i>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      mainNav: [
        {
          active: false,
          group: 'profile',
          links: [
            {
              title: 'Профиль',
              link: '/profile',
              icon: 'ti-home'
            },
            {
              title: 'Сообщения',
              link: '/profile/messages',
              icon: 'ti-comments'
            },
            {
              title: 'Интересные страницы',
              link: '/profile/subscriptions',
              icon: 'ti-crown'
            },
            {
              title: 'Фото и видео',
              link: '/profile/media',
              icon: 'ti-gallery'
            }
          ]
        },
        {
          active: false,
          group: 'training-diary',
          links: [
            {
              title: 'Дневник тренировок',
              link: '/training-diary',
              icon: 'ti-timer'
            },
            {
              title: 'Редактор тренировочных программ',
              link: '/training-diary/training-program-editor',
              icon: 'ti-pencil-alt'
            },
            {
              title: 'Программы тренировок',
              link: '/training-diary/training-programs',
              icon: 'ti-clipboard'
            },
            {
              title: 'Справочник по упражнениям',
              link: '/training-diary/exercise-guide',
              icon: 'ti-headphone-alt'
            },
            {
              title: 'Новая тренировка',
              link: '/training-diary/training-in-progress',
              icon: 'ti-bolt'
            }
          ]
        },
        {
          active: false,
          group: 'meal-planer',
          links: [
            {
              title: 'Дневник питания',
              link: '/meal-planer',
              icon: 'ti-agenda'
            },
            {
              title: 'Редактор рационов',
              link: '/meal-planer/meal-planer-editor',
              icon: 'ti-pencil-alt'
            },
            {
              title: 'Сохраненные рационы',
              link: '/meal-planer/meal-plans',
              icon: 'ti-write'
            },
            {
              title: 'Книга рецептов',
              link: '/meal-planer/recipes-book',
              icon: 'ti-book'
            },
            {
              title: 'Таблица калорийности продуктов',
              link: '/meal-planer/food-calorie-table',
              icon: 'ti-view-list-alt'
            }
          ]
        },
        {
          active: false,
          group: 'challenges',
          links: [
            {
              title: 'Вызовы',
              link: '/challenges',
              icon: 'ti-cup'
            },
            {
              title: 'Поиск вызывов',
              link: '/challenges/challenges-book',
              icon: 'ti-book'
            },
            {
              title: 'Конструктор вызывов',
              link: '/challenges/challenges-constructor',
              icon: 'ti-layout'
            },
            {
              title: 'Принятые вызовы',
              link: '/challenges/accepted-challenges',
              icon: 'ti-pencil-alt'
            },
            {
              title: 'Статистика по вызовам',
              link: '/challenges/challenge-in-progress',
              icon: 'ti-bolt'
            },
          ]
        },
        {
          active: false,
          group: 'measurements',
          links: [
            {
              title: 'Статистика и замеры',
              link: '/measurements',
              icon: 'ti-bar-chart'
            }
          ]
        },
        {
          active: false,
          group: 'handbook',
          links: [
            {
              title: 'Справочник',
              link: '/handbook',
              icon: 'ti-bookmark-alt'
            }
          ]
        },
        {
          active: false,
          group: 'settings',
          links: [
            {
              title: 'Настройки',
              link: '/settings',
              icon: 'ti-settings'
            }
          ]
        },
      ]
    }
  },
  watch: {
    $route(to, from) {
      const path = to.path
      const PathChunks = path.split('/').filter(item => item !== "")

      this.mainNav.forEach(element => {
        element.group === PathChunks[0] ? element.active = true : element.active = false
      })
    }
  },
  methods: {
    updateGroupHeight ($event) {
      const LinksGroups = document.querySelectorAll('.navbar__page-links-group')
      const LinkHeight = document.querySelector('.navbar__page-link').getBoundingClientRect().height

      for (let i = 0; i < LinksGroups.length; i++) {
        LinksGroups[i].style.height = LinkHeight + 'px'
      }

      const TargetLinksGroup = $event.target.closest('.navbar__page-links-group')
      const TargetLinksGroupChildElements = TargetLinksGroup.querySelectorAll('.navbar__page-link')

      TargetLinksGroup.style.height = TargetLinksGroupChildElements.length * LinkHeight + 10 + 'px'
    },
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/auth')
    },
  },
  mounted () {
    const Path = this.$route.path
    const PathChunks = Path.split('/').filter(item => item !== "")

    this.mainNav.forEach(element => {
      element.group === PathChunks[0] ? element.active = true : element.active = false
    })

    this.$nextTick(function () {
      const LinksGroups = document.querySelectorAll('.navbar__page-links-group')
      const LinkHeight = document.querySelector('.navbar__page-link').getBoundingClientRect().height
      
      for (let i = 0; i < LinksGroups.length; i++) {
        LinksGroups[i].style.height = LinkHeight + 'px'
      }

      const TargetLinksGroup = document.querySelector('.navbar__page-links-group--active')
      const TargetLinksGroupChildElements = TargetLinksGroup.querySelectorAll('.navbar__page-link')
      TargetLinksGroup.style.height = TargetLinksGroupChildElements.length * LinkHeight + 10 + 'px'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.navbar {
  // border: 1px solid red;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  height: 100%;
  background: $white;
  box-shadow: 0 0 10px 2px rgba(0,0,0,.1);
  z-index: 9000;
  .navbar__logo {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
    min-height: 60px;
    background: $green;
    a {
      color: $white;
      font-size: 28px;
      font-weight: 600;
    }
  }
  .navbar__page-links-group {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 35px;
    transition: $tr-04;
    height: 0;
    overflow: hidden;
    .navbar__page-link {
      // border: 1px solid red;
      position: relative;
      // margin-bottom: 10px;
      padding: 10px;
      width: 40px;
      min-height: 40px;
      text-align: center;
      text-decoration: none;
      color: rgba(0,0,0,.5);
      font-size: 18px;
      // border-left: 2px solid transparent;
      // border-right: 2px solid transparent;
      border-radius: 50%;
      transition: $tr-02;
    }
    .navbar__page-link:last-child {
      margin-bottom: 0;
    }
    .navbar__page-link:hover {
      color: $green;
    }
    .navbar__page-link--active {
      color: $green;
      background: $white;
      box-shadow: 0 0 5px 1px rgba(0,0,0,.2);
    }
  }

  .navbar__page-links-group--active {
    background: rgba(0,0,0,.05);
  }
  
  .logout {
    margin: auto 0 10px 0;
    padding: 10px;
    transform: rotate(90deg);
    color: rgba(0,0,0,.5);
    font-size: 18px;
  }
}

</style>
