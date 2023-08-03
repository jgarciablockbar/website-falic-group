import getHouse from "@/app/lib/getHouseInfo";


interface Params {
  params: {
    hid: string;
  }
}

const House = ({ params: { hid }}: Params) => {
  const house = getHouse(hid);
  return <main>
    {house ? <section>
      <div>
        <h1>{house.title}</h1>
        <hr />
        <p>house.desc</p>
      </div>
    </section> :
    <div>Nothing to see here</div>}
  </main>
}

export default House;
