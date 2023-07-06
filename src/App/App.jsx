/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import CountryList from "../CountryList/CountryList";
import SearchFilter from "../SearchFilter/SearchFilter";

const baseURL = "https://restcountries.com/v3.1/all";

export default class App extends Component {
  state = {
    countries: [],
    filter: "",
    isLoaded: false,
    error: null,
  };

  fetchCountries = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  componentDidMount = async () => {
    this.setState({
      isLoaded: true,
    });
    try {
      const countries = await this.fetchCountries(baseURL);
      this.setState({ countries });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoaded: false });
    }
  };

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };

  render() {
    const { countries, filter, isLoaded, error } = this.state;
    return (
      <>
        {error && <p>Error: {error.message}</p>}
        {isLoaded ? (
          <p>Loading...</p>
        ) : (
          <>
            <SearchFilter filterChange={this.handleFilterChange} />
            {countries.length > 0 && (
              <CountryList items={countries} filterVal={filter} />
            )}
          </>
        )}
      </>
    );
  }
}
