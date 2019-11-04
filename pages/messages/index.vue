<template>
  <div class="messages">
    <div class="messages__content">
      <div class="messages__left-block">
        найдите контакт в списке подписок или откройте уже существующий диалог в списке открытых диалогов
      </div>
      <div class="messages__center-block">
        сообщения
      </div>
      <div class="messages__right-block">
        <p class="chat-list__block-title">Открытые диалоги</p>
        <ul class="chat-list">
          <li class="chat-list__item">
            user
          </li>
          <li class="chat-list__item"></li>
          <li class="chat-list__item"></li>
          <li class="chat-list__item"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['user-auth'],
  components: {}
}
</script>

<style lang="scss">
@import "@/assets/scss/vars.scss";

.messages {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-left: 80px;
  padding: 40px;
  .messages__content {
    // border: 1px solid red;
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    width: 100%;
    max-width: 1700px;
    .messages__left-block {
      // border: 1px solid red;
      // padding: 10px 20px;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
      min-height: 100px;
      // background: $white;
      // border: 1px solid $blockBorder;
      // border-radius: 6px;
    }
    .messages__center-block {
      // border: 1px solid red;
      margin: 0 40px;
      padding: 20px 40px;
      width: 100%;
      height: calc(100vh - 140px);
      border: 1px dashed $blockBorder;
      border-radius: 6px;
    }
    .messages__right-block {
      // border: 1px solid red;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
      // min-height: 100px;
      .chat-list__block-title {
        margin: 0 20px 14px 20px;
        padding: 0 5px;
        font-size: 18px;
        font-weight: 500;
      }
      .chat-list {
        // border: 1px solid red;
        .chat-list__item {
          margin-bottom: 10px;
          padding: 10px 20px;
          height: 140px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
        .chat-list__item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

</style>
