const reviewContainer = document.getElementsByClassName("review-container")
const editReviewButtons = document.getElementsByClassName("edit-review-button")
const deleteReviewButtons = document.getElementsByClassName("delete-review-button")
const submitButton = document.getElementsByClassName("submit-review-button active")

const changeButtons = (e) =>{

    const elementId = e.target.parentNode.id.split('-')[1];
    const thisEditButton = document.getElementById(`edit-${elementId}`);
    const thisDeleteButton = document.getElementById(`delete-${elementId}`);
    const thisSubmitButton = document.getElementById(`submit-${elementId}`);
    const thisCancelButton = document.getElementById(`cancel-${elementId}`);

    thisEditButton.className = "edit-review-button hidden"
    thisDeleteButton.className = "delete-review-button hidden"
    thisSubmitButton.className = "submit-review-button active"
    thisCancelButton.className = "cancel-review-button active"
}



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
        const reviewText = tableEle.innerText
        tableEle.innerHTML = `<textarea id=textarea-${elementId}>${reviewText}</textarea>`

        changeButtons(e)

        Array.from(submitButton).forEach((singleSubmit) => {

            singleSubmit.addEventListener("click", async (e) => {
                const submitId =e.target.id.split("-")[1];
                const content = document.getElementById(`textarea-${submitId}`).value
                console.log(content)
                await fetch("/albums/:id/reviewId", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: content,
                    reviewId: submitId
                  })

            })
        })
    })
});







// editReviewButton.addEventListener("click", () => {
//     reviewContainer.style.display = "none"

// });

// deleteReviewButton.addEventListener("click", () => {

// });
