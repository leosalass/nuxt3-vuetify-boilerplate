<template>
  <NuxtLayout name="auth">
    <v-row>
      <v-col class="text-center"></v-col>
    </v-row>
    <v-row>
      <v-col class="text-center"><h1>Signup</h1></v-col>
    </v-row>
    <v-form ref="form" :fast-fail="true">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="formFields.fullName"
              :rules="[formRules.required, formRules.fullName]"
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
              v-model="formFields.email"
              :rules="[formRules.required, formRules.email]"
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
              v-model="formFields.password"
              :rules="[formRules.required, formRules.password]"
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
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      showPassword: false,
      formFields: {
        fullName: "",
        email: "",
        password: "",
      },
      formRules: {
        required: (v: string | null | undefined) => !!v || "Required",

        /**
         * This rule removes leading and trailing blank spaces using the trim method, and replaces multiple consecutive blank spaces with a single space using a regular expression and the replace method.
         *
         * It then splits the trimmed input string by spaces to separate the names. If the resulting array has less than two elements, it returns the error message "Full name must include a first and last name". Otherwise, it returns true to indicate that the input value is valid. Note that the required rule is not included, so empty input will be allowed by default.
         */
        fullName: (v: string) => {
          const trimmed = v.trim().replace(/\s+/g, " ");
          const names = trimmed.split(" ");
          if (names.length < 2)
            return "Full name must include a first and last name";
          return true;
        },

        /**
         * This rule it splits the input string by spaces to separate the names. If the resulting array has less than two elements, it returns the error message "Full name must include a first and last name". Otherwise, it returns true to indicate that the input value is valid. Note that since the required rule is not included, empty input will be allowed by default.
         */
        email: (v: string | null | undefined) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "") || "Email must be valid",

        /**
         * This rule checks if the input value matches the pattern of allowed characters using a regular expression. If it does not match, it returns the error message "Password must contain only letters, numbers, and the following characters: !@#$%^&*()_+-=[]{};:'"\|,.<>/?". Note that some characters such as ' and " are escaped with a backslash to ensure they are interpreted as part of the regular expression pattern.
         *
         * Finally, it checks if the input value contains at least one lowercase and one uppercase letter using another regular expression. If it does not contain both, it returns the error message "Password must contain at least one lowercase and one uppercase letter". If all the checks pass, it returns true to indicate that the input value is valid.
         */
        password: (v: string) => {
          if (v.length < 8 || v.length > 32)
            return "Password must be between 8 and 32 characters";
          if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/.test(v)) {
            return "Password must contain only letters, numbers, and the following characters: !@#$%^&*()_+-=[]{};:'\"\\|,.<>/?";
          }
          if (!/[a-z]/.test(v) || !/[A-Z]/.test(v)) {
            return "Password must contain at least one lowercase and one uppercase letter";
          }
          return true;
        },
      },
    };
  },
  computed: {
    passwordIcon() {
      return this.showPassword ? "fa-eye-slash" : "fa-eye";
    },
    form(): HTMLFormElement {
      return this.$refs.form as HTMLFormElement; // add type assertion
    },
  },
  methods: {
    async validate() {
      try {
        this.resetValidation();
        this.trimFormInputs();
        const { valid } = await this.form.validate(); // use the type assertion
      } catch (error) {}

      //TODO: submit the form
    },
    reset() {
      this.form.reset();
    },
    resetValidation() {
      this.form.resetValidation();
    },
    trimFormInputs(): void {
      type ObjectKey = keyof typeof this.formFields;
      for (const keyString in this.formFields) {
        const key = keyString as ObjectKey;
        this.formFields[key] = this.formFields[key]
          .trim()
          .replace(/\s+/g, "AA ");
      }
    },
  },
};
</script>
