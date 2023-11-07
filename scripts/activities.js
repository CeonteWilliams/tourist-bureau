"use strict"

window.onload = function (_event) {
    // todo: assign an onchange event handler to the categories
    const categorySelect = document.getElementById("category")
    categorySelect.onchange = populateActivities

    // todo: assign an onchange event handler to the activities
    const activityselect = document.getElementById("activity")
    activityselect.onchange = renderActivityCard

    populateCategories(categories, categorySelect)
}
//counter + reduce
function populateCategories(categories, selectElement) {
    let html = ""
    for (let index = 0; index < categories.length; index += 1) {
        const currentCategory = categories[index]
        html += `<option value="${currentCategory}">${currentCategory}</option>`
    }
//for statement is a reduced algortihm
    console.log(html)
    selectElement.innerHTML = html
}


// findAll + reduce
function populateActivities (event) {
    const selectedCategory = event.target.value
    console.log(selectedCategory)
    // What do we do with this category selected by the user now that we have it?
    
    let html = ""
    for (let index = 0; index < activities.length; index += 1) {
        const activity = activities[index]

        if (activity.category === selectedCategory) {
            html += `<option value="${activity.id}">${activity.name}</option>`
        }
    }
    
    const selectElement = document.getElementById("activity")
    selectElement.innerHTML = html
}
// findFirst + reduce algorithm
function renderActivityCard (event) {
    const selectedActivityId = event.target.value
    console.log(selectedActivityId)

    let html = ""
    for (let index = 0; index < activities.length; index += 1) {
        const activity = activities[index];
        
        if (activity.id === selectedActivityId) {
            html += `
                <div class="card">
                    <h5 class="card-header">${activity.name}</h5>
                    <div class="card-body">
                        <h5 class="card-title">Where? <em>${activity.location}</em></h5>
                        <p class="card-text">${activity.description}</p>
                        <a href="#" class="btn btn-primary">Buy e-Ticket for \$${activity.price}</a>
                    </div>
                </div>
            `
        }
    }

    const resultDiv = document.getElementById("selected-activity")
    resultDiv.innerHTML = html
}