window.getComment = (() => {
    var comments = null

    window.saveComment = (data) => {
        comments = data
    }

    done = () => {
        // console.log("done", comments)
        return comments
    }

    var osscript = document.createElement("script")
    osscript.src = `http://43.142.26.74:10281/api/v1/comment/list?callback=saveComment`
    // osscript.src = `http://localhost:8000/api/v1/comment/list?callback=saveComment`
    osscript.type = "text/javascript"
    // osscript.onload = done

    document.head.appendChild(osscript)
    document.head.removeChild(osscript)


    return done
})();

window.addComment = (id, content)=>{
    var osscript = document.createElement("script")
    osscript.src = encodeURI(`http://43.142.26.74:10281/api/v1/comment/add?parent_id=${id}&content=${content}`)
    osscript.type = "text/javascript"
    // osscript.onload = done

    document.head.appendChild(osscript)
    document.head.removeChild(osscript)
}