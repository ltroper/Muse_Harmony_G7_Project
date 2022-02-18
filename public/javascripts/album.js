const reviewContainer = document.getElementsByClassName("review-container")
const editReviewButtons = document.getElementsByClassName("edit-review-button")
const deleteReviewButtons = document.getElementsByClassName("delete-review-button")


Array.from(editReviewButtons).forEach((editButton) => {
    editButton.addEventListener("click", (e) => {
        /*
        -get the id of the review.

        -get the table ele that belongs to the review.

        -change the table ele inner html to a textarea

        -change the edit and delete button to dif buttons, submit & cancel.
            -submit button, needs an event listener.
            -cancel button, need an event listener.
        */
        const elementId = e.target.parentNode.id.split('-')[1];
        const tableEle = document.getElementById(`content-${elementId}`)

        // console.log(e.target.parentNode.id.split('-')[1]);
        // console.log(e.target.parentNode);
    })
});




// editReviewButton.addEventListener("click", () => {
//     reviewContainer.style.display = "none"

// });

// deleteReviewButton.addEventListener("click", () => {

// });
