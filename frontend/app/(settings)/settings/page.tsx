import { notFound } from 'next/navigation';

import { ProfileForm } from '@/components/settings/profile-form';
import { Separator } from '@/components/ui/separator';
import { TypographyMuted } from '@/components/ui/typography-muted';
import { getApiUserToken } from '@/lib/session';
import { UserService } from '@/services/user/user.service';

export default async function SettingsAccountPage() {
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
        <h3 className='text-lg font-medium'>Профиль</h3>
        <TypographyMuted>Именно так другие будут видеть вас на сайте.</TypographyMuted>
      </div>
      <Separator />
      <ProfileForm data={{ profile_name: me.profileName, dob: me.dob, gender: me.gender }} />
    </div>
  );
}
