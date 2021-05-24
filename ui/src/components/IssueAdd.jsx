import React from 'react'
export default function IssueAdd(props) { 
    
    function handleSubmit(e) {
      e.preventDefault();
      const form = document.forms.issueAdd;
      const issue = {
        owner: form.owner.value, title: form.title.value, due: form.due.value, effort:form.effort.value
      }
      props.createIssue(issue);
      form.owner.value = ""; form.title.value = ""; form.due.value = ""; form.effort.value = "";
    }
    
        return (
          <form name='issueAdd' onSubmit={handleSubmit}>
            <input type="text" name="owner" placeholder="Owner" />
            <input type="text" name="title" placeholder="Title" />
            <input type="number" name="effort" placeholder="Effort Level" />
            <input type='date' name="due" placeholder="Due Date" />
            <button type='submit'>Add</button>
          </form>
  
    ); 
    }