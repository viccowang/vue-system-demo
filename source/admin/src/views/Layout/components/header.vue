<template>
    <el-header class="header" height="35px">
        <div class="center">
            <div class="user">
                <span class="avatar">
                    <img :src="'static/' + avatar" />
                </span>
                <span class="name">Hi,{{ userName }}</span>
            </div>
        </div>
        <div class="settings">
        <ul>
            <li @click="logout">Logout</li>
        </ul>
        </div>
    </el-header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Headers',
  computed: {
    ...mapGetters(['userName', 'avatar'])
  },
  methods: {
    logout () {
      this.$store.dispatch('userLogout').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    padding:0;
    // color: lighten($base-light-color, 100%);
    background-color: darken($base-light-color, 3%);
    .center{
        flex:1;
        position: relative;

        .user {
            display: flex;
            @include flexCenter;
            position:absolute;
            height:100%;
            right:0;
            font-weight:300;

            span {
                display: inline-block;

                &.avatar {
                    width:20px;
                    height:20px;
                    margin-right:10px;
                    border-radius:20px;
                    background-color: lighten($base-dark-color, 15%);
                    overflow:hidden;

                    >img { width: 20px; height: 20px; }
                }
                &.name { }
            }
        }
    }

    .settings{
        width:70px;

        ul{
        display: flex;
        height:100%;

        li {
            display: inherit;
            @include flexCenter;
            flex:1 auto;
            padding: 0 15px;
            cursor: pointer;
        }

        }

    }
}

</style>
