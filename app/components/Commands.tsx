import React from 'react'
import TableCommands from './tableCommands'

const Commands = () => {
  return (
    <section className='space-y-6 flex flex-col items-start align-top min-h-screen max-w-6xl'>  
      <h1 className='scroll-m-20 text-center font-sans text-4xl font-extrabold tracking-tight text-balance text-white'>
        Claude Commands
      </h1>
      <p className='leading-8 text-lg text-neutral-200 max-w-4xl space-y-2'>
        <span className='block'>Commands control Claude Code from inside a session. They provide a quick way to switch models, manage permissions, clear context, run a workflow, and more.</span>
        
        <span className='block'>Type <span className='inline-block px-3 py-1.5 mx-1 bg-neutral-800 border border-neutral-600 rounded-md font-mono text-sm text-amber-50 hover:bg-neutral-700 transition-colors'>
          /
        </span> to see every command available to you, or type <span className='inline-block px-3 py-1.5 mx-1 bg-neutral-800 border border-neutral-600 rounded-md font-mono text-sm text-amber-50 hover:bg-neutral-700 transition-colors'>
          / command
        </span> followed by letters to filter.</span>
        
        <span className='block'>A command is only recognized at the start of your message. Text that follows the command name is passed to it as arguments.</span>
      </p>

      <h1 className='scroll-m-20 text-center font-sans text-2xl font-extrabold tracking-tight text-balance text-white'>Essential Commands</h1>
        <div className='space-y-2'>
            <TableCommands/>
        </div>
    <p className='leading-8 text-lg text-neutral-200 max-w-4xl space-y-2'>
        Claude commands provide a powerful way to streamline development workflows, manage context, and improve productivity while working inside the Claude CLI environment
    </p>
    </section>
  )
}

export default Commands