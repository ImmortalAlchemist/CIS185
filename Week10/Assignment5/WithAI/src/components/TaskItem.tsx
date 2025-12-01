import { Task } from '../types/task';
import { Trash2, Circle, CheckCircle2 } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="group flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all border border-slate-200">
      <button
        onClick={() => onToggle(task.id)}
        className="flex-shrink-0 transition-all hover:scale-110"
      >
        {task.completed ? (
          <CheckCircle2 size={24} className="text-green-600" />
        ) : (
          <Circle size={24} className="text-slate-400 hover:text-slate-600" />
        )}
      </button>

      <span
        className={`flex-1 transition-all ${
          task.completed
            ? 'text-slate-400 line-through'
            : 'text-slate-800'
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:scale-110 transform"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}

export default TaskItem;
