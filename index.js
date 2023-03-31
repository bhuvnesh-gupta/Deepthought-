// Add JSON
fetch("index.json")
.then(response => response.json())
.then(data => {
    // console.log('Data',data.tasks[0].task_title)
    // Message section
    document.querySelector('.tasks-message-heading').innerHTML = data.tasks[0].task_title
    document.querySelector('.tasks-message-description').innerHTML = data.tasks[0].task_description

 // Card First
    document.querySelector('.project-card-heading').innerHTML = data.tasks[0].assets[0].asset_title
    document.querySelector('.project-card-description-container').innerHTML = data.tasks[0].assets[0].asset_description

    // Card Two
    document.querySelector('.thread-card-heading').innerHTML = data.tasks[0].assets[1].asset_title
    document.querySelector('.thread-card-description-container').innerHTML = data.tasks[0].assets[1].asset_description

    // Card Three
    document.querySelector('.structure-card-heading').innerHTML = data.tasks[0].assets[2].asset_title
    document.querySelector('.structure-card-description-container').innerHTML = data.tasks[0].assets[2].asset_description

    // Card Four
    document.querySelector('.method-card-heading').innerHTML = data.tasks[0].assets[3].asset_title
    document.querySelector('.method-card-description-container').innerHTML = data.tasks[0].assets[3].asset_description
    // document.querySelector('.method-card-content').innerHTML = data.tasks[0].assets[3].asset_content
   
    
    
})


function openNav() {
    document.querySelector(".journey-card").style.display = "block";
    document.querySelector(".journey-sidebar").style.display = "none";
}
 
function closeNav() {
    document.querySelector(".journey-card").style.display = "none";
    document.querySelector(".journey-sidebar").style.display = "block";
}

