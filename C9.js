function validate()
    {
        var errorArr = [];
        if( document.myForm.Name.value == "" )
        {
            //alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            //return false;
            errorArr.push("You need a name");
        }

        if( document.myForm.EMail.value == "" )
        {
           // alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            //return false;
            errorArr.push("You need an email");
        }

        if( document.myForm.Zip.value == "" ||
            isNaN( document.myForm.Zip.value ) ||
            document.myForm.Zip.value.length != 5 )
        {
           // alert( "Please provide a zip in the format #####." );
            document.myForm.Zip.focus() ;
           // return false;
            errorArr.push("You need a Zip, or your zip isn't correct format");
        }

        if( document.myForm.Country.value == "-1" )
        {
            //alert( "Please provide your country!" );
            //return false;
            errorArr.push("You need a Country");
        }

        if (errorArr == null){
           return true;
        }else{
            for(var i = 0; i < errorArr.length; i++){
                alert(errorArr[i]);
            }
            return false;
        }
    }


