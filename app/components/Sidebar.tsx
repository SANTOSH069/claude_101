
import { Command, Lightbulb, Workflow, FileText } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { label: 'Commands', icon: Command, id: 'commands' },
    { label: 'Skills', icon: Lightbulb, id: 'skills' },
    { label: 'Workflows', icon: Workflow, id: 'workflows' },
    { label: 'File Structure', icon: FileText, id: 'file-structure' },
  ];

  return (
    <div className='lg:fixed right-0 top-0 h-screen w-64 bg-neutral-900/95 backdrop-blur-sm border-l border-neutral-700 overflow-y-auto pt-20 px-6'>
      <nav className='space-y-1'>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className='flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-300 hover:text-amber-50 hover:bg-neutral-800/50 transition-all duration-200 group'
            >
              <Icon className='w-5 h-5 text-neutral-400 group-hover:text-amber-50 transition-colors' />
              <span className='font-medium text-sm tracking-tight'>{item.label}</span>
            </a>
          );
        })}
      </nav>
      <div className=''>

      </div>
    </div>
  );
};

export default Sidebar