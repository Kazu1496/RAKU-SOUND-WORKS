import { createClient } from '@/lib/microcms/client';
import { Profile, Work } from '@/lib/microcms/model';

type EndpointTypeMap = {
  profile: Profile;
  works: Work;
};

export const client = createClient<EndpointTypeMap>({
  serviceId: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_ID || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
});
