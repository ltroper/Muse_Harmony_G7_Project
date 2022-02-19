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



Array.from(deleteReviewButtons).forEach((deleteButton) => {
    deleteButton.addEventListener("click", async (e) => {
        const deleteId =e.target.id.split("-")[1];
        const res = await fetch(`/albums/ab/${deleteId}`, {
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
        const reviewText = tableEle.innerText
        tableEle.innerHTML = `<textarea id=textarea-${elementId}>${reviewText}</textarea>`

        changeButtons(e)

        Array.from(submitButton).forEach((singleSubmit) => {

            singleSubmit.addEventListener("click", async (e) => {
                const submitId =e.target.id.split("-")[1];
                const content = document.getElementById(`textarea-${submitId}`).value
                console.log(content)
                //fix ab for the album id
                const fetchResponse = await fetch(`/albums/ab/${submitId}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        content,
                        reviewId: submitId
                    })
                  })
                  const data = await fetchResponse.json()
                //   console.log(data.review.content)
                  if (data){
                      const newContent = document.getElementById(`content-${submitId}`)
                      newContent.innerText = data.review.content
                  }



            })
        })
    })
});







// editReviewButton.addEventListener("click", () => {
//     reviewContainer.style.display = "none"

// });

// deleteReviewButton.addEventListener("click", () => {

// });
