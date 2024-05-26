interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
  classname?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  searchTerm,
  classname
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={`flex justify-end items-center ${classname}`}>
      <input
        type="text"
        placeholder="Search "
        value={searchTerm}
        onChange={handleSearch}
        className=" w-full sm:w-3/12 px-4 py-2 border border-meta-3 bg-meta-4 rounded-md outline-none"
      />
    </div>
  );
};
