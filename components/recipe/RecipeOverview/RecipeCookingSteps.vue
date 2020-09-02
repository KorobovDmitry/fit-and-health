<template>
  <div class="cooking-steps">
    <p class="cooking-steps__block-title">Этапы приготовления</p>
    <ul class="steps">
      <li v-for="(item, index) in 4" :key="index" class="step">
        <div class="image-and-description">
          <img class="image" src="" alt="step-image">
          <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam dignissimos vel ut? Repellat fugiat, repellendus ullam eius quasi voluptates sit nisi magni sint unde id odio fugit labore reiciendis est facere veniam ducimus natus maxime distinctio consectetur saepe vel a officiis? Aliquam porro, illo voluptate animi commodi ut rerum, eos minima magni, unde quibusdam earum tenetur exercitationem placeat voluptas modi.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.cooking-steps {
  margin-top: 5px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .cooking-steps__block-title {
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
  }
  .steps {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    .step {
      margin-bottom: 20px;
      .image-and-description {
        display: flex;
        .image {
          // border: 1px solid red;
          width: 100%;
          min-width: 400px;
          max-width: 400px;
          min-height: 250px;
          background: $insetBlockBG;
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
        .description {
          flex: 1 1 auto;
          margin-left: 20px;
        }
      }
    }
    .step:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
