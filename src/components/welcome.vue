<template>
  <transition>
    <div class="welcome" :class="{ hide: isHide }">
      <div class="img-warp">
        <img src="../assets/images/welcome.png" width="100%" height="100%">
        <span class="name">鹿先森°</span>
      </div>
      <div class="text-warp">
        <div class="logo"><img src="../assets/images/headerImg.jpg"></div>
        <div class="text">
          <span class="title">知乎日报</span>
          <span class="bio">每天三次，每次七分钟</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      isHide: false
    }
  },
  created () {
    let isFirstLoad = this.$store.state.isFirstLoad
    if (isFirstLoad) {
      // 3.5秒后隐藏欢迎界面
      setTimeout(() => {
        this.isHide = true
      }, 350000)
    } else {
      this.isHide = true
    }
  },
  methods: {
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/components/Welcome.sass";
</style>
