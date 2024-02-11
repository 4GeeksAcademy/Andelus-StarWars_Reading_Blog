import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DetailscardStarship = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const imgUrl = "https://starwars-visualguide.com/assets/img/starships/";


    useEffect(async () => {

        const fetchData = async () => {
            await actions.getStarshipDetail(params.idStarship);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Details</h1>
            <Link className="navbar-brand" to="/characters">To Starships Go Back</Link>
            <div className="container bg-dark">
                <div className="card mb-3  bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <img src={`${imgUrl}${params.idStarship}.jpg`} className="card-img-top w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-5 col-lg-6 col-xl-7">
                            <div className="card-body">


                            {
                                    store.detailStarship.result ? (
                                        <>
                                            <h1>{store.detailStarship.result.properties.name}</h1>
                                            <p><strong>Model: {store.detailStarship.result.properties.model} </strong></p>
                                            <p><strong>Starship Class: </strong> {store.detailStarship.result.properties.starship_class} </p>
                                            <p><strong>Manufacturer: </strong> {store.detailStarship.result.properties.manufacturer}</p>
                                            <p><strong>Cost in Credits: </strong> {store.detailStarship.result.properties.cost_in_credits}</p>
                                            <p><strong>Lenght: </strong> {store.detailStarship.result.properties.length}</p>
                                            <p><strong>Crew: </strong> {store.detailStarship.result.properties.crew}</p>
                                            <p><strong>Passengers: </strong> {store.detailStarship.result.properties.passengers} </p>
                                        </>
                                    )
                                    :
                                    (
                                        <h1>Theres nothing here for you...</h1>
                                    )

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
