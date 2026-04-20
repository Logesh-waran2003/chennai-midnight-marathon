import PageHeader from '../components/PageHeader'
import { BODY_TEXT, WHITE, ARCHIVO } from '../components/constants'

export default function Terms() {
  return (
    <>
      <PageHeader title="Registration Terms" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
            Content for this page will be populated from the reference site data.
          </p>
        </div>
      </section>
    </>
  )
}
