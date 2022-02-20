const removeLibraryButton = document.getElementById("removeLibraryButton");
const userId = document.getElementById("userId").innerHTML;
const libraryName = document.getElementById("libraryName").innerHTML;
const manyRemoveAlbum = document.getElementsByClassName("removeAlbum");


removeLibraryButton.addEventListener("click", async (e) => {
    const res = await fetch(`/libraries/${libraryName}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
          },
    })
    const data = await res.json()
    if (data){
        console.log("somethings right")
    }
})

Array.from(manyRemoveAlbum).forEach((removeButton) => {
    removeButton.addEventListener("click", async (e) => {
        const removeId = e.target.id.split("-")[1];
        console.log(removeId)

        const res = await fetch(`/libraries/${libraryName}/${removeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
              },
        })
        const data = await res.json()
        if (data){
            document.getElementById(`album-${removeId}`).parentNode.parentNode.remove()
        }



        //await a fetch to destroy album with albumId and userId

    })
})
