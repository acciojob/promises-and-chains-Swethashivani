document.getElementById("userForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        let age = document.getElementById("age").value.trim();
        let name = document.getElementById("name").value.trim();

        if (age === "" || name === "") {
            alert("Please enter valid details.");
            return;
        }

        age = parseInt(age); // Convert age to number

        checkAge(age, name)
            .then(message => alert(message))
            .catch(error => alert(error));
    });

    function checkAge(age, name) {
        return new Promise((resolve, reject)=>{
			setTimeout(()=>{
			if(age>=18){
				resolve(`Welcome, ${name} You can vote.`)
			}	
				else{
					reject(`Oh sorry ${name}. You aren't old enough.`)
				}
			}, 4000);
});
}