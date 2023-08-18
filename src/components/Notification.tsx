interface Props {
  action: 'add' | 'remove'
}

export function Notification ({ action }: Props) {
  return (
    <p className="fixed bottom-10 z-20 bg-black px-4 py-2 text-2xl font-system rounded-xl font-bold left-1/2 -translate-x-1/2">
      {action === 'add' ? 'Added to reading list.' : 'Removed from reading list.'}
    </p>
  )
}
