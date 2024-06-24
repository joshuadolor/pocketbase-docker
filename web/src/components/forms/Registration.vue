<template>
    <h5 class="text-h5 text-center my-4 mb-8">Sign up with Email address</h5>
    <v-form ref="Regform" lazy-validation action="/dashboards/analytical" class="mt-7 loginForm">
        <v-row>
            <v-col cols="12" sm="6">
                <v-text-field v-model="firstname" density="comfortable" hide-details="auto" variant="outlined"
                    color="primary" label="Firstname"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field v-model="lastname" density="comfortable" hide-details="auto" variant="outlined"
                    color="primary" label="Lastname"></v-text-field>
            </v-col>
        </v-row>
        <v-text-field v-model="email" :rules="emailRules" label="Email Address / Username" class="mt-4 mb-4" required
            density="comfortable" hide-details="auto" variant="outlined" color="primary"></v-text-field>
        <v-text-field v-model="password" :rules="passwordRules" label="Password" required density="comfortable"
            variant="outlined" color="primary" hide-details="auto" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" class="pwdInput"></v-text-field>

        <div class="d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold">
            <v-checkbox v-model="checkbox" :rules="[(v: any) => !!v || 'You must agree to continue!']"
                label="Agree with?" required color="primary" class="ms-n2" hide-details></v-checkbox>
            <a href="#" class="ml-1 text-lightText">Terms and Condition</a>
        </div>
        <v-btn color="secondary" block class="mt-2" variant="flat" size="large" @click="validate()">Sign Up</v-btn>
    </v-form>
    <div class="mt-5 text-right">
        <v-divider />
        <v-btn variant="plain" to="/login" class="mt-2 text-capitalize mr-n2">Already have an account?</v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PocketBase from 'pocketbase';
import userService from '@/services/user';
const checkbox = ref(false);
const show1 = ref(false);
const password = ref('');
const email = ref('');
const Regform = ref();
const firstname = ref('');
const lastname = ref('');
const passwordRules = ref([
    (v) => !!v || 'Password is required',
    (v) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const emailRules = ref([(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

async function validate() {
    Regform.value.validate();
    // const response = await userService.create({ firstname: firstname.value, lastname: lastname.value, email: email.value, password: password.value });
    // console.log(response)


    const pb = new PocketBase('http://localhost');
    console.log(pb)
    // example create data
    const data = {
        name: firstname.value + ' ' + lastname.value,
        email: email.value,
        password: password.value
    };

    const record = await pb.collection('users').create(data);
    console.log(record)
    // (optional) send an email verification request
    // await pb.collection('users').requestVerification('dev@example.com');
}
</script>

<style lang="scss">
.custom-devider {
    border-color: rgba(0, 0, 0, 0.08) !important;
}

.googleBtn {
    border-color: rgba(0, 0, 0, 0.08);
    margin: 30px 0 20px 0;
}

.outlinedInput .v-field {
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: none;
}

.orbtn {
    padding: 2px 40px;
    border-color: rgba(0, 0, 0, 0.08);
    margin: 20px 15px;
}

.pwdInput {
    position: relative;

    .v-input__append {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
