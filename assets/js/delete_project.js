{
    // method of deleting the data using ajax
    let deleteProject = function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();
            // we have use the ajax to controll the function
            $.ajax({
                type: "get",
                url: $(deleteLink).prop('href'),
                success: function(data){
                    $(`#project-${data.data.project_id}`).remove();

                    // written a code for show the notification
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

    // delete the data here we have called the function
    $(document).ready(function(){
        $('.delete-link').each(function(){
            deleteProject(this);
        })
    })
}