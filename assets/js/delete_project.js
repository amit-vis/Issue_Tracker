
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