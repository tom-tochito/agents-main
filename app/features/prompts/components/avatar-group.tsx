import { cn } from '~/core/lib/utils'

interface User {
  id: string
  name: string
  avatar?: string
}

interface AvatarGroupProps {
  users: User[]
  max?: number
  className?: string
}

export function AvatarGroup({ users, max = 4, className }: AvatarGroupProps) {
  const displayUsers = users.slice(0, max)
  const remainingCount = users.length - max

  const getAvatarBgColor = (index: number): string => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500'
    ]
    return colors[index % colors.length]
  }

  if (users.length === 0) {
    return null
  }

  return (
    <div className={cn("flex -space-x-2", className)}>
      {displayUsers.map((user, index) => (
        <div
          key={user.id}
          className={cn(
            "w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-medium ring-2 ring-white",
            getAvatarBgColor(index)
          )}
          title={user.name}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium ring-2 ring-white">
          +{remainingCount}
        </div>
      )}
    </div>
  )
}