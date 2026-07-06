



const TableCommands = () => {

    const CommandsList = [
    {
        command: "/rewind",
        description: "Auto-checkpoints (saved on every prompt) make this great for experimental edits. Saves tokens in long sessions. Beginners should use 'rewind code only' liberally for safe experimentation",
        Example: "Esc+Esc to show menu. Choose to rewind code only or conversation only",
        id: 1
    },
    {
        command: "/insights",
        description: "Generates an HTML report analyzing your coding habits and workflow patterns. Suggests Skills and Hooks to optimize development efficiency",
        Example: "/insights saves report to ~/.claude/usage-data/report.html",
        id: 2
    },
    {
        command: "/help",
        description: "Displays all available commands and hidden features. Useful starting point for beginners exploring the CLI",
        Example: "/help",
        id: 3
    },
    {
        command: "/context",
        description: "Displays token consumption and context usage visualization. Helps prevent token overflow in long conversations",
        Example: "/context",
        id: 4
    },
    {
        command: "/compact",
        description: "Switches responses to concise mode to save tokens and improve debugging focus",
        Example: "/compact or /compact focus on errors",
        id: 5
    },
    {
        command: "/init",
        description: "Initializes a new project by creating CLAUDE.md and other setup files",
        Example: "/init",
        id: 6
    },
    {
        command: "/usage",
        description: "Shows subscription plan usage and current rate limit status",
        Example: "/usage",
        id: 7
    },
    {
        command: "/clear",
        description: "Clears the current conversation context for starting fresh tasks",
        Example: "/clear",
        id: 8
    },
    {
        command: "/agents",
        description: "Manages sub-agents for parallel processing of complex tasks",
        Example: "/agents",
        id: 9
    },
    {
        command: "/install-github-app",
        description: "Installs the GitHub App to automate PR reviews and CI/CD workflows",
        Example: "/install-github-app",
        id: 10
    },
    {
        command: "/cost",
        description: "Displays token usage statistics and session-level cost tracking",
        Example: "/cost",
        id: 11
    },
    {
        command: "/export",
        description: "Exports the current conversation to a file or clipboard for saving and sharing",
        Example: "/export conversation.md",
        id: 12
    },
    {
        command: "/review",
        description: "Requests a code review for checking code quality before creating PRs",
        Example: "/review",
        id: 13
    },
    {
        command: "/pr_comments",
        description: "Displays pull request comments from integrated GitHub repositories",
        Example: "/pr_comments",
        id: 14
    },
    {
        command: "/doctor",
        description: "Runs environment diagnostics to detect dependency and configuration issues",
        Example: "/doctor",
        id: 15
    }
];

  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-8'>
      <div className='rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950/50'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-neutral-800 bg-neutral-900/50'>
              <th className='px-6 py-4 text-left text-sm font-semibold text-neutral-100'>
                Command
              </th>
              <th className='px-6 py-4 text-left text-sm font-semibold text-neutral-100'>
                Description
              </th>
              <th className='px-6 py-4 text-left text-sm font-semibold text-neutral-100'>
                Example
              </th>
            </tr>
          </thead>
          <tbody>
            {CommandsList.map((cmd) => (
              <tr 
                key={cmd.id}
                className='border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors'
              >
                <td className='px-6 py-4 text-sm'>
                  <span className='inline-block px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-md font-mono text-amber-50 hover:bg-amber-500/20 transition-colors'>
                    {cmd.command}
                  </span>
                </td>
                <td className='px-6 py-4 text-sm text-neutral-300'>
                  {cmd.description}
                </td>
                <td className='px-6 py-4 text-sm'>
                  <code className='px-2 py-1 bg-neutral-800/50 border border-neutral-700 rounded text-neutral-200 font-mono text-xs'>
                    {cmd.Example}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableCommands