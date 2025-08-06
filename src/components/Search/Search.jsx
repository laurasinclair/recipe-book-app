import styles from "./Search.module.css";
function Search({ search, setSearch }) {
  return (
    <div className={styles.searchContainer}>
      <div>
        <span>Search</span>
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
