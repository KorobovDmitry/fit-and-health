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
      @click="updateGroupHeight($event)"
    >
      <nuxt-link
        v-for="(item, index) in linkGroup.links"
        :key="index"
        :to="item.link"
        exact
        no-prefetch
        class="navbar__page-link"
        :class="item.icon"
        active-class="navbar__page-link--active"
      ></nuxt-link>
    </div>

    <i
      class="ti-export logout"
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
              link: '/profile',
              icon: 'ti-home'
            },
            {
              link: '/profile/messages',
              icon: 'ti-comments'
            }
          ]
        },
        {
          active: false,
          group: 'training-diary',
          links: [
            {
              link: '/training-diary',
              icon: 'ti-timer'
            },
            {
              link: '/training-diary/training-programs',
              icon: 'ti-clipboard'
            },
            {
              link: '/training-diary/exercise-guide',
              icon: 'ti-book'
            }
          ]
        },
        {
          active: false,
          group: 'meal-planer',
          links: [
            {
              link: '/meal-planer',
              icon: 'ti-agenda'
            },
            {
              link: '/meal-planer/meal-plans',
              icon: 'ti-clipboard'
            },
            {
              link: '/meal-planer/recipes-book',
              icon: 'ti-book'
            },
            {
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
              link: '/challenges',
              icon: 'ti-cup'
            }
          ]
        },
        {
          active: false,
          group: 'measurements',
          links: [
            {
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
        LinksGroups[i].style.height = LinkHeight + 4 + 'px'
      }

      const ActiveLinksGroupLinks = $event.target.parentElement.querySelectorAll('.navbar__page-link')
      $event.target.parentElement.style.height = LinkHeight * ActiveLinksGroupLinks.length + 4 + 'px'
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
        LinksGroups[i].style.height = LinkHeight + 4 + 'px'
      }

      const ActiveLinksGroup = document.querySelector('.navbar__page-links-group--active')
      const ActiveLinksGroupLinks = ActiveLinksGroup.querySelectorAll('.navbar__page-link')
      ActiveLinksGroup.style.height = LinkHeight * ActiveLinksGroupLinks.length + 4 + 'px'
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
  width: 80px;
  height: 100%;
  background: $white;
  border-right: 1px solid $blockBorder;
  z-index: 9000;
  .navbar__logo {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: auto;
    width: 100%;
    height: 60px;
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
    border: 2px solid transparent;
    border-radius: 8px;
    transition: $tr-02;
    height: 0;
    overflow: hidden;
    .navbar__page-link {
      // border: 1px solid red;
      position: relative;
      padding: 10px;
      text-align: center;
      text-decoration: none;
      color: $black;
      font-size: 28px;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
      transition: $tr-02;
    }
    .navbar__page-link:last-child {
      margin-bottom: 0;
    }
    .navbar__page-link:hover {
      color: $green;
    }
    .navbar__page-link--active {
      color: $white;
      background: $green;
    }
    .navbar__page-link--active:hover {
      color: $white;
    }
  }

  .navbar__page-links-group--active {
    border: 2px solid $green;
  }
  
  .logout {
    margin: auto 0 10px 0;
    padding: 10px;
    transform: rotate(90deg);
    color: $black;
    font-size: 28px;
  }
}

</style>
