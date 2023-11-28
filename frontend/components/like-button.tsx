'use client';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { buttonVariants, type ButtonProps } from './ui/button';
import { useToast } from './ui/use-toast';

interface LikeButtonProps extends ButtonProps {
  isLike: boolean;
  setLike: () => void;
}

export function LikeButton({ className, isLike, setLike, size, variant, ...props }: LikeButtonProps) {
  const { toast } = useToast();

  const Icon = isLike ? Icons.heartFilled : Icons.heart;

  const handleClick = () => {
    setLike();
    toast({
      description: isLike
        ? 'Удалено из плейлиста "Понравившаяся музыка".'
        : 'Добавлено в плейлист "Понравившаяся музыка".'
    });
  };

  return (
    <button className={cn(buttonVariants({ variant, size }), className)} onClick={handleClick} {...props}>
      <Icon className='h-4 w-4' />
    </button>
  );
}
