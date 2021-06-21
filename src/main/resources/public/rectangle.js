function myFunction1() {
    if (!isNaN(document.recTable.color.value) || isNaN(document.recTable.width.value) || isNaN(document.recTable.height.value) ||  isNaN(document.recTable.borderWidth.value) || document.recTable.width.value < 0 ||  document.recTable.height.value < 0 )
    {
        document.getElementById("invalidInput0").innerHTML = "INVALID";
        return -1;
    }
    return 0;

    if (document.recTable.name.value == "" || document.recTable.width.value == "" || document.recTable.height.value == "" ||  document.recTable.color.value == "" )
    { 
        document.getElementById("invalidInput0").innerHTML = "INVALID";
        return -1;
    }
}

function myFunction2() {
    if (isNaN(document.rectD2.id.value) || document.rectD2.id.value < 0) 
    {
        document.getElementById("invalidInput1").innerHTML = "INVALID";
        return -1;
    }
    return 0;
}


