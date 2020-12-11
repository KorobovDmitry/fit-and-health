<template>
  <div class="messages">
    <app-page-title>Сообщения</app-page-title>
    <div class="messages__content">
      <div class="content__left">
        <opened-dialogs />
      </div>
      <div class="content__center">
        <message-history />
        <new-message />
      </div>
      <div class="content__right">
        <attached-materials />
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import OpenedDialogs from '@/components/messages/OpenedDialogs'
import MessageHistory from '@/components/messages/MessageHistory'
import NewMessage from '@/components/messages/NewMessage'
import AttachedMaterials from '@/components/messages/AttachedMaterials'
export default {
  components: {
    AppPageTitle,
    OpenedDialogs,
    MessageHistory,
    NewMessage,
    AttachedMaterials
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vars.scss";

.messages {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .messages__content {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    max-width: 1700px;
    .content__left {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
      min-height: 100px;
    }
    .content__center {
      // border: 1px solid red;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      margin: 0 40px;
      height: calc(100vh - 155px);
    }
    .content__right {
      // border: 1px solid red;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
    }
  }
}

</style>
