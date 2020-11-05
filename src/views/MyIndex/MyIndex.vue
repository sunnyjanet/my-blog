<template>
  <div class="MyIndex">
    <index-banner class="index-banner"></index-banner>
    <personal-intro class="personal-intro"></personal-intro>
    <invite-to-message class="invite-to-message"></invite-to-message>
  </div>
</template>

<script>
import IndexBanner from './components/IndexBanner'
import PersonalIntro from './components/PersonalIntro'
import InviteToMessage from './components/InviteToMessage'
export default {
  name: 'MyIndex',
  components: {
    IndexBanner,
    PersonalIntro,
    InviteToMessage
  }
}
</script>

<style lang="stylus" scoped>
  .personal-intro
    margin: 40px 0
</style>
