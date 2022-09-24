const buttonEl = document.getElementById("button")
const buttonSv = document.getElementById("save-el")
const buttonBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.querySelector("ul")
const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads",))
let myLeads =[]
let oldLeads = ''




if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(Leads){
    let listItems = ""
    for(let i = 0; i <Leads.length; i++){
        listItems +=
         `<li>
              <a target= '_blank' href= ' ${Leads[i]}'>  
                ${Leads[i]}
              </a>
         </li>`
        
    }

    ulEl.innerHTML = listItems
}

buttonEl.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
          render(myLeads)
})

buttonBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})



buttonSv.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

    
})


 

