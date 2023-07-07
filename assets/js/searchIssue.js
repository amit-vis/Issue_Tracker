// get the search issue form
let searchIssueForm = document.getElementById('search-issue-form');

// get the details of the issue in json
let searchJson = document.getElementById('issue-data').getAttribute('data');

// parse the data into search parse variable
let searchParse = JSON.parse(searchJson);

// get the element where we display out result of the filter
let showIssueData = document.getElementById('issues-list');

searchIssueForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    // create a empty Array
    let searchIssueArray = [];

    // get the element from the form by its name
    let titleValue = searchIssueForm.querySelector('input[name=tie]').value;

    // get the element from the form by its description
    let descriptionValue = searchIssueForm.querySelector('input[name=des]').value;

    searchParse.map((el)=>{
        if(el.title === titleValue || el.description=== descriptionValue){
            if(!searchIssueArray.includes(el)){
                searchIssueArray.push(el);
            }
        }
    });

    // we have shown make and shown our container here
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