'use client'

import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hook/use-api-mutation'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

interface NewBoardButtonProps {
  orgId: string
  disabled?: boolean
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create)

  const onClick = () => {
    mutate({
      orgId,
      title: 'Untitled'
    })
      .then(id => {
        toast.success('Board created')
        // push route
      })
      .catch(() => toast.error('Failed to created board'))
  }
  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        ' col-span-1 bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6 aspect-[100/127]',
        (disabled || pending) &&
          'opacity-75 hover:bg-blue-600 cursor-not-allowed'
      )}
    >
      <div />
      <Plus className='h-12 w-12 text-white' />
      <p className='text-xs text-white font-light'>New board</p>
    </button>
  )
}
