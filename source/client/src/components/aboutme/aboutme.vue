<template>
  <div class="wrapper">
    <div class="about-me">
      <h3>This is about me title</h3>
      <div class="clear-line"></div>
      <section class="content">
      This is a section of content with my intro.
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutme'
}
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    justify-content: center;

  .about-me {
    width:90%;
    flex-direction: column;
    padding:15px;

    h3 {
      font-weight:300;
      font-size:2.4rem;
      padding:0;
      margin:8px 0;
    }

    .clear-line {
      margin:5px 0;
      height:1px;
      background-color: darken($base-light-color,10%);
    }

    section.content {
        font-size:1.6rem;
    }
  }
}
</style>
