import React, { Component } from 'react'
import {deleteVisitor, getVisitorList} from './VisitorListFunctions'
import Pagination from './Pagination'

class AllVisitor extends Component{
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            purpose: '',
            created: '',
            items: [],
            pageOfItems: []            
        }
//       this.onClick = this.onClick.bind(this)
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems })
    }
    componentDidMount() {
        this.getAll()
    }
    getAll = () => {
        getVisitorList().then(res => {
            this.setState(
            {
            
              items: [...res]
            },
            () => {
              console.log(this.state.items)
            }
          )
        })
    }
    onEdit = (id,e) => {
        e.preventDefault()
        this.props.history.replace(`all_visitors/${id}/edit`)
    }
    
    onDelete = (id, e) => {
        e.preventDefault()
        deleteVisitor(id).then(() => {
          this.getAll()
        })
    }
    render() {
        return(
            <div className="container">
                <div className="row mt-5 text-center">
                    <table className="table table-hover table-dark ">
                        <thead>  
                            <tr className="bg-primary">
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Purpose</th>
                                <th scope="col">Time</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pageOfItems.map((item, index) => (
                            <tr key={index}>
                                <td className="text-left">{item.name}</td>
                                <td className="text-left">{item.email}</td>
                                <td className="text-left">{item.phone}</td>
                                <td className="text-left">{item.address}</td>
                                <td className="text-left">{item.purpose}</td>
                                <td className="text-left">{item.created}</td>
                                {/* <td><Link to={"/edit_visitor"} className="btn btn-primary">Edit</Link></td> */}
                                <td><button onClick={this.onEdit.bind(this, item.id)} className="btn btn-primary">Edit</button></td> 
                                <td><button onClick={this.onDelete.bind(this, item.id)} className="btn btn-warning">Delete</button></td>
                            </tr>
                            ))}
                            
                        </tbody>
                        <Pagination items={this.state.items} onChangePage={this.onChangePage} />
                    </table>
                    
                </div>
            </div>
        )

    }

}

export default AllVisitor