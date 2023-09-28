const addressBook = [{fname:'Adam' , lname: 'Smith', city: 'Hartford', phone: '860-056-8710'},
                     {fname:'John' , lname: 'Smith', city: 'New Haven', phone: '203-656-0090'},
                     {fname:'John' , lname: 'McHale', city: 'West Hartford', phone: '860-650-1095'},
                     {fname:'Orla' , lname: 'Brown', city: 'New Haven', phone: '203-656-0090'}];
                                          

document.getElementById('search').addEventListener("click", searchName)


function searchName() {
    document.getElementById('response').style.color = "black"
    console.log('search button pressed')
    
    firstName = document.getElementById("fname").value
    lastName = document.getElementById("lname").value

    document.getElementById('phone').innerHTML = "Phone Number: "
            document.getElementById('city').innerHTML = "City: "

    if (firstName + lastName !== '') {
        if (firstName + lastName == '') {
            //Empty fields error
            console.log('empty')

        } else if (lastName == '') {
            //search by first names
            console.log('first name')
            resp = addressBook.filter(object => {
                return object.fname == firstName
                
            })
            console.log(resp)
            respFunction(resp)
            
        } else if (firstName == '') {
            //search by last name 
            console.log('last name')
            resp = addressBook.filter(object => {
                return object.lname == lastName
                
            })
            console.log(resp)
            respFunction(resp)

        } else { 
            //search by first and last name 
            console.log('both fields')
            resp = addressBook.filter(obj => {
                console.log(firstName)
                console.log(lastName)
                return (obj.fname == firstName && obj.lname == lastName)
            })
            console.log(resp)
            respFunction(resp)
            
        }
    } else {
        document.getElementById('phone').innerHTML = "Phone Number: Please enter name"
        document.getElementById('city').innerHTML = 'City: Please enter name'
        document.getElementById('response').style.color = "red"
    }
        
    function respFunction(resp) {
        if (resp.length > 1) {
            //two or more error
            console.log('no input')
            document.getElementById('phone').innerHTML= "Phone Number: Multiple matches, use first and last name!"
            document.getElementById('city').innerHTML = "City: Multiple matches, use first and last name!"
            document.getElementById('response').style.color = "red"

        } else if (resp.length == 1) {
            //print info on screen
            document.getElementById('phone').innerHTML = "Phone Number: " + resp[0].phone
            document.getElementById('city').innerHTML = "City: " + resp[0].city
        } else {
            //print not found 
            document.getElementById('phone').innerHTML = "Phone Number: Person not found. Please check spelling."
            document.getElementById('city').innerHTML = 'City: Person not found. Please check spelling'
            document.getElementById('response').style.color = "red"
        }
    }
    }
    



