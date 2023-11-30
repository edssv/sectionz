import { Separator } from '@/components/ui/separator';
import { TypographyMuted } from '@/components/ui/typography-muted';

export default function SettingsSecurityPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Безопасность</h3>
        <TypographyMuted>
          Обновите настройки безопасности своей учетной записи. Установите электронный адрес и пароль.
        </TypographyMuted>
      </div>
      <Separator />
    </div>
  );
}
