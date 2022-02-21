const reviewContainer = document.getElementsByClassName("review-container")
const editReviewButtons = document.getElementsByClassName("edit-review-button")
const deleteReviewButtons = document.getElementsByClassName("delete-review-button")

const submitButton = document.getElementsByClassName("submit-review-button active")
const cancelButton = document.getElementsByClassName("cancel-review-button active")



const albumIdCollection = document.getElementsByClassName("hide")
const albumId = Array.from(albumIdCollection)[0]


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

const changeButtonsBack = e => {
    const elementId = e.target.parentNode.id.split('-')[1];
    const thisEditButton = document.getElementById(`edit-${elementId}`);
    const thisDeleteButton = document.getElementById(`delete-${elementId}`);
    const thisSubmitButton = document.getElementById(`submit-${elementId}`);
    const thisCancelButton = document.getElementById(`cancel-${elementId}`);

    thisEditButton.className = "edit-review-button active"
    thisDeleteButton.className = "delete-review-button active"
    thisSubmitButton.className = "submit-review-button hidden"
    thisCancelButton.className = "cancel-review-button hidden"

}



Array.from(deleteReviewButtons).forEach((deleteButton) => {
    deleteButton.addEventListener("click", async (e) => {
        const deleteId =e.target.id.split("-")[1];
        const res = await fetch(`/albums/${albumId.innerText}/${deleteId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
              }
        })
        const data = await res.json()
        if (data){
            document.getElementById(`content-${deleteId}`).parentNode.remove()
        }

    })
})


Array.from(editReviewButtons).forEach((editButton) => {
    editButton.addEventListener("click", (e) => {

        const elementId = e.target.parentNode.id.split('-')[1];
        const tableEle = document.getElementById(`content-${elementId}`)
        const tableRating = document.getElementById(`rating-${elementId}`)
        const ratingForCancel = tableRating.innerText
        const reviewText = tableEle.innerText
        tableEle.innerHTML = `<textarea id=textarea-${elementId}>${reviewText}</textarea>`
        tableRating.innerHTML = `<input id=numInput-${elementId} type="number" name="rating" min="1" max="10" required="required" />`

        changeButtons(e)

        Array.from(submitButton).forEach((singleSubmit) => {

            singleSubmit.addEventListener("click", async (e) => {
                const submitId =e.target.id.split("-")[1];
                const content = document.getElementById(`textarea-${submitId}`).value
                const rating = document.getElementById(`numInput-${submitId}`).value


                const fetchResponse = await fetch(`/albums/${albumId.innerText}/${submitId}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        content,
                        rating,
                        reviewId: submitId
                    })
                  })
                  const data = await fetchResponse.json()
                //   console.log(data.review.content)
                  if (data){
                      const newContent = document.getElementById(`content-${submitId}`);
                      newContent.innerText = data.review.content;
                      const newRating = document.getElementById(`rating-${submitId}`);
                      newRating.innerText = data.review.rating;
                      changeButtonsBack(e)
                  }
            })
        })

        Array.from(cancelButton).forEach((singleCancel) => {
            singleCancel.addEventListener("click", async (e) => {
                const cancelId =e.target.id.split("-")[1];

                tableEle.innerHTML = `<td id=content-${cancelId}>${reviewText}</td>`
                tableRating.innerHTML = `<td id=rating-${cancelId}>${ratingForCancel}</td>`
                changeButtonsBack(e);

            })
        })
    })
});







// editReviewButton.addEventListener("click", () => {
//     reviewContainer.style.display = "none"

// });

// deleteReviewButton.addEventListener("click", () => {

// });
