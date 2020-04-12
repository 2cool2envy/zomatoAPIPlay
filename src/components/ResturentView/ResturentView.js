import React from 'react';
import './ResturentList.scss'



class ResturentView extends React.Component {

    componentDidMount() {
    }
    render() {
        // console.log("props : ", this.props)
        return (
            <div style={{marginLeft:'auto',marginTop:'5%',marginRight:'auto'}} className="row container ResturentList">
          
                {
                    this.props.list.map((rest, i) => {
                        let imagePath = rest.restaurant.featured_image ? rest.restaurant.featured_image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"
                        return (
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={imagePath} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{rest.restaurant.name} ({rest.restaurant.timings})</h5>
                                        <p className="card-text">
                                            {rest.restaurant.cuisines}
                                        </p>
                                        <a href="#" className="btn btn-primary">{rest.restaurant.user_rating.aggregate_rating}</a>
                                    </div>
                                </div>

                            </div>

                        )
                    }
                    )
                }

            </div>
        );
    }
}

export default ResturentView;