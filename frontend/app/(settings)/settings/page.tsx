import { notFound } from 'next/navigation';

import client from '@/apollo/apollo-client';
import { ProfileForm } from '@/components/settings/profile-form';
import { Separator } from '@/components/ui/separator';
import { TypographyMuted } from '@/components/ui/typography-muted';
import type { MeQuery } from '@/gql/types';
import { MeDocument } from '@/gql/types';
import { getApiUserToken } from '@/lib/session';

export default async function SettingsAccountPage() {
  const token = await getApiUserToken();
  const { data } = await client.query<MeQuery>({
    query: MeDocument,
    context: { headers: { authorization: `bearer ${token}` } },
    partialRefetch: true
  });

  if (!data.me) {
    return notFound();
  }

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='heading text-xl'>Профиль</h2>
        <TypographyMuted>Именно так другие будут видеть вас на сайте.</TypographyMuted>
      </div>
      <Separator />
      <ProfileForm data={{ profileName: data.me.profileName, dob: data.me.dob, gender: data.me.gender }} />
    </div>
  );
}
