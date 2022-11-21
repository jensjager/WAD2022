<template>
  <div class="sign-up">
  <h1>.</h1>
    <form class="form" @submit.prevent="Submit">
        <div>
            <label>Email</label>
            <input type="text" id="email" placeholder="Email" required>
        </div>
        <div>
            <label>Password</label>  
            <input type="text" id="password" v-model="password" placeholder="Password" required>
        </div>
        <button id="submit" type="submit">Submit</button>
        <div id="invalidPasswordText"></div>
    </form>
  </div>
</template>

<script>
import { remove } from '@vue/shared';

export default {
  name: "SignupContent"

  ,methods: {
       
       Submit() {
           //Removing the previous text (from under the submit button).
           let div = document.getElementById("invalidPasswordText");
           var previous = document.getElementById("textBelowSubmit");
            while (previous) {
                previous.remove();
                previous = document.getElementById("textBelowSubmit");
            }

           //Password validation
           let errors = [];
           var pass = this.password;
           if(pass.length < 8) {
                errors.push('Password should be at least 8 characters long!');
           }
           if(pass.length > 14) {
                errors.push('Password should be less than 15 characters long!');
           }
           let lowercase = 0;
           for (let index = 0; index < pass.length; index++) {
                const letter = pass[index];
                if (letter.match(/(?=.*[a-z])/)) {
                    lowercase++;
                }
           }
           if(lowercase < 2) {
                errors.push('Password should contain atleast 2 lowercase alphabet characters!');
           }
           if(pass.toLowerCase() === pass) {
                errors.push('Password should contain atleast 1 uppercase alphabet character!');
           }
           if(!pass.match(/(?=.*[0-9])/)) {
                errors.push('Password should contain atleast 1 digit!');
           }
           if(!(pass.charAt(0).toUpperCase().match(/(?=.*[A-Z])/))) {
                errors.push('Password should start with an uppercase alphabet character!');
           }
           if(!pass.match(/(?=.*[_])/)) {
                errors.push('Password should include the character "_"!');
           }
           if(errors.length == 0) {
                //Adds the text "successful" under the submit button. Currently commented out, because it doesn't seem to be a requirement.
                /*const node = document.createElement("p");
                let label = document.createTextNode("Success");
                node.id = "textBelowSubmit";
                node.appendChild(label);
                div.appendChild(node);*/
                console.log("Correct password");
           } else {
            for (let index = 0; index < errors.length; index++) {
                //Adds the various validation errors as text under the submit button.
                const text = errors[index];
                const node = document.createElement("p");
                let label = document.createTextNode(text);
                node.id = "textBelowSubmit";
                node.appendChild(label);
                div.appendChild(node);
            }
           }
       }
   }
}
</script>

<style scoped>
body {
    display: flex;
}

.form {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 15vh;
    margin-bottom: 40vh;
    padding-top: 5vh;
    padding-bottom: 4vh;
    background-color: #DCDCDC;
    border-radius: 15px;
    width: 70%;
}

label {
    width: 40%;
    font-size: large;
}

input {
    float: right;
    margin-bottom: 4%;
    width: 60%;
    height: 2vh;
    margin-right: 2vh;
    font-size: large;
    border-radius: 4px;
    border-color: white;
    background-color: white;
    border: 0px;
}

button {
    width: 40%;
    height: 4vh;
    margin: auto;
    border-radius: 4px;
    background-color: gray;
    border: 0px;
}

button:hover {
    background-color: #42b983;
}

form > input, button {
    font-size: larger;
    text-decoration: none;
}

@media (max-width: 600px) {
  .form {
    width: 100%;
  }
}
</style>