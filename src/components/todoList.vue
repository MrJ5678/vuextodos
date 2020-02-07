<template>
  <!-- 列表部分 -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
            <li :class="{completed : item.done, editing: item.id === editId}" v-for="item in $store.state.list" :key="item.id">
                <div class="view">
                    <input class="toggle" type="checkbox" :checked="item.done" @input="changeState(item.id)"/>
                    <label @dblclick="showEdit(item.id)">{{item.name}}</label>
                    <button  @click="delTodo(item.id)" class="destroy"></button>
                </div>
                <input class="edit" :value="item.name" @keyup.enter="hideEdit"/>
            </li>
            
        </ul>
    </section>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    data() {
        return {
            editId: -1
        }
    },
    methods: {
        ...mapMutations(['delTodo', 'updateTodo', 'changeState']),
        ...mapMutations({
            deltodo: 'delTodo',
            changestate: 'changeState'
        }),
        delTodo(id) {
            this.deltodo({id})
        },
        showEdit(id) {
            this.editId = id
        },
        hideEdit(e) {
            this.updateTodo({
                id: this.editId,
                name: e.target.value
            })
            this.editId = -1
        },
        changeState(id) {
            this.changestate({id})
        }
    }
}
</script>

<style>

</style>