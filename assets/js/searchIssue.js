let searchIssueForm = document.getElementById('search-issue-form');

let searchJson = document.getElementById('issue-data').getAttribute('data');

let searchParse = JSON.parse(searchJson);

let showIssueData = document.getElementById('issues-list');

searchIssueForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let searchIssueArray = [];

    let titleValue = searchIssueForm.querySelector('input[name=tie]').value;
    let descriptionValue = searchIssueForm.querySelector('input[name=des]').value;

    searchParse.map((el)=>{
        if(el.title === titleValue || el.description=== descriptionValue){
            if(!searchIssueArray.includes(el)){
                searchIssueArray.push(el);
            }
        }
    });

    showIssueData.innerHTML = '';
    searchIssueArray.forEach((issue)=>{
        let Div = document.createElement('div');
        Div.style = "none";
        Div.innerHTML = `
        <div class="card w-100" >
      <div class="card-body" >
        <h4 class="card-title">Title : ${issue.name} </h4>
        <h5 class="card-title">Author : ${issue.author}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Description : ${issue.description}
        </h6>
      </div>
    </div>
    `;
    showIssueData.appendChild(Div)
    })
});