<template>
  <div style="height:100%">
    <my-header></my-header>
      我是主页

  </div>
</template>
<script>
import myHeader from "../components/myHeader";

export default {
  //   name: "Index",
  head: {
    title: "简书-创作你的创作",
    meta: [
      { charset: "utf-8" },
      { name: "keywords", content: "简书首页" },
      { name: "description", content: "简书首页" },
      { name: "author", content: "徐要芳" }
    ]
  },
  components: {
    myHeader
  },
  data() {
    return {
      name: "首页"
    };
  }
};
</script>
<style scoped>

</style>
