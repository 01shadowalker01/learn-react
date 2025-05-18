
interface SearchInputFieldProps {
    id: string;
    label: string;
    placeholder: string;
}

const SearchInputField = ({ id, label, placeholder }: SearchInputFieldProps) => {
    return (
        <div className="flex items-center gap-2">
            <label htmlFor={id} className="text-white text-sm">{label}</label>
            <input
                id={id}
                placeholder={placeholder}
                className="bg-secondary2 rounded-full text-sm text-secondary2-foreground py-1.5 px-2 w-full" />
        </div>
    )
}

export default SearchInputField