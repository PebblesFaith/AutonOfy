 

function clearFunction() {
    document.getElementById("firstName").value = ""; 
    document.getElementById("firstName").placeholder = "First Name";    
    document.getElementById("outputFirstName").innerHTML = "";

    document.getElementById("middleName").value = "";   
    document.getElementById("middleName").placeholder = "Middle Name";     
    document.getElementById("outputMiddleName").innerHTML = "";

    document.getElementById("lastName").value = "";   
    document.getElementById("lastName").placeholder = "last Name";    
    document.getElementById("outputLastName").innerHTML = "";

    document.getElementById("usersDOB").value = "";
    document.getElementById("outputUsersDOB").innerHTML = "";  

    document.getElementById("usersBirthSex").value = "";      
    document.getElementById("outputUsersBirthSex").innerHTML = "";

    document.getElementById("usersGender").value = "";      
    document.getElementById("outputUsersGender").innerHTML = "";

    document.getElementById("usersId").value = ""; 
    document.getElementById("usersId").placeholder = "Create User Id";    
    document.getElementById("outputUsersId").innerHTML = "";

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

    // Create if statements, in order to verify all users have entered texts into the required fields.
    if (usersFirstName == null || usersFirstName == "" && usersFirstName.length < 2) {
        //alert("This field is required, you must enter your First Name.'")        
        document.getElementById("outputFirstNameField").innerHTML = "First Name is require field.";
        return false;
    }
    if (userLastName == null || usersLastName == "") {
        alert("This field is required, you must enter your 'Last Name.'")
        return false;
    }
    if (dobUsers == null || dobUsers == "") {
        alert("This field is required, you must enter your 'Date of Birth'.")
        return false;
    }
    if ( usersBirthSexChoice == null || usersBirthSexChoice == "") {
        alert("This field is required, you must enter your 'Birth Sex'.")
        return false;
    }
    if (usersGenderChoice == null || usersGenderChoice == "") {
        alert("This field is required, you must enter your 'Gender Identity'.")
        return false;
    }
    if (usersNameId == null || usersNameId == "") {
        alert("This field is required, you must enter your 'User Name'.")
        return false;
    }
    if (usersEmail == null || usersEmail == "") {
        alert("This field is required, you must enter your 'Email Address'.")
        return false;
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

        document.getElementById("outputFirstNameField").innerHTML = "";


        // return true;
        // If no users entries are displayed, as an errorrous entries than the users are hyperlink to the AcceptTerms1 webpage.
        // Create a urlTerms variable in order to create users interactive hyperlink url connection.
        var urlTerms = 'c:/Users/sarai/Documents/Module 2 Project/AutonOfy/AcceptTerms1.html';
        //The location will open urlTerms in AcceptTerms1 webpage.
        location = urlTerms;

        

    }


 

    
}








