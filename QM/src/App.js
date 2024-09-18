import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      result: '',
      num: '',
      minString: '',
      isNumLaw: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleSubmit () {
    if (this.state.isLaw == true) {
      console.log('请求成功了')
      axios.post('/result',{
        num: Number(this.state.num),
        minString: this.state.minString.split(',').forEach(x => {x = Number(x)})
      })
      .then(response => {
        this.setState({
          result: response.data
        })
      })
    }
  }
  handleChange1 (event) {
    var value = event.target.value;
    this.setState({
      num: value
    });
    if ((typeof Number(value)) != NaN) {
      this.setState({
        result: '变量数目格式错误'
      })
    } else {
      this.setState({
        result: ''
      })
    }
  }
  handleChange2 (event) {
    var value = event.target.value;
    this.setState({
      minString: value
    });
    var valueArray = value.split(',');
    if (!valueArray.every(x => typeof Number(x) == 'number')) {
      console.log('err')
      this.setState({
        result: 'err'
      })
    }

  }
  render() {
    return (
      <div>
        <label>
          变量的数量：
          <input type='text' value={this.state.num} onChange={this.handleChange1} placeholder='如：4' />
        </label>
        <br />
        <label>
          最小项：
          <input type='text' value={this.state.minString} onChange={this.handleChange2} placeholder='如：3,4,5' />
        </label>
        <br />
        <button onClick={this.handleSubmit}>化简</button>
        <br/>
        <p>化简结果：{this.state.result}</p>
      </div>
    )
  }
}

export default App;
