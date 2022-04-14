import React from 'react';

class SearchBar extends React.Component {
    state={value:''};

    handleOnChange=(e)=>{
        this.setState({value:e.target.value});
    }

    handleOnClick=(e)=>{
        e.preventDefault();
        // console.log(this.state.value);
        this.props.AppHandleOnClick(this.state.value);
    }
    componentDidMount(){
        this.props.AppHandleOnClick('myheroacademia');
    }
    render (){
        return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <a href='/' className="navbar-brand">Mini tube📽</a> {/* //!use href='/' instead of href='#' will remove warning */}
            <form className="d-flex">
            <input  onChange={this.handleOnChange} className="form-control me-2" type="search" placeholder="Search" value={this.state.value} autoComplete='on'/>
            <button onClick={this.handleOnClick} className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </nav>
    </div>
    );
    }
}
export default SearchBar;

