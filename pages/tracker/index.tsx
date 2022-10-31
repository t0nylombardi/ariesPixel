import React from 'react'
import { PrismaClient } from "@prisma/client";
import { json } from 'stream/consumers';

const prisma = new PrismaClient();


const Tracker = ({pixels}:any) => {
  return (
    <div>
      <main className="container grid place-items-center">
        <h1 className="content-center text-6xl font-normal leading-normal mt-0 mb-2">Tracker</h1>
      </main>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <table className="table  table-compact table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>IP Address</th>
                <th>Campaign</th>
                <th>Content Type</th>
                <th>City</th>
                <th>State</th>
                <th>User Agent</th>
              </tr>
            </thead>
            <tbody>
              {
                pixels.map((pixel:any) => {
                  return (
                    <tr key={pixel.id}>
                      <td></td>
                      <td>{pixel.ip_address}</td>
                      <td>{pixel.campaign}</td>
                      <td>{pixel.content_type}</td>
                      <td>{pixel.city}</td>
                      <td>{pixel.state}</td>
                      <td>{pixel.user_agent}</td>
                    </tr>
                  )
                }
                )
              }
            </tbody>
          </table>
    
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps = async () => {
  // Get all foods in the "food" db
  const pixels = await prisma.pixel.findMany();
  return {
    props: {
      pixels
    },
  };
}

export default Tracker