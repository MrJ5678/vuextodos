<template>
  <!-- 底部 -->
    <footer class="footer" v-show="isFooterShow">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{itemLeftCount}}</strong> item left</span>

        <!-- Hidden if no completed items are left ↓ -->
        <button v-show="isClearCompletedShow" class="clear-completed" @click="clearCompleted">Clear completed</button>
    </footer>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  methods: {
    clearCompleted() {
      this.$store.commit('clearCompleted')
    }
  },
  computed: {
    ...mapGetters(['isFooterShow', 'itemLeftCount', 'isClearCompletedShow'])
  }
}
</script>

<style>

</style>