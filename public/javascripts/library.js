const removeLibraryButton = document.getElementById("removeLibraryButton")
const userId = document.getElementById("userId").innerHTML
const libraryName = document.getElementById("libraryName").innerHTML


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
