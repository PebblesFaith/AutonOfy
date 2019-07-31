 
// Creates nodes to clear all inputs textboxes and drop down menus in the clear button function. 
function clearFunction() {
    document.getElementById("firstName").value = "";
    document.getElementById("firstName").placeholder = "First Name";
    document.getElementById("outputFirstName").innerHTML = "";
    document.getElementById("outputFirstNameField").innerHTML = "";

    document.getElementById("middleName").value = ""; 
    document.getElementById("middleName").placeholder = "Middle Name";
    document.getElementById("outputMiddleName").innerHTML = "";
    document.getElementById("outputMiddleNameField").innerHTML = "";

    document.getElementById("lastName").value = "";  
    document.getElementById("lastName").placeholder = "last Name"; 
    document.getElementById("outputLastName").innerHTML = "";
    document.getElementById("outputLastNameField").innerHTML = "";

    document.getElementById("usersDOB").value = "";
    document.getElementById("outputUsersDOB").innerHTML = "";
    document.getElementById("outputUsersDOBField").innerHTML = ""; 

    document.getElementById("usersBirthSex").value = ""; 
    document.getElementById("outputUsersBirthSex").innerHTML = "";
    document.getElementById("outputUsersBirthSexField").innerHTML = "";

    document.getElementById("usersGender").value = ""; 
    document.getElementById("outputUsersGender").innerHTML = "";
    document.getElementById("outputUsersGenderField").innerHTML = "";

    document.getElementById("usersId").value = ""; 
    document.getElementById("usersId").placeholder = "Create User Id"; 
    document.getElementById("outputUsersId").innerHTML = "";
    document.getElementById("outputUsersIdField").innerHTML = "";

    document.getElementById("usersEmailAddress").value = ""; 
    document.getElementById("usersEmailAddress").placeholder = "Email Address";
    document.getElementById("outputUsersEmailAddress").innerHTML = "";
    document.getElementById("outputUsersEmailAddressField1").innerHTML = "";
    document.getElementById("outputUsersEmailAddressField2").innerHTML = "";

    document.getElementById("usersConfirmEmailAddress").value = ""; 
    document.getElementById("usersConfirmEmailAddress").placeholder = "Confirm Email Address";  
    document.getElementById("outputConfirmUsersEmailAddress").innerHTML = "";
    document.getElementById("outputUsersConfirmEmailAddressField1").innerHTML = "";
    document.getElementById("outputUsersConfirmEmailAddressField2").innerHTML = "";

    document.getElementById("usersPassword").value = ""; 
    document.getElementById("usersPassword").placeholder = "Password"; 
    document.getElementById("outputUsersPassword").innerHTML = "";
    document.getElementById("outputUsersPasswordField1").innerHTML = "";
    document.getElementById("outputUsersPasswordField2").innerHTML = "";

    document.getElementById("usersConfirmPassword").value = ""; 
    document.getElementById("usersConfirmPassword").placeholder = "Confirm Password";
    document.getElementById("outputUsersConfirmPassword").innerHTML = "";
    document.getElementById("outputUsersConfirmPasswordField1").innerHTML = ""; 
    document.getElementById("outputUsersConfirmPasswordField2").innerHTML = ""; 

    document.getElementById("goTerms").checked = false;

}


let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;
document.querySelector("#usersDOB").valueAsDate = new Date();

/* Users input datas are stored and displayed, as output data prints onto the 
   consumer sign up webpage. */
function submitFunction() {
    var usersFirstName = document.getElementById("firstName").value;
    document.getElementById("outputFirstName").innerHTML = usersFirstName;

    var usersMiddleName = document.getElementById("middleName").value;
    document.getElementById("outputMiddleName").innerHTML = usersMiddleName;

    var usersLastName = document.getElementById("lastName").value;
    document.getElementById("outputLastName").innerHTML = usersLastName;

    var dobUsers = document.getElementById("usersDOB").value;
    document.getElementById("outputUsersDOB").innerHTML = dobUsers;

    var usersBirthSexChoice = document.getElementById("usersBirthSex").value;
    document.getElementById("outputUsersBirthSex").innerHTML = usersBirthSexChoice;

    var usersGenderChoice = document.getElementById("usersGender").value;
    document.getElementById("outputUsersGender").innerHTML = usersGenderChoice;

    var usersNameId = document.getElementById("usersId").value;
    document.getElementById("outputUsersId").innerHTML = usersNameId;

    var usersEmail = document.getElementById("usersEmailAddress").value;
    document.getElementById("outputUsersEmailAddress").innerHTML = usersEmail;

    var usersConfirmEmail = document.getElementById("usersConfirmEmailAddress").value;
    document.getElementById("outputConfirmUsersEmailAddress").innerHTML = usersConfirmEmail;    

    var usersCreatePassword = document.getElementById("usersPassword").value;
    document.getElementById("outputUsersPassword").innerHTML = usersCreatePassword;

    var usersCreateConfirmPassword = document.getElementById("usersConfirmPassword").value;
    document.getElementById("outputUsersConfirmPassword").innerHTML = usersCreateConfirmPassword;




   
    // Create an if statement in users first name, in order to verify, if all users have entered texts into the required first name field.
    if (usersFirstName == null || usersFirstName == "" || usersFirstName.length < 3) {        
        // Add node white style color to the document message.
        document.getElementById("outputFirstNameField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors.          
        document.getElementById("outputFirstNameField").innerHTML = "Your 'First Name' is a require field.";
            // Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() {        
            document.getElementById("outputFirstNameField").innerHTML = " ";
            },
            7000);
        // Return false, if statement is not true.
        return false;
    }

    // Create an if statement in users middle name, in order to verify, if all users have entered texts into the required middle name field, if applicable.
    if (usersMiddleName == null || usersMiddleName == "" || usersFirstName.length < 0) {
        // Add node white style color to the document message.
        document.getElementById("outputMiddleNameField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputMiddleNameField").innerHTML = "If applicable, your 'Middle Name' is a require field, if you do not have a middle name leave a blank field.";
            //Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() { 
            document.getElementById("outputMiddleNameField").innerHTML = " ";
            },
            7000);

      $("#submitButton").one("click", function(){
        $("#outputMiddleNameField").one();
     })

        // Return false, if statement is not true.
        return false;
    }

    // Create an if statement in users last name, in order to verify, if all users have entered texts into the required last name field.
    if (usersLastName == null || usersLastName == "" || usersLastName.length < 2) {
        // Add node white style color to the document message.
        document.getElementById("outputLastNameField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors.    
        document.getElementById("outputLastNameField").innerHTML = "Your 'Last Name' is a require field.";
            // Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() { 
            document.getElementById("outputLastNameField").innerHTML = " ";
            },
            7000);
        // Return false, if statement is not true.
        return false;
    }

    // Create an if statement in users date of birth, in order to verify, if all users have selected their date of birth into the required date of birth drop down menu field.
    if (dobUsers == null || dobUsers == "") {
         // Add node white style color to the document message.
         document.getElementById("outputUsersDOBField").style.color = "#ffffff"; 
         // Add node document message, as an alert to users text errors. 
         document.getElementById("outputUsersDOBField").innerHTML = "Your 'Date of Birth' is a require field.";
            // Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() {
            document.getElementById("outputUsersDOBField").innerHTML = " ";
            },
            7000);
         // Return false, if statement is not true.
         return false;

    }

     // Create an if statement in users birth sex, in order to verify, if all users have selected their birth sex into the required birth sex drop down menu field.
    if ( usersBirthSexChoice == null || usersBirthSexChoice == "") {
        // Add node white style color to the document message.
        document.getElementById("outputUsersBirthSexField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersBirthSexField").innerHTML = "Your 'Birth Sex' is a require field.";
            // Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() {  
            document.getElementById("outputUsersBirthSexField").innerHTML = " ";
            },
            7000);
        // Return false, if statement is not true. 
        return false;

    }

     // Create an if statement in users gender identity, in order to verify, if all users have selected their gender identity into the required gender identity drop down menu field.
    if (usersGenderChoice == null || usersGenderChoice == "") {
        // Add node white style color to the document message.
        document.getElementById("outputUsersGenderField").style.color = "#ffffff";
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersGenderField").innerHTML = "Your 'Gender Identity' is a require field.";
            // Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() {        
            document.getElementById("outputUsersGenderField").innerHTML = " ";
            },
            7000);
        // Return false, if statement is not true.  
        return false;

    }

    // Create an if statement in users' name identification, in order to verify, if all users have entered texts into the required users' name identification field.
    if (usersNameId == null || usersNameId == "" || usersNameId.length < 6) {
        // Add node white style color to the document message.
        document.getElementById("outputUsersIdField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersIdField").innerHTML = "Your 'User Name Id' is a require field and must be greater than six (6) characters.";
            // Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() {        
            document.getElementById("outputUsersIdField").innerHTML = " ";
            },
            7000);
        // Return false, if statement is not true. 
        return false;

    }

    // Create an users if statement email address, in order to verify, if all users have entered texts into the required email address field.
    if (usersEmail == null || usersEmail == "") {
        // Add node white style color to the document message.
        document.getElementById("outputUsersEmailAddressField1").style.color = "#ffffff";
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersEmailAddressField1").innerHTML = "Your 'Email Address' is a require field.";
            // Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() {  
            document.getElementById("outputUsersEmailAddressField1").innerHTML = " ";
            },
            7000);
        // Return false, if statement is not true. 
        return false;

    }

    // Create emailRegExFormat1 variable in order to store regular expression format for users' email match test.
    var emailRegExFormat1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Create an if statement in users email address, in order to match, regular expression formated variable to the user entered and required email address field.
    if(!usersEmailAddress.value.match(emailRegExFormat1)) { 
        // Add node white style color to the document message.
        document.getElementById("outputUsersEmailAddressField2").style.color = "#ffffff";
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersEmailAddressField2").innerHTML = "You have entered an invalid email address format!";
            // Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() {  
            document.getElementById("outputUsersEmailAddressField2").innerHTML = " ";
            },
            7000);
            // Set the users email address  focus to the textbox.
            usersEmailAddress.focus(); 
        // Return false, if statement is not true. 
        return false;
            
        }

    // Create an users if statement confirm email address, in order to verify, if all users have entered texts into the required confirm email address field.
    if (usersConfirmEmail== null || usersConfirmEmail == "") {
        // Add node white style color to the document message.
        document.getElementById("outputUsersConfirmEmailAddressField1").style.color = "#ffffff";
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersConfirmEmailAddressField1").innerHTML = "Your 'Email Address' is a require field.";
            // Add set time out node document to clear message after seven (7) seconds.
                setTimeout(function() {  
                document.getElementById("outputUsersConfirmEmailAddressField1").innerHTML = " ";
                },
                7000);
        // Return false, if statement is not true. 
        return false;

    }

    // Create emailRegExFormat2 variable in order to store regular expression format for users' confirm email match test.
    var emailRegExFormat2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Create an if statement in users confirm email address, in order to match, regular expression formated variable to the user entered and required confirm email address field.
    if(!usersConfirmEmailAddress.value.match(emailRegExFormat2))
    {       
    // Add node white style color to the document message.
    document.getElementById("outputUsersConfirmEmailAddressField2").style.color = "#ffffff";
    // Add node document message, as an alert to users text errors. 
    document.getElementById("outputUsersConfirmEmailAddressField2").innerHTML = "You have entered an invalid confirm email address format!";
        // Add set time out node document to clear message after seven (7) seconds.
        setTimeout(function() {  
            document.getElementById("outputUsersConfirmEmailAddressField2").innerHTML = " ";
            },
            7000);
            // Set the users email address  focus to the textbox.
            usersConfirmEmailAddress.focus(); 
        // Return false, if statement is not true. 
        return false;
        
        }
    
    // Create an if statement to verify, if both users email and confirm email input fields match and if not an alert message will appear for corrections.
    if (usersEmail != usersConfirmEmail) {
        alert("Your create email is not similar to your confirm email. Please enter the same emails in both fields.");
        // Clear both email and Comfirm email input field, if users entry does not match.
        document.getElementById("usersEmailAddress").value = ""; 
        document.getElementById("usersEmailAddress").placeholder = "Email Address";
        document.getElementById("outputUsersEmailAddress").innerHTML = "";
        document.getElementById("usersConfirmEmailAddress").value = ""; 
        document.getElementById("usersConfirmEmailAddress").placeholder = "Confirm Email Address"; 
        document.getElementById("outputConfirmUsersEmailAddress").innerHTML = "";
        return false;

        }

    // Create if statements users' password, in order to verify, if all users have entered texts into the required password field.
    if (usersCreatePassword == null || usersCreatePassword == "" || usersCreatePassword.length < 8) {
        // Add node white style color to the document message.
        document.getElementById("outputUsersPasswordField1").style.color = "#ffffff";
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersPasswordField1").innerHTML = "Your 'Password' is a require field.";
            // Add set time out node document to clear message after seven (7) seconds.
            setTimeout(function() {  
            document.getElementById("outputUsersPasswordField1").innerHTML = " ";
            },
            7000);
        // Return false, if statement is not true. 
        return false;

        }
    
    // Create passwordRegExFormat1 variable in order to store regular expression format for users' password match test.   
    var passwordRegExFormat1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    // Create an if statement in users' password, in order to match, regular expression formated variable to the user entered and required password field.
    if (!usersPassword.value.match(passwordRegExFormat1)) { 
        // Add node white style color to the document message.
        document.getElementById("outputUsersPasswordField2").style.color = "#ffffff";
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersPasswordField2").innerHTML = "Your confirm password must be at least 8 characters in lenght" + "<br />" +  " and contain a least 4 of the following 4 types of characters:" + "<br />" + "\u2192 contain at least one lower case letter (i.e. a-z)," + "<br />" + "\u2192 contain at least one upper case letter (i.e. A-Z)," + "<br />" + "\u2192 contain at least one numeric digit (i.e. 0-9), and" + "<br />" + "\u2192 contain at least one special character (i.e. !@#$&*{ }[ ]^%).";
            // Add set time out node document to clear message after fifty (50) seconds.
            setTimeout(function() {  
            document.getElementById("outputUsersPasswordField2").innerHTML = " ";
            },
            10000);
            // Set the users email address  focus to the textbox.
            usersPassword.focus(); 
        // Return false, if statement is not true. 
        return false;
                
        }

    // Create if statements users confirm password, in order to verify, if all users have entered texts into the required confirm password field.
    if (usersCreateConfirmPassword == null || usersCreateConfirmPassword == "" || usersCreateConfirmPassword.length < 8) {
        // Add node white style color to the document message.
        document.getElementById("outputUsersConfirmPasswordField1").style.color = "#ffffff";
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersConfirmPasswordField1").innerHTML = "Your 'Password' is a require field.";
            // Add set time out node document to clear meassage after seven (7) seconds.
            setTimeout(function() {  
            document.getElementById("outputUsersConfirmPasswordField1").innerHTML = " ";
            },
            7000);
        // Return false, if statement is not true. 
        return false;

        }

    // Create emailRegExFormat2 variable in order to store regular expression format for users' confirm password match test.
    var passwordRegExFormat2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    // Create an if statement in users' confirm password, in order to match, regular expression formated variable to the user entered and required confirm password field.
    if (!usersConfirmPassword.value.match(passwordRegExFormat2)) { 
        // Add node white style color to the document message.
        document.getElementById("outputUsersConfirmPasswordField2").style.color = "#ffffff";
        // Add node document message, as an alert to users text errors. 
        document.getElementById("outputUsersConfirmPasswordField2").innerHTML = "Your password must be at least 8 characters in lenght" + "<br />" +  " and contain a least 4 of the following 4 types of characters:" + "<br />" + "\u2192 contain at least one lower case letter (i.e. a-z)," + "<br />" + "\u2192 contain at least one upper case letter (i.e. A-Z)," + "<br />" + "\u2192 contain at least one numeric digit (i.e. 0-9), and" + "<br />" + "\u2192 contain at least one special character (i.e. !@#$&*{ }[ ]^%).";  
            // Add set time out node document to clear meassage after fifty (50) seconds.
            setTimeout(function() {  
            document.getElementById("outputUsersConfirmPasswordField2").innerHTML = " ";
            },
            10000);
            // Set the users email address  focus to the textbox.
            usersConfirmPassword.focus(); 
        // Return false, if statement is not true. 
        return false;
                
        }

    // Create an if statement to verify, if both users password and confirm password input fields match and if not an alert message will appear for corrections.
    if (usersCreatePassword != usersCreateConfirmPassword) {
        alert("Your create password is not similar to your confirm email. Please enter the same passwords in both fields.");
        // Clear both Password and Comfirm Password input field, if users entry does not match. 
        document.getElementById("usersPassword").value = ""; 
        document.getElementById("usersPassword").placeholder = "Password"; 
        document.getElementById("outputUsersPassword").innerHTML = "";
        document.getElementById("usersConfirmPassword").value = ""; 
        document.getElementById("usersConfirmPassword").placeholder = "Confirm Password";   
        document.getElementById("outputUsersConfirmPassword").innerHTML = "";
        return false;

        }

        
    
    
    

    

    



       
        // Create an if statement in users' checkbox, in order to verify, if all users have checkbox their Terms and Services, Privacy Policy, Data Policy and Cookie Policy into the required checkbox field.
        if (!document.getElementById("goTerms").checked == true) {        
            // Add node white style color to the document message.
            document.getElementById("outputGoTermsField").style.color = "#ffffff";
            // Add node document message, as an alert to users text errors. 
            document.getElementById("outputGoTermsField").innerHTML = "Please indicate that you accept the Terms and Services, Privacy Policy, Data Policy and Cookie Policy";
                // Add set time out node document to clear message after seven (7) seconds.
                setTimeout(function() {        
                document.getElementById("outputGoTermsField").innerHTML = " ";
                },
                7000);
            // Return false, if statement is not true.  
            return false;   
        }

          
        else {
        //return true;
        document.getElementById("outputPolicyTerms").innerHTML = "Accepted Terms";
        // If no users entries are displayed, as an errorrous entries than the users are hyperlink to the AcceptTerms1 webpage.
        // Create a urlTerms variable in order to create users interactive hyperlink url connection.
        
        var urlTerms = 'c:/Users/sarai/Documents/Module 2 Project/AutonOfy/ConsumersConfirmEmail.html';
        //The location will open urlTerms in AcceptTerms1 webpage.
        location = urlTerms;

            

        }
        
    }


    


