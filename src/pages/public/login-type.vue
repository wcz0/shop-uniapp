<template lang="">
  <view>
    <view class="logo">
      <image
        src="@/assets/images/logo.jpg"
        mode="scaleToFill"
      />
    </view>
    <view>
      <var-button
        text
        outline
        type="primary"
        @click="goTo('/pages/public/login')"
      >
        已有账号登录
      </var-button>
      <var-button
        text
        outline
        type="primary"
        @click="goTo('/pages/public/register')"
      >
        立即注册
      </var-button>
    </view>
    <ProtocolPopup
      ref="mapState"
      protocol-path="/pages/public/protocol"
      policy-path="/pages/public/policy"
      v-if="isProtocolPopupShow"
    ></ProtocolPopup>
    <view>
      <var-radio v-model="protocolS">
      </var-radio>
    </view>
  </view>
</template>
<script>
import { ref } from 'vue'
import ProtocolPopup from '@/components/ProtocolPopup'

export default {
  components: {
    ProtocolPopup,
  },
  setup() {
    const isProtocolPopupShow = ref(false)
    const appAgreementStatus = ref(false)
    const btnLoading = ref(false)

    function handleProtocolPopupShow() {
      this.isProtocolPopupShow = true
    }
    function goTo(route) {
      this.$router.push(route)
    }
    function onShow() {
      this.btnLoading = false
    }

    return {
      isProtocolPopupShow,
      goTo,
      onShow,
    }
  },
}

</script>
<style lang=""></style>
