// get the form
const filterIssueForm = document.getElementById("filter-issue-form");

// get the details of the issue in json
const issueJson = document.getElementById('issue-data').getAttribute('data');

// parse the data
let issue = JSON.parse(issueJson);

// get the element where we display out result of the filter
let issueList = document.getElementById('issues-list');

filterIssueForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    // create a empty array to store the data
    let filteredIssue = [];

    // get elements from form
    let labelList = filterIssueForm.querySelectorAll("input[type=checkbox]");
    let labelElements = [...labelList].filter((Element)=>Element.checked);

    let authorVal = filterIssueForm.querySelector("input[type=radio][name=author]:checked");

    let [...labelArr] = labelElements.map((Element) => Element.value);

    issue.map((el)=>{
        if(el.author === authorVal){
            if(filteredIssue.includes(el)){
                filteredIssue.push(el);
            }
        }
        labelArr.map((label)=>{
            if(el.labels.includes(label)){
                if(!filteredIssue.includes(el)){
                     filteredIssue.push(el);               
                }
            }
        });
    });

    issueList.innerHTML = '';
    filteredIssue.forEach((issue)=>{
        let Div = document.createElement('div');
        Div.style = "none";
        Div.innerHTML = `
        <div class="card w-100" >
      <div class="card-body" >
        <h4 class="card-title">Title : ${issue.title} </h4>
        <h5 class="card-title">Author : ${issue.author}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Description : ${issue.description}
        </h6>
      </div>
    </div>
    `;
    issueList.appendChild(Div);
    })
});