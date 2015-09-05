var RecordForm = React.createClass({
  getInitialState:function(){
    return {date:'',title:'',amount:''}
  },

  handleChange: function(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
  },

  handleSubmit:function(e){
    e.preventDefault();
    $.post('',{ record: this.state },function(data){
      this.props.handleNewRecord(data);
      this.setState(this.getInitialState());
    }.bind(this)
    ,'JSON');
  },
  
  valid: function() {
    return (this.state.title && this.state.date && this.state.amount);
  }, 
  
  render:function(){
    return(
        <form className='form-inline' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='date' name='date' value={this.state.date}  onChange={this.handleChange}/>
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Title' name='title' value={this.state.title}  onChange={this.handleChange}/>
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Amount' name='amount' value={this.state.amount}  onChange={this.handleChange}/>
          </div>
        <button type='submit' value='create record' className='btn btn-primary' disabled={!this.valid()}>create record</button>
      </form>    
      )
  }
});