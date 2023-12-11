import { ChangePasswordForm } from '@/components/settings/change-password-form';
import { Separator } from '@/components/ui/separator';
import { TypographyMuted } from '@/components/ui/typography-muted';

export default function SettingsSecurityPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='heading text-xl'>Безопасность</h2>
        <TypographyMuted>
          Обновите настройки безопасности своей учетной записи. Установите электронный адрес и пароль.
        </TypographyMuted>
      </div>
      <Separator />
      <ChangePasswordForm />
    </div>
  );
}
