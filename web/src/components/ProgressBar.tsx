interface ProgressBarProps {
    progress: number
}


export function ProgressBar({progress}: ProgressBarProps) {
    
    const progressStyles = {
        width: `${progress}%`
    }


    return (
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <div
             className="h-3 rounded-xl bg-violet-600 transition-all"
             role='progressbar'
             aria-label='Progresso de hábitos completados nesse dia'
             aria-valuenow={progress}
             style={progressStyles}
            >

            </div>
        </div>
    )
}