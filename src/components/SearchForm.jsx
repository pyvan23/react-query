import { useMutation } from '@tanstack/react-query';

export const SearchForm = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [mutate] = useMutation(searchTerm => fetch(`/search?q=${searchTerm}`));

    const handleSubmit = event => {
        event.preventDefault();
        mutate(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
}
