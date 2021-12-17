import Head from 'next/head'
import { Grid, Column, Row } from "../components/Grid/index.tsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtual Grid</title>
      </Head>

      <main>
        <Grid gap={5}>
          <Column mobile={12} tablet={6} desktop={4}>1</Column>
          <Column mobile={12} tablet={6} desktop={4}>2</Column>
          <Column mobile={12} tablet={6} desktop={4}>3</Column>
          <Row>
            <Column mobile={2} desktop={6}>10</Column>
            <Column mobile={10} desktop={6}>11</Column>
          </Row>
        </Grid>
      </main>
    </div>
  )
}
