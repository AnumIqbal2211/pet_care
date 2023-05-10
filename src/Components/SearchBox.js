function SearchBox() {
  return (
    <div id="search">
      <button type="button" class="close">
        ×
      </button>
      <form>
        <input type="search" value="" placeholder="SEARCH KEYWORD(s)" />
        <button type="submit" class="btn theme-btn">
          <i class="fa fa-search"></i> Search
        </button>
      </form>
    </div>
  );
}
export default SearchBox;
