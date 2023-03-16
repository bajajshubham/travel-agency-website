import React, { Component } from "react";
import DestinationSearchFilter from "./DestinationSearchFilter";
import { TextField, InputAdornment } from "@mui/material";

// const countries = [{ label: "Andorra" }, { label: "United Arab Emirates" }];
// const countries = [];
export default class DestinationFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationDetails: [],
      countries: [],
      cities: [],
      selectedCity: "",
      inputRadius: null,
    };

    this.onCountryChange = this.onCountryChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.setRadius = this.setRadius.bind(this);
  }
  componentDidMount() {
    this.setState({
      locationDetails: this.props.locationDetails,
      countries: this.props.countries,
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      locationDetails: nextProps.locationDetails,
      countries: nextProps.countries,
    });
  }

  onCountryChange(country) {
    this.setState({ cities: [] });
    if (country) {
      const labels = this.state.locationDetails.filter(
        (item) => item.label === country.label
      );
      const cities = labels.map((item) => {
        return item.city;
      });
      const uniqueCities = [...new Set(cities)];
      debugger;
      this.setState({
        cities: uniqueCities.map((city) => {
          return { label: city };
        }),
      });
    }
  }
  onCityChange(city) {
    if (city) {
      this.setState({ selectedCity: city.label });
    }
  }

  setRadius(radius) {
    this.setState({ inputRadius: radius });
  }

  render() {
    return (
      <div>
        <DestinationSearchFilter
          onValueChange={this.onCountryChange}
          id="country-select-demo"
          data={this.state.countries}
          label="Choose a country"
        />
        <DestinationSearchFilter
          onValueChange={this.onCityChange}
          id="city-select-demo"
          data={this.state.cities}
          label="Choose a city"
        />
        <TextField
          id="radius-number"
          label="Radius"
          variant="standard"
          type="number"
          onChange={(e) => this.setRadius(e.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="start">km</InputAdornment>,
          }}
        />
      </div>
    );
  }
}
