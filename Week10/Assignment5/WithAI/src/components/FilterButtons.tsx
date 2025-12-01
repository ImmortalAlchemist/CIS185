import { FilterType } from '../types/task';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

function FilterButtons({ currentFilter, onFilterChange, taskCounts }: FilterButtonsProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex gap-2 mb-6 border-b border-slate-200 pb-4">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currentFilter === value
              ? 'bg-slate-800 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {label}
          <span className="ml-2 text-sm opacity-75">
            ({taskCounts[value]})
          </span>
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
