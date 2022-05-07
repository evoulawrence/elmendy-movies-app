import React from 'react'

type Props = {
    search: string
    setSearch: (value: string) => void
}

const SearchBox: React.FC<Props> = ({ search, setSearch }) => {
    return (
        <div>
            <input
                placeholder="Type for searcing..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBox