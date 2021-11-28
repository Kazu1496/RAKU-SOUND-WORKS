import { createClient } from '@/lib/microcms/client';
import { Profile, Work } from '@/lib/microcms/model';

type EndpointTypeMap = {
  profile: Profile;
  works: Work;
};

export const client = createClient<EndpointTypeMap>({
  serviceId: process.env.MICROCMS_SERVICE_ID,
  apiKey: process.env.MICROCMS_API_KEY,
});
