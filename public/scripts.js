function onOff() {
        document
            .querySelector("#modal")
            .classList 
            .toggle("hide");
        document
           .querySelector("body")
           .classList
           .toggle("hideScroll");
         domument
            .querySelector("#modal")
            .toggle("addScroll")

        }
        function checkFields (event){
            
            const valuesToCheck = [
                "title",
                "image",
                "category",
                "description",
                "link",

            ]

            const isEmpty = valuesToCheck.find(function(value) {   
        
                const checkIfIsString = typeof event.target [value].value === "string"
                const checkIfIsEmpty = !event.target[value].value.trim()
        
                if(checkIfIsString && checkIfIsEmpty) {
                    return true
                }
        
            })
        
            if(isEmpty) {
                event.preventDefault()
                alert(" Por favor preencha todos os campos ")
            }
                
            //for( let value of valuesToCheck)
            // console.log(event.target[value].value)
        }
        