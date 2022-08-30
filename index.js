const setAction = (value) => {
        document.querySelector('.title').innerHTML = value;

}

const selectElement = document.querySelector('.rightNav > button');
selectElement.addEventListener("mouseover", dropDownEnable);
selectElement.addEventListener("mouseout", dropDownDisable)

function dropDownEnable() {

        document.querySelector('.rightNavDropDown').className = 'rightNavDropDownEnable';
       
        
        
}

function dropDownDisable() {
        const disableFun = () => {
                console.log('disable');
        }
        const callMe = ()=>{
                document.querySelector('.rightNavDropDownEnable').addEventListener('mouseout', disableFun) // check if mouse over selectElement
                //if not then disable it 
                document.querySelector('.rightNavDropDownEnable').className = 'rightNavDropDown';
                
        }
        c = setTimeout(callMe ,1000)
}