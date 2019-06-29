 

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


    if (usersEmail != usersConfirmEmail) {
        alert("Your create email is not similar to your confirm email. Please enter the same emails in both fields.");
         return false;
    }
   
    if (usersCreatePassword != usersCreateConfirmPassword) {
         alert("Your create password is not similar to your confirm email. Please enter the same passwords in both fields.");
          return false;
    }

     else {
           return true;
    }


    

    
}








