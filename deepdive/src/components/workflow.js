import React, { Component } from "react";

export default class Workflow extends Component {

      // First
      constructor() {
        super();
        this.state = {
            pageTitle: "Workflow"
        };
        console.log("constructor");
        this.handleClick=this.handleClick.bind(this)
        this.handleKeyUp=this.handleKeyUp.bind(this)
      }
    
      // Second
      static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
        return true
      }
    
      // Fourth
      componentDidMount() {
        console.log("componentDidMount");
      }
    
      // Fith (after update)
      shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
      }
    
      // Seventh (after update)
      getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate");
        return true;
      }
    
      // Eighth (after update)
      componentDidUpdate() {
        console.log("componentDidUpdate");
      }
    
      // Last
      componentWillUnmount() {
        console.log("componentWillUnmount");
      }
    
      handleClick() {
        console.log("button clicked");
        this.setState({ pageTitle: "Workflow" });
      };
    
      handleKeyUp (e) {
        this.setState({ inputDetails: e.target.value });
      };
    
      // Third
      // Sixth (after update)
      render() {
        console.log("render");
    
        return (
          <div>
            <h1>Workflow</h1>
    
            <input type="text" onKeyUp={e => this.handleKeyUp(e)} />
            <button onClick={this.handleClick}>Click Me</button>
          </div>
        );
      }
    }