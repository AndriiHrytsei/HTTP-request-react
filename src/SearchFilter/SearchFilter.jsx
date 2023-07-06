/* eslint-disable react/prop-types */
const SearchFilter = ({ filterChange }) => (
  <>
    <label htmlFor="filter">Search countries:</label>
    <input type="text" name="filter" id="filter" onChange={filterChange} />
  </>
);
export default SearchFilter;
