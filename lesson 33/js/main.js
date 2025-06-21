function validation(){
    var name = document.getElementById("name").value;

    var valid_name_regex = /^[A-Za-z]+$/;

    var name = document.getElementById("age").value;

    var valid_name_regex = /^[0-9]+$/;

    if(!(name.match(valid_name_regex)) ||
       !(age.match(valid_age_regex))  ||
       !(city==""))


    {

        if(!(name.match(valid_name_regex))){
            document.getElementById("name_errorr").style.visibility="visible";
            document.getElementById("name").style.borderBlockColor="red";
        
        }else{
            document.getElementById("name_errorr").style.visibility="visible";
            document.getElementById("name").style.borderBlockColor="black";
        }

        if(!(age.match(valid_name_regex))){
            document.getElementById("age_errorr").style.visibility="visible";
            document.getElementById("age").style.borderBlockColor="red";
        
        }else{
            document.getElementById("age_errorr").style.visibility="visible";
            document.getElementById("age").style.borderBlockColor="black";
        }

         if(city==""){
            document.getElementById("city_errorr").style.visibility="visible";
            document.getElementById("city").style.borderBlockColor="red";
        
        }else{
            document.getElementById("city_errorr").style.visibility="visible";
            document.getElementById("city").style.borderBlockColor="black";
        }

        if(!(phone.match(valid_phone_regex))){
            document.getElementById("phone_error").style.visibility="visible";
            document.getElementById("phone").style.borderBlockColor="red";
        
        }else{
            document.getElementById("phone_error").style.visibility="visible";
            document.getElementById("phone").style.borderBlockColor="black";

        }

        return false;
    
    }

    else{

        document.getElementById("name_errorr").style.visibility="visible";
        document.getElementById("name").style.borderBlockColor="black";
        document.getElementById("age_errorr").style.visibility="visible";
        document.getElementById("age").style.borderBlockColor="black";
        document.getElementById("city_errorr").style.visibility="visible";
        document.getElementById("city").style.borderBlockColor="black";
        document.getElementById("phone_error").style.visibility="visible";
        document.getElementById("phone").style.borderBlockColor="black";


        

        
    
    }

}
