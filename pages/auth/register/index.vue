<template>
  <div>
    <div class="d-flex justify-center mb-6 bg-surface-variant">
      <v-sheet
        class="d-flex align-center mb-6 pa-6"
        :height="login.wH"
        v-if="login.visible"
      >
        <v-card
          max-width="550"
          :loading="false"
          elevation="3"
          class="rounded-lg"
        >
          <v-row> <v-col class="text-center"></v-col> </v-row>
          <v-row>
            <v-col class="text-center"><h1>Signup</h1></v-col>
          </v-row>
          <v-form>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    :ripple="false"
                    clearable
                    clear-icon="fa-solid fa-delete-left"
                    label="Full name"
                    prepend-inner-icon="fa-solid fa-user"
                    variant="outlined"
                    hint="Enter your full name"
                    density="compact"
                    class="medium_icon"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    :ripple="false"
                    clearable
                    clear-icon="fa-solid fa-delete-left"
                    label="Email"
                    prepend-inner-icon="fa-solid fa-envelope"
                    variant="outlined"
                    hint="Enter your email to access this website"
                    density="compact"
                    class="medium_icon"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    clearable
                    clear-icon="fa-solid fa-delete-left"
                    label="Password"
                    prepend-inner-icon="fa-solid fa-lock"
                    :append-inner-icon="`fa-solid ${passwordIcon}`"
                    @click:append-inner="showPassword = !showPassword"
                    variant="outlined"
                    hint="Enter your password to access this website"
                    :type="showPassword ? 'text' : 'password'"
                    counter
                    maxlength="32"
                    density="compact"
                    class="medium_icon"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex align-center justify-center">
                  <v-btn color="primary" width="100%">Signup</v-btn>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <div class="text-black text-center">
                    Already have an account? <a href="#">Login</a>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-form>
        </v-card>
      </v-sheet>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showPassword: false,
      login: {
        visible: false,
        wH: 0,
      },
    };
  },
  computed: {
    passwordIcon() {
      return this.showPassword ? "fa-eye-slash" : "fa-eye";
    },
  },
  mounted() {
    this.login.wH = window.innerHeight;
    this.login.visible = true;
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
</style>
