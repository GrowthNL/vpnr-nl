import { getAllAffiliateLinks } from '@/lib/kv-affiliates'
import AffiliatesForm from './AffiliatesForm'

export const dynamic = 'force-dynamic'

export default async function AdminAffiliatesPage() {
  const links = await getAllAffiliateLinks()
  const kvReady = Boolean(process.env.KV_REST_API_URL)

  return <AffiliatesForm initialLinks={links} kvReady={kvReady} />
}
