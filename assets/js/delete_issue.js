{
    let deleteIssue = function (deleteLink) {
            $.ajax({
                type: "get",
                url: $(deleteLink).prop('href'),
                success: function (data) {
                    $(deleteLink).closest('.card').remove();

                    new Noty({
                        theme: "relax",
                        text: data.message,
                        type: "success",
                        layout: "topRight",
                        timeout: 1500
                      }).show();

                }, error: function (error) {
                    console.log("Error", error);
                }
            })
    }

    $(document).ready(function(){
        $('.delete-link-issue').click(function (e) {
            e.preventDefault();
            deleteIssue(this);
        });
    });
}