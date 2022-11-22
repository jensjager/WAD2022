<template>
  <form @submit.prevent="Submit">
    <div class="row">
      <label>Email</label>
      <input type="text" id="email" v-model="email" placeholder="Email" required>
    </div>
    <div class="row">
      <label>Password</label>
      <input type="text" id="password" v-model="password" placeholder="Password" required>
    </div>
    <button id="submit" type="submit">Submit</button>
    <div v-for="error in errorList" id="invalidPasswordText">
      <p class="textBelowSubmit">{{ error }}</p>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignupContent",
  data: () => {
    return {
      email: "",
      password: "",
      errors: []
    }
  },
  methods: {
    Submit() {
      // Removing the previous text (from under the submit button).
      this.errorList.length = 0;

      // Password validation
      let pass = this.password;
      if (pass.length < 8) {
        this.errorList.push('Password should be at least 8 characters long!');
      }
      if (pass.length > 14) {
        this.errorList.push('Password should be less than 15 characters long!');
      }
      let lowercase = 0;
      for (let index = 0; index < pass.length; index++) {
        const letter = pass[index];
        if (letter.match(/(?=.*[a-z])/)) {
          lowercase++;
        }
      }
      if (lowercase < 2) {
        this.errorList.push('Password should contain at least 2 lowercase alphabet characters!');
      }
      if (pass.toLowerCase() === pass) {
        this.errorList.push('Password should contain at least 1 uppercase alphabet character!');
      }
      if (!pass.match(/(?=.*[0-9])/)) {
        this.errorList.push('Password should contain at least 1 digit!');
      }
      if (!(pass.charAt(0).match(/(?=.*[A-Z])/))) {
        this.errorList.push('Password should start with an uppercase alphabet character!');
      }
      if (!pass.match(/(?=.*_)/)) {
        this.errorList.push('Password should include the character "_"!');
      }
      if (this.errorList.length === 0) {
        //Adds the text "successful" under the submit button. Currently commented out, because it doesn't seem to be a requirement.
        //this.errorList.push('Successful')
        console.log("Correct password");
      }
    }
  },
  computed: {
    errorList() {
      return this.errors
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  padding-top: 5vh;
  padding-bottom: 3vh;
  background-color: #DCDCDC;
  border-radius: 15px;
  width: 70%;
  max-width: 50vw;
  gap: 2.5vh;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
}

input {
  padding: 1rem;
  border-radius: 15px;
  border: 0;
  width: 50%;
}

button {
  width: 40%;
  height: 4vh;
  border-radius: 15px;
  background-color: #8badda;
  border: 0;
  cursor: pointer;
}

label {
  width: 30%;
}

input, button, label {
  font-size: larger;
  text-decoration: none;
}

#invalidPasswordText {
  display: flex;
  flex-direction: column;
  gap: 1vh;
  margin: 0 5vw;
  text-align: start;
  font-weight: bold;
}

@media (max-width: 700px) {
  form {
    width: 90%;
    max-width: 90%;
  }
}
</style>