import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Modal} from 'react-bootstrap'
export default function IssueAdd(props) { 

  const [showForm, setShowForm] = useState(false)
    function handleSubmit(e) {
      e.preventDefault();
      const form = document.forms.issueAdd;
      const issue = {
        owner: form.owner.value, title: form.title.value, due: form.due.value, effort:form.effort.value, description:form.description.value
      }
      props.createIssue(issue);
      form.owner.value = ""; form.title.value = ""; form.due.value = ""; form.effort.value = ""; form.description.value=''
      setShowForm(false)
    }
    
        return (
          <>
            <Modal show ={showForm} onHide={() => setShowForm(false)} size='xl'>
                  <Modal.Header closeButton><h3>Issue creation form</h3></Modal.Header>
                    <Modal.Body>
                    <div className='container-fluid'>
                      <form name='issueAdd' onSubmit={handleSubmit}>
                        <input className='form-control py-2 my-2' type="text" name="owner" placeholder="Owner" />
                        <input className='form-control py-2 my-2' type="text" name="title" placeholder="Title" />
                        <input className='form-control py-2 my-2' type="number" name="effort" placeholder="Effort Level" />
                        <input className='form-control py-2 my-2' type='date' name="due" placeholder="Due Date" />
                        <textarea className='form-control py-2 my-2' name="description" placeholder=" Issue Description" />
                        <button className='btn btn-primary btn-block btn-lg' type='submit'>Add</button>
                    </form>
                  </div>
                  </Modal.Body>
            </Modal>
          <div className='m-2 p-2 text-center'>
              <button className='btn btn-outline-primary' onClick={() => setShowForm(true)}>
              Click to create a new issue <FontAwesomeIcon icon='plus-circle' /></button>
          </div>
          </>
    ); 
    }