<template>
  <li class="tree-item">
    <app-input-checkbox
      v-model="item.active"
      :label="item.title"
      :value="item.title"
    />

    <ul v-if="item.children" class="tree-item__list">
      <li
        class="tree-item"
        v-for="(child, index) in item.children"
        :key="index"
        @click.stop="update(item)"
      >
        <app-input-checkbox
          v-model="item.selectedValue"
          :label="child.title"
          :value="child.title"
        />

        <tree-item-list
          v-if="child.children"
          :item="child"
        />
      </li>
    </ul>

    <!-- <tree-item-list
      v-if="item.children"
      :item="item"
    /> -->
  </li>
</template>

<script>
import AppInputCheckbox from '@/components/basic/AppInputCheckbox'
import TreeItemList from '@/components/basic/AppObjectsTree/TreeItemList'

export default {
  name: 'TreeItem',
  components: {
    AppInputCheckbox,
    TreeItemList
  },
  props: {
    item: Object
  },
  methods: {
    update (item) {
      console.log(item.title)
      if (item.children.length === item.selectedValue.length) {
        item.active = true
      } else {
        item.active = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tree-item {
    display: flex;
    flex-direction: column;
    .tree-item__list {
      display: flex;
      flex-direction: column;
      margin-left: 25px;
    }
  }
</style>
