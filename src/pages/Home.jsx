import useStore from '../state/cart';


function Home() {
    const {user} = useStore();

    return (
        <div>
            <h1>Welcome to Sportsman's Retreat</h1>
                <div>
                    <img src="store.jpg" alt="store" />
                </div>
            <p>Welcome to Sportsman's Retreat, your premier online destination for top-tier outdoor hunting, fishing, and camping gear. Whether you are tracking big game, casting a line, or setting up basecamp under the stars, we supply the rugged, reliable equipment you need to elevate your next adventure.</p>
            
        </div>
    )
}


export default Home;