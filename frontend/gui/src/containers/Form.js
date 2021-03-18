import React, { Component} from 'react';

import axios from 'axios';



class CustomForm extends Component{

    handleFormSubmit =(event,requestType,articleID)=>
    {
        //event.preventDefault();
        const title = event.target.title.value;
        const author = event.target.author.value;
        const content = event.target.content.value;

        console.log(title,content,author,"Hello Django");

        if( requestType==='post')
        {
           axios.post('http://127.0.0.1:8000/api/',{
                title:title,
                author:author,
                content:content
            })
            .then (res=>console.log(res))
            .catch(err=>console.log(err))
        }
        else if (requestType==='put')
        {
            console.log('In the update',articleID)
              return axios.put(`http://127.0.0.1:8000/api/`+articleID+'/',{
                id :articleID,
                title:title,
                content:content,
                author:author
            })
            .then (res=>console.log(res))
            .catch(err=>console.log(err))
        }

    }
    render()
    {
        return(
            <form onSubmit={(event)=>this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID
            )}>
                <label>
                    Name:
                    <input type="text" name="title" placeholder="Enter a title"/>
                </label>
                <br/>
                <label>
                    Author:
                    <input type="text" name="author" placeholder="Author Name"/>
                </label>
                <br/>
                <label>
                    Description:
                    <input type="text" name="content" placeholder="Description"/>
                </label>
                <br/>
                <input type="submit" value={this.props.btnText} />
            </form>
        )
    }
}

 export default CustomForm;
