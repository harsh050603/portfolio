function validate()
{
    var a = document.getElementById("name");
    var b = document.getElementById("middlename");
    var c = document.getElementById("lastname");
    var d = document.getElementById("email");
    var e = document.getElementById("contact");

if(a.value.trim()==""||b.value.trim()==""||c.value.trim()==""||d.value.trim()==""||e.value.trim()=="")
{
    alert("Please fill the remaining details");
    return false;
}
    else
    {
          true;
    }
}
function validate1()
{
    var e = document.getElementById("contact").value;

    var regx = /^[7-9]\d{9}$/;
    if(regx.test(e))
    {
        document.getElementById("lbltext").innerHTML="Valid";
        document.getElementById("lbltext").style.visibility="visible";

    }
    else
    {
        document.getElementById("lbltext").innerHTML="InValid";
        document.getElementById("lbltext").style.visibility="visible";
    }
}
