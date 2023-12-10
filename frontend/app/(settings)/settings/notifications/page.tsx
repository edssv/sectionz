import { notFound } from 'next/navigation';

import client from '@/apollo/apollo-client';
import { NotificationsForm } from '@/components/settings/notifications-form';
import { Separator } from '@/components/ui/separator';
import { TypographyMuted } from '@/components/ui/typography-muted';
import type { MeQuery } from '@/gql/types';
import { MeDocument } from '@/gql/types';
import { getApiUserToken } from '@/lib/session';

export default async function SettingsNotificationsPage() {
  const token = await getApiUserToken();
  const { data } = await client.query<MeQuery>({
    query: MeDocument,
    context: { headers: { authorization: `bearer ${token}` } },
    fetchPolicy: 'no-cache'
  });

  if (!data.me) {
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
          socialEmails: data.me.socialEmails,
          communicationEmails: data.me.communicationEmails,
          marketingEmails: data.me.marketingEmails
        }}
      />
    </div>
  );
}
