import React, { Component } from "react";
import CategoryFilter from "./CategoryFilter";
import SliderFilter from "./SliderFilter";
import "./Filters.css";
import DestinationFilter from "./DestinationFilter/DestinationFilter";
import { fetchMockData } from "../transfer";
import TripCards from "../../components/Trips/TripCards";
import { Typography } from "@mui/material";
import * as geolib from "geolib";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationMock: [], // all data
      locationDetails: [], //location data
      countries: [],
      filterParams: {
        minBudget: 100,
        maxBudget: 1000,
        lat: 0,
        long: 0,
        radius: 0,
        categories: {
          natureChecked: true,
          adventureChecked: true,
          historicalChecked: true,
          religiousChecked: true,
        },
      },
      filteredData: [],
    };
    this.getBudgetValues = this.getBudgetValues.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.setFilteredData = this.setFilteredData.bind(this);
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
        image: item.image,
      };
    });

    const label = locationDetails.map((item) => item.label);
    const uniqueLabels = [...new Set(label)];
    const countries = uniqueLabels.map((item) => {
      return { label: item };
    });

    this.setState(
      {
        locationMock: locationMockData, //all data
        locationDetails: locationDetails, //location data
        countries: countries,
      },
      () => this.setFilteredData()
    );
  }

  setFilteredData() {
    let filterParams = this.state.filterParams;
    //on budget
    const filteredBudgetData = this.state.locationMock.filter((item) => {
      return (
        item.price >= filterParams.minBudget &&
        item.price <= filterParams.maxBudget
      );
    });
    //location
    let filterLocationData = filteredBudgetData;
    if (filterParams.lat && filterParams.long) {
      // debugger;
      filterLocationData = filteredBudgetData.filter((item) => {
        return geolib.isPointWithinRadius(
          { latitude: item.lat, longitude: item.long },
          { latitude: filterParams.lat, longitude: filterParams.long },
          Number(filterParams.radius) * 1000
        );
      });
    }
    this.setState({ filteredData: filterLocationData });
  }

  getBudgetValues(values) {
    this.setState(
      (prevState) => ({
        filterParams: {
          ...prevState.filterParams,
          minBudget: values[0],
          maxBudget: values[1],
        },
      }),
      () => this.setFilteredData()
    );
  }

  getCategories(values) {
    this.setState(
      (prevState) => ({
        filterParams: { ...prevState.filterParams, categories: { ...values } },
      }),
      () => this.setFilteredData()
    );
  }

  getCoordinates(values) {
    this.setState(
      (prevState) => ({
        filterParams: {
          ...prevState.filterParams,
          lat: values.lat,
          long: values.long,
          radius: values.radius,
        },
      }),
      () => this.setFilteredData()
    );
  }

  render() {
    return (
      <div className="filter-wrapper">
        <div className="filter-set">
          <Typography sx={{ margin: "0" }} variant="h4" gutterBottom>
            Apply filters
          </Typography>
          <div>
            Budget
            <SliderFilter
              lang={this.props.lang}
              sendValues={this.getBudgetValues}
            />
          </div>
          <div>
            Category
            <CategoryFilter
              lang={this.props.lang}
              sendCategories={this.getCategories}
            />
          </div>
          <div>
            Destination
            <DestinationFilter
              lang={this.props.lang}
              sendCoordinates={this.getCoordinates}
              locationDetails={this.state.locationDetails}
              countries={this.state.countries}
            />
          </div>
        </div>
        <div className="filter-results">
          <Typography sx={{ margin: "0" }} variant="h4" gutterBottom>
            Places
          </Typography>
          <div className="place-results">
            {this.state.filteredData.map((item) => {
              return (
                <TripCards
                  key={item.id}
                  city={item.city}
                  price={`€${item.price}`}
                  image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
