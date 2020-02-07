<template>
  <!-- 头部 -->
	<header class="header">
		<h1>todos</h1>
		<input
			class="new-todo"
			placeholder="What needs to be done?"
			autofocus
			@keyup.enter="addTodo"
			v-model="todoName"
		/>
	</header>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
	data() {
		return {
			todoName: ''
		}
	},
	methods: {
		...mapMutations(['addTodo']),
		...mapMutations({
			addtodo: 'addTodo'
		}),
		addTodo() {
			// eslint-disable-next-line no-console
			console.log(this.todoName);
			this.addtodo({
				name: this.todoName
			})
			this.todoName = ''
		}
	}
}
</script>

<style>

</style>