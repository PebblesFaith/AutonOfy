 

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

    document.getElementById("usersConfirmEmailAddress").value = ""; 
    document.getElementById("usersConfirmEmailAddress").placeholder = "Confirm Email Address";    
    document.getElementById("outputConfirmUsersEmailAddress").innerHTML = "";

    document.getElementById("usersPassword").value = ""; 
    document.getElementById("usersPassword").placeholder = "Password";    
    document.getElementById("outputUsersPassword").innerHTML = "";

    document.getElementById("usersConfirmPassword").value = ""; 
    document.getElementById("usersConfirmPassword").placeholder = "Confirm Password";    
    document.getElementById("outputUsersConfirmPassword").innerHTML = "";    
    
}


let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;
document.querySelector("#usersDOB").valueAsDate = new Date();



/* Users input data are stored and displayed, as output data prints onto the 
   guessing game webpage. */
function submitFunction(usersEmailAddress) {

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

    

    // Create users first name if statements, in order to verify all users have entered texts into the required first name fields.
    if (usersFirstName == null || usersFirstName == "" || usersFirstName.length < 3) {        
        // Add node white style color to the document message.
        document.getElementById("outputFirstNameField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors.          
        document.getElementById("outputFirstNameField").innerHTML = "Your 'First Name' is a require field.";
        // Add set time out node document to clear meassage after seven (7) seconds.
        setTimeout(function() {        
        document.getElementById("outputFirstNameField").innerHTML = " ";
        },
        7000);
        // Return false, if statement is not true.
        return false;
    }

    if (usersMiddleName == null || usersMiddleName == "" || usersFirstName.length < 0) {
        // Add node white style color to the document message.
        document.getElementById("outputMiddleNameField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors.          
        document.getElementById("outputMiddleNameField").innerHTML = "If applicable, your 'Middle Name' is a require field";
        //Add set time out node document to clear meassage after seven (7) seconds.
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

    if (usersLastName == null || usersLastName == "" || usersLastName.length < 2) {
        // Add node white style color to the document message.
        document.getElementById("outputLastNameField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors.          
        document.getElementById("outputLastNameField").innerHTML = "Your 'Last Name' is a require field.";
        // Add set time out node document to clear meassage after seven (7) seconds.
        setTimeout(function() {        
        document.getElementById("outputLastNameField").innerHTML = " ";
        },
        7000);

       
        
        // Return false, if statement is not true.
        return false;
    }

    if (dobUsers == null || dobUsers == "") {
         // Add node white style color to the document message.
         document.getElementById("outputUsersDOBField").style.color = "#ffffff"; 
         // Add node document message, as an alert to users text errors.          
         document.getElementById("outputUsersDOBField").innerHTML = "Your 'Date of Birth' is a require field.";
         // Add set time out node document to clear meassage after seven (7) seconds.
         setTimeout(function() {        
         document.getElementById("outputUsersDOBField").innerHTML = " ";
         },
         7000);
         // Return false, if statement is not true.
         return false;
    }

    if ( usersBirthSexChoice == null || usersBirthSexChoice == "") {
        // Add node white style color to the document message.
        document.getElementById("outputUsersBirthSexField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors.          
        document.getElementById("outputUsersBirthSexField").innerHTML = "Your 'Birth Sex' is a require field.";
        // Add set time out node document to clear meassage after seven (7) seconds.
        setTimeout(function() {        
        document.getElementById("outputUsersBirthSexField").innerHTML = " ";
        },
        7000);
        // Return false, if statement is not true.     
        return false;
    }

    if (usersGenderChoice == null || usersGenderChoice == "") {
        // Add node white style color to the document message.
        document.getElementById("outputUsersGenderField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors.          
        document.getElementById("outputUsersGenderField").innerHTML = "Your 'Gender Identity' is a require field.";
        // Add set time out node document to clear meassage after seven (7) seconds.
        setTimeout(function() {        
        document.getElementById("outputUsersGenderField").innerHTML = " ";
        },
        7000);
        // Return false, if statement is not true.          
        return false;
    }

    if (usersNameId == null || usersNameId == "" || usersNameId.length < 6) {
        // Add node white style color to the document message.
        document.getElementById("outputUsersIdField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors.          
        document.getElementById("outputUsersIdField").innerHTML = "Your 'User Name Id' is a require field and must be greater than six (6) character strings.";
        // Add set time out node document to clear meassage after seven (7) seconds.
        setTimeout(function() {        
        document.getElementById("outputUsersIdField").innerHTML = " ";
        },
        7000);
        // Return false, if statement is not true.          
        return false;
    }
    if (usersEmail == null || usersEmail == "") {
        // Add node white style color to the document message.
        document.getElementById("outputUsersEmailAddressField").style.color = "#ffffff"; 
        // Add node document message, as an alert to users text errors.          
        document.getElementById("outputUsersEmailAddressField").innerHTML = "Your 'Email Address' is a require field.";
        // Add set time out node document to clear meassage after seven (7) seconds.
        setTimeout(function() {        
        document.getElementById("outputUsersEmailAddressField").innerHTML = " ";
        },
        7000);
        // Return false, if statement is not true.          
        return false;
    }

    var emailRegExFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    function validateEmail(usersEmailAddress) {
        if (usersEmailAddress.value.match(emailRegExFormat)) {
            return true;
        }
        else {
            // Add node white style color to the document message.
            document.getElementById("outputUsersEmailAddressField").style.color = "#ffffff"; 
            // Add node document message, as an alert to users text errors.          
            document.getElementById("outputUsersEmailAddressField").innerHTML = "You have entered an invalid email address!";
            // Add set time out node document to clear meassage after seven (7) seconds.
            setTimeout(function() {        
            document.getElementById("outputUsersEmailAddressField").innerHTML = " ";
            },
            7000);
            // set the cursor focus to users email address textbox.
            usersEmailAddress.focus();
            // Return false, if statement is not true.          
            return false;  
        }
    }


    if ( usersConfirmEmail == null || usersConfirmEmail == "") {
        alert("This field is required, you must enter your 'Confirm Email Address'.")
        return false;
    }

    // Create users validation passwords that must be at least eight (8) character long and no empty password field is allowed.
    if (usersCreatePassword.length < 8 || usersCreatePassword == "") {
        alert("This field is required, you must enter your 'Password' to be at least 8 character long.");
        return false;
    }

    // Create users validation confirm passwords that must be at least eight (8) character long and no empty confirm password field is allowed.
    if (usersCreateConfirmPassword.length < 8 || usersCreateConfirmPassword == "") {
        alert("This field is required, you must enter your 'Confirm Password' to be at least 8 character long.");
        return false;
    }

    
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailPattern.test(usersEmailAddress)) {
        //alert("You have entered the incorrect 'Email Address' format, re-enter your correct email address format 1111.");
        document.getElementById("usersEmailAddress").innerHTML = "This email is invalid.";
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

     else {

        
        


        // return true;
        // If no users entries are displayed, as an errorrous entries than the users are hyperlink to the AcceptTerms1 webpage.
        // Create a urlTerms variable in order to create users interactive hyperlink url connection.
        var urlTerms = 'c:/Users/sarai/Documents/Module 2 Project/AutonOfy/AcceptTerms1.html';
        //The location will open urlTerms in AcceptTerms1 webpage.
        location = urlTerms;

        

    }

   
    
    

 

    
}








