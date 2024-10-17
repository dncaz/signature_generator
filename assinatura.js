function generateHTML() {
    var name = document.getElementById("name").value;
    var department = document.getElementById("department").value;
    var signatureType = document.getElementById("signatureType").value;
    var emailProvider = document.querySelector('input[name="emailProvider"]:checked').value;

    var generatedHTML = `<p> ${name} </p><p> ${department} </p><p> ${signatureType} </p>`;
    
    document.getElementById("generatedHTML").innerHTML = generatedHTML;
    document.getElementById("generatedHTML").style.display = "block";

    if (emailProvider === "Outlook") {
        document.getElementById("outlookTutorial").style.display = "block";
        document.getElementById("thunderbirdTutorial").style.display = "none";
    } else if (emailProvider === "Thunderbird") {
        document.getElementById("outlookTutorial").style.display = "none";
        document.getElementById("thunderbirdTutorial").style.display = "block";
    }
}
