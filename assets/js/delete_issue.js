// {
//     let deleteIssue = function (deleteLink) {
//         console.log(deleteLink)
//         $(deleteLink).click(function (e) {
//             e.preventDefault();

//             $.ajax({
//                 type: "get",
//                 url: $(deleteLink).prop('href'),
//                 success: function (data) {
//                     $(`#issue-${data.data.issue_id}`).remove();
//                 }, error: function (error) {
//                     console.log("Error", error);
//                 }
//             })
//         })
//     }

//     $(document).ready(function(){
//         $('.delete-link-issue').each(function () {
//             deleteIssue(this);
//         })
//     })
// }