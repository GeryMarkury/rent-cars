import css from "./Home.module.scss";

const Home = () => {
    return (
        <div className={css.homeContainer}>
            <h1 className={css.homeTitle}>Welcome to Rent Cars!</h1>
            <div className={css.homeAbout}><p>Welcome to our Ukrainian car rental company, where we present you with a curated selection of our finest automobiles. Explore our "Catalog" page to discover the array of vehicles we have to offer. For a deeper dive into each car's specifications and features, simply click on the "Learn more" button. And if you find cars that pique your interest, don't forget to add them to your "Favorites" list for easy reference. Your journey with us begins here!</p></div>
        </div>
    )
};

export default Home;