<template>
  <div id="document">
    <Page v-for="(page, id) in pages" :key="id" :id="id" v-html="page.body"></Page>
  </div>
</template>

<script>
import Page from './Page.vue'
import ContentTools from 'ContentTools'
import { mapState } from 'vuex'
const fr = require('../../node_modules/ContentTools/translations/fr.json')

export default {
  name: 'document',
  data () {
    return {
      editing: false
    }
  },
  computed: {
    ...mapState({
      pages: state => state.pages
    })
  },
  mounted () {
    this.editor = ContentTools.EditorApp.get()
    this.editor.init('*[data-editable]', 'data-name')
    this.editor.start()
    this.editor.ignition().state('editing')
    this.editor.addEventListener('start', ev => (this.editing = true))
    this.editor.addEventListener('stop', ev => (this.editing = false))
    ContentEdit.addTranslations('fr', fr)
    ContentEdit.LANGUAGE = 'fr'
  },
  components: {
    Page
  }
}
</script>

<style lang="scss">
/* Center (default) */
  [data-editable] iframe,
  [data-editable] image,
  [data-editable] [data-ce-tag=img],
  [data-editable] img,
  [data-editable] video {
      clear: both;
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
  }

  /* Left align */
  [data-editable] .align-left {
      clear: initial;
      float: left;
      margin-right: 0.5em;
  }

  /* Right align */
  [data-editable].align-right {
      clear: initial;
      float: right;
      margin-left: 0.5em;
  }

  /* Alignment styles for text in editable regions */
  [data-editable] .text-center {
      text-align: center;
  }

  [data-editable] .text-left {
      text-align: left;
  }

  [data-editable] .text-right {
      text-align: right;
  }
</style>
