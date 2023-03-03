<template>
  <div>
    <div class="d-flex justify-center mb-6 bg-surface-variant">
      <v-sheet
        class="d-flex align-center mb-6"
        :height="login.wH"
        v-if="login.visible"
      >
        <v-sheet class="ma-2 pa-2">
          <v-card :loading="false" min-width="500">
            <v-form>
              <v-card-text>
                <v-row cols="12">
                  <v-col xs="12" md="12">
                    <v-text-field
                      clearable
                      label="Full name"
                      prepend-icon="fa-solid fa-user"
                      variant="underlined"
                      hint="Enter your full name"
                    ></v-text-field>
                  </v-col>
                  <v-col xs="12" md="12">
                    <v-text-field
                      clearable
                      label="Email"
                      prepend-icon="fa-solid fa-envelope"
                      variant="underlined"
                      hint="Enter your email to access this website"
                    ></v-text-field>
                  </v-col>
                  <v-col xs="12" md="12">
                    <v-text-field
                      clearable
                      label="Password"
                      prepend-icon="fa-solid fa-lock"
                      variant="underlined"
                      hint="Enter your password to access this website"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex align-center justify-center">
                    <v-btn color="primary">Register</v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-form>
          </v-card>
        </v-sheet>
      </v-sheet>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      login: {
        visible: false,
        wH: 0,
      },
    };
  },
  mounted() {
    this.login.wH = window.innerHeight;
    this.login.visible = true;
  },
};
</script>
<style>
.v-btn:hover .v-btn__content {
  /*color: red !important;*/
}
</style>
