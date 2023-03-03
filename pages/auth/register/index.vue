<template>
    <div>
      <div class="d-flex justify-center mb-6 bg-surface-variant">
        <v-sheet
          class="d-flex align-center mb-6"
          :height="login.wH"
          v-if="login.visible"
          max-width="500"
        >
          <v-sheet class="ma-2 pa-2">
            <v-card :loading="false" min-width="450" elevation="2" class="rounded-lg">
              <v-row> <v-col class="text-center"></v-col> </v-row>
              <v-row> <v-col class="text-center"><h1>Signup</h1></v-col> </v-row>
              <v-form>
                <v-card-text>
                  <v-row cols="12">
                    <v-col xs="12" md="12">
                      <v-text-field
                        :ripple="false"
                        clearable
                        clear-icon="fa-solid fa-delete-left"
                        label="Full name"
                        prepend-inner-icon="fa-solid fa-user"
                        variant="outlined"
                        hint="Enter your full name"
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    <v-col xs="12" md="12">
                      <v-text-field
                        :ripple="false"
                        clearable
                        clear-icon="fa-solid fa-delete-left"
                        label="Email"
                        prepend-inner-icon="fa-solid fa-envelope"
                        variant="outlined"
                        hint="Enter your email to access this website"
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    <v-col xs="12" md="12">
                      <v-text-field
                        clear-icon="fa-solid fa-delete-left"
                        label="Password"
                        prepend-inner-icon="fa-solid fa-lock"
                        :append-inner-icon="`fa-solid ${passwordIcon}`"
                        @click:append-inner="showPassword = !showPassword"
                        variant="outlined"
                        hint="Enter your password to access this website"
                        persistent-hint
                        :type="showPassword ? 'text' : 'password'"
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
  </style>