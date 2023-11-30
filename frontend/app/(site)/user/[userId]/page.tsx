import { notFound } from 'next/navigation';

import { UserHeader } from '@/components/user/header';
import { UserService } from '@/services/user/user.service';

interface UserPageProps {
  params: {
    userId: string;
  };
}

async function getUserFromParams(params: UserPageProps['params']) {
  const userId = Number(params?.userId);
  const data = await UserService.getUser(userId);

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function UserPage({ params }: UserPageProps) {
  const user = await getUserFromParams(params);

  return (
    <div className='space-y-8 md:space-y-12'>
      <UserHeader user={user} />
      <div className='space-y-8' />
    </div>
  );
}
