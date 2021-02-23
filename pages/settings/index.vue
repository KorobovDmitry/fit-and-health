<template>
  <div class="settings-page">
    <app-page-title>Настройки</app-page-title>
    <div class="settings-page__content">


      <p>upload 1 file</p>
      <div>
        <label>
          <p>File</p>
          <!-- Загрузка 1 файла -->
          <input type="file" name="file" ref="file" @change="handleFileUpload()"/>
          <!-- Загрузка нескольких файлов -->
          <!-- <input type="file" id="files" ref="files" multiple @change="handleFilesUpload()"/> -->
        </label>
        <button @click="submitFile()">Submit</button>
      </div>
    </div>

    <app-objects-tree :treeList="objectsTreeList"/>
    <pre>{{ objectsTreeList }}</pre>

  </div>
</template>

<script>
import AppPageTitle from '@/components/basic/AppPageTitle'
import AppObjectsTree from '@/components/basic/AppObjectsTree/index'

export default {
  components: {
    AppPageTitle,
    AppObjectsTree
  },
  data () {
    return {
      file: null,
      files: null,
      objectsTreeList: [
        {
          title: 'item 1',
          active: false,
          selectedValue: ['children 1'],
          children: [
            {
              title: 'children 1',
            },
            {
              title: 'children 2',
            },
            {
              title: 'children 3',
              active: true,
              selectedValue: ['level 1', 'level 2'],
              children: [
                {
                  title: 'level 1',
                },
                {
                  title: 'level 2',
                },
                {
                  title: 'level 3',
                },
              ]
            },
          ]
        },
        {
          title: 'item 2',
          active: false,
          selectedValue: ['children 2'],
          children: [
            {
              title: 'children 2'
            }
          ]
        },
        {
          title: 'item 3',
          active: false,
          selectedValue: [],
          children: [
            {
              title: 'children 3'
            }
          ]
        }
      ]
    }
  },
  methods: {
    // загрузка одного файла
    submitFile () {
      let formData = new FormData()
      formData.append('file', this.file)

      this.$axios.$post( '/api/settings/single-file', formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!')
      })
      .catch(function(e){
        console.log(e)
      })
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      // console.log(this.file)
    },
// Загрузка нескольких файлов
    submitFiles(){
      let formData = new FormData();
      for( var i = 0; i < this.files.length; i++ ){
        let file = this.files[i];
        formData.append('files[' + i + ']', file);
      }
      axios.post( '/multiple-files',
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(function(){
        console.log('FAILURE!!');
      });
    },
    handleFilesUpload(){
      this.files = this.$refs.files.files;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.settings-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  padding: 40px;
  .settings-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
