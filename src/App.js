import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  state = {
    title : '',
    count : 1,
    tasks : []
  }

  handleOnChange = (e) => {
    const {value} = e.target
    this.setState({
      title : value
    
    })
  }
  handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault()
      
      const { title, count} = this.state
     
      const task = {
        id: count ,
        title,
      }
      
      let newTasks = [...this.state.tasks, task]

      
      this.setState({
       tasks: newTasks,
       count: count + 1, 
       title: ''
      })
      console.log(this.state.tasks)

    }
  }
  render() {
    const { title, tasks } = this.state
    console.log('task desde render: ', tasks)
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {tasks.map(el => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ul>
           <form>
             <input 
             type="text" 
             id="new-task" 
             placeholder="Ingresa una tarea y oprime Enter"
             onChange={this.handleOnChange}
             onKeyPress={this.handleKeyDown} 
             value={title}/>
           </form>
        </div>
      </div>
    )
  }
}


export default App;
