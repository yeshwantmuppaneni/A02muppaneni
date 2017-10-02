function myFunction()
{

if($("#sname").val()=="")throw alert("Name should not be empty!!");
if($("#gpa").val()=="")throw alert("... gpa should not be empty!!");
    if($("#gpa").val() >= 3 && $("#gpa").val() <= 4 )
    {
                alert("Your are eligible to study Graduation!!")
    }
    else
    {
       calcu($("#gpa").val());
    }

}

function calcu(g)
{
    var x;
    if( g >= 4)
    {
        alert("GPA is illegal")
        return no;
    }
    else
    {
        alert("Your are not eligible to study Graduation!!")
        return yes;
    }
    
}