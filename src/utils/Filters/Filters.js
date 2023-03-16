import React, { Component } from "react";
import CategoryFilter from "./CategoryFilter";
import SliderFilter from "./SliderFilter";
import "./Filters.css";
import DestinationFilter from "./DestinationFilter/DestinationFilter";
import { fetchMockData } from "../transfer";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationMock: [],
      locationDetails: [],
      countries: [],
    };
  }

  async componentDidMount() {
    let locationMockData = [];

    await fetchMockData()
      .then((res) => {
        locationMockData = res.data;
      })
      .catch((err) => console.log(err));

    const locationDetails = locationMockData.map((item) => {
      return {
        label: item.country,
        countryCode: item.countryCode,
        city: item.city,
        lat: item.lat,
        long: item.long,
      };
    });

    const label = locationDetails.map((item) => item.label);
    const uniqueLabels = [...new Set(label)];
    const countries = uniqueLabels.map((item) => {
      return { label: item };
    });
    
    this.setState({
      locationMock: locationMockData,
      locationDetails: locationDetails,
      countries: countries,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="filter-set">
          Apply filters
          <div>
            Budget
            <SliderFilter />
          </div>
          <div>
            Category
            <CategoryFilter />
          </div>
          <div>
            Destination
            <DestinationFilter
              locationDetails={this.state.locationDetails}
              countries={this.state.countries}
            />
          </div>
        </div>
      </div>
    );
  }
}
