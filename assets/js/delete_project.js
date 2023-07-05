{
    // method to submit the form data for new post using Ajax
    let deleteProject = function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();

            $.ajax({
                type: "get",
                url: $(deleteLink).prop('href'),
                success: function(data){
                    $(`#project-${data.data.project_id}`).remove();
                    new Noty({
                        theme: "relax",
                        text: "Project Deleted",
                        type: "success",
                        layout: "topRight",
                        timeout: 1500
                    }).show();
                }, error: function(error){
                    console.log("Error", error);
                }
            })
        })
    }
    $(document).ready(function(){
        $('.delete-link').each(function(){
            deleteProject(this);
        })
    })
}