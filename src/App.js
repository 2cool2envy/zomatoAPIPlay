import React from 'react';
import './App.scss';
import showToast from './services/Toast';
import ResturentView from './components/ResturentView/ResturentView';
import getLocation from './services/Location';
import getResturentDetails from './services/Fetch';


const API = require('./services/Fetch');


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      listData: [],
      suggestionList: [],
      textVal: '',
      reviews: []
    }
  }


  async componentDidMount() {
    console.log(process.env);
    try {
      let location = await getLocation();
      console.log(location);
      let list = await getResturentDetails(...location);
      console.log(list)
      this.setState({ listData: list.restaurants })
    }
    catch (err) {
      console.error(err)
    }

  }

  removeDuplicated(textVal) {
    console.log('More..', textVal);
    console.info("this.state.suggestionList.length  :", this.state.suggestionList.length)

    return new Promise((resolve, reject) => {

      if (this.state.suggestionList.length >= 1) {
        let tempArr = [];
        let theObj = {};
        for (let i in this.state.suggestionList) {
          let objName = this.state.suggestionList[i]['name'];
          theObj[objName] = this.state.suggestionList[i];
        }

        for (let i in theObj) {
          tempArr.push(theObj[i]);
        }
        this.setState({ suggestionList: tempArr });
        console.log("tempArr :", tempArr);
      }
      else {
        this.state.listData.forEach((element, i) => {
          let restName = (element.restaurant.name).toLowerCase();
          if (restName.includes(textVal)) {
            this.setState({ suggestionList: this.state.suggestionList.concat(element) });
          }
        });
      }

      resolve();
    })
  }
  async handleTextChange(event) {
    this.setState({ reviews: '' })
    let userVal = event.target.value.toLowerCase();
    if (event.target.value.length <= 2) {
      this.setState({ suggestionList: [] });
    }

    if (event.target.value.length > 2) {

      let dup = await this.removeDuplicated(userVal);
    }



  }
  suggClick(row) {
    console.log("row", row);
    this.setState({ reviews: row.user_rating.aggregate_rating })
  }
  render() {
    return (
      <div className="row appDiv">
        <div className="offset-col-4 offset-md-4 col-md-4 col-lg-4">
          <input type="text" className="form-control"
            onChange={this.handleTextChange.bind(this)}
            placeholder="Search" id="textBox" />

        </div>

        {

          this.state.suggestionList.map((data, key) => {
            return (
              <div
                className="suggestionLabel offset-col-4 offset-md-4 col-md-4 col-lg-4">

                <span onClick={() => this.suggClick(data.restaurant)}
                >{data.restaurant.name}  |  {data.restaurant.location.locality}</span>
              </div>
            )
          })
        }
        {
          this.state.reviews.length > 0 &&
          <div className="offset-col-4 offset-md-4 col-md-4 col-lg-4">

            <h3 style={{marginTop:'3%'}}>    User Review :         {this.state.reviews}</h3>

          </div>
        }
   
        <ResturentView list={this.state.listData} />
      </div>
    );
  }
}

export default App;