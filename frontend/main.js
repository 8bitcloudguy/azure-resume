window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiURL ='https://8bitresumefunction.azurewebsites.net/api/GetResumeCounter?code=XDbJecc/YA8XifbwuSBY/d8L7d1V80tTpbDnDsPlanxR49rjQ/20cQ=='
const functionApiLocal ='http://localhost:7071/api/GetResumeCounter';
    
const getVisitCount = () => {
    let count =30;
    fetch(functionApiURL).then(response => {
        return response.json()
    })   .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }) .catch(function(error){
        console.log(error);
    });
    return count;
}