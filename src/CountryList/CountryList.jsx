/* eslint-disable react/prop-types */
const CountryList = ({items, filterVal}) => (
    <ul>
      {items.filter((item)=>{
        return filterVal.toLowerCase() === ''
          ? null
          : item.name.common.toLowerCase().includes(filterVal)
      }).map(country => (
        <li key = {country.cca2}>
          <h2>{country.name.common}</h2>
          <img src={country.flags.svg} alt={country.flags.alt} width={200}></img>
          <p>Official name: {country.name.official}</p>
          <p>Capital: {country.capital}</p>
        </li>
      ))} 
    </ul>
  )
export default CountryList