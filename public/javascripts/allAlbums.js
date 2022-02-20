const addToLibraryButtons = document.getElementsByClassName("addToLibrary")


Array.from(addToLibraryButtons).forEach((addButton) => {
    addButton.addEventListener("click", async (e) => {
        const addId = e.target.id.split("-")[1];
        const userId = document.getElementById("userId").innerHTML

        const tableEle = document.getElementById(`album-${addId}`)
        const oneDropDown = document.getElementById(`dropDown-${addId}`)
        const cancel = document.getElementById(`cancel-${addId}`)
        const success = document.getElementById(`success-${addId}`)

        tableEle.className = "addToLibrary hidden"
        oneDropDown.className = "dropDown active"
        cancel.className = "cancel active"

        cancel.addEventListener("click", async (e) => {
            tableEle.className = "addToLibrary active"
            oneDropDown.className = "dropDown hidden"
            cancel.className = "cancel hidden"
        })

        oneDropDown.addEventListener("change", async (e) => {
            const libraryName = e.target.value;
            const res = await fetch(`/libraries/${libraryName}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                  },
                body: JSON.stringify({
                    name: libraryName,
                    userId,
                    albumId: addId
                })
            })
            const data = await res.json()
            if (data){
                tableEle.className = "addToLibrary active"
                oneDropDown.className = "dropDown hidden"
                cancel.className = "cancel hidden"
                success.className = "success active"
                oneDropDown.value = ""
            }
            else {
                success.className = "success active"
                success.innerText = "Album already in library"
            }
        })



        //fetch all libraries by the user that don't have the albumId
        //display them in dropdown
        //fetch post to the chosen library to add the album with addId

    })
})
