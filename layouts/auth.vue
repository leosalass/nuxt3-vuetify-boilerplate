<template>
  <div class="d-flex justify-center mb-6 bg-surface-variant">
    <v-sheet
      class="d-flex align-center mb-6 pa-6"
      :height="wH"
      v-if="visible"
    >
      <v-card
        max-width="550"
        :loading="false"
        elevation="3"
        :style="style"
        class="rounded-lg"
      >
        <slot />
      </v-card>
    </v-sheet>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      visible: false,
      wH: 0,
      style: "",
    };
  },
  mounted() {
    this.wH = window.innerHeight;
    this.style = window.innerWidth > 600 ? "width:400px;" : "";
    this.visible = true;
  },
};
</script>
<style>
.text-center {
  text-align: center;
}
.v-input__control.v-input--has-state {
  padding-top: 14px !important;
  padding-bottom: 6px !important;
}
.small_icon .v-icon {
  font-size: 12px;
  top: 34%;
  transform: translateY(-50%);
}
.medium_icon .v-icon {
  font-size: 16px;
  top: 34%;
  transform: translateY(-50%);
}
.v-icon--clickable {
  padding: 15px;
}
.v-messages__message {
  /*max-width: 500px !important;
  display: block;
  position: absolute;*/
}
.w-500 {
  width: 500px;
}
</style>
