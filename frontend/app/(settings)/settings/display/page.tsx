import { DisplayForm } from '@/components/settings/display-form';
import { Separator } from '@/components/ui/separator';
import { TypographyMuted } from '@/components/ui/typography-muted';

export default function SettingsDisplayPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Дисплей</h3>
        <TypographyMuted>
          Включайте и отключайте элементы, чтобы контролировать то, что отображается в приложении.
        </TypographyMuted>
      </div>
      <Separator />
      <DisplayForm />
    </div>
  );
}
