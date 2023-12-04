import { notFound } from 'next/navigation';

import { NotificationsForm } from '@/components/settings/notifications-form';
import { Separator } from '@/components/ui/separator';
import { TypographyMuted } from '@/components/ui/typography-muted';
import { getApiUserToken } from '@/lib/session';
import { UserService } from '@/services/user/user.service';

export default async function SettingsNotificationsPage() {
  const jwt = await getApiUserToken();

  if (!jwt) {
    return notFound();
  }

  const me = await UserService.getMe(jwt);

  if (!me) {
    return notFound();
  }

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Уведомления</h3>
        <TypographyMuted>Настройте способ получения уведомлений.</TypographyMuted>
      </div>
      <Separator />
      <NotificationsForm
        data={{
          socialEmails: me.socialEmails,
          communicationEmails: me.communicationEmails,
          marketingEmails: me.marketingEmails
        }}
      />
    </div>
  );
}
