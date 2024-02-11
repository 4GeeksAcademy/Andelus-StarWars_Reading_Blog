import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DetailscardPlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const imgUrl = "https://starwars-visualguide.com/assets/img/planets/";

    useEffect(() => {
        const fetchData = async () => {
            await actions.getPlanetsDetail(params.idPlanet);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Details</h1>
            <Link className="navbar-brand" to="/planets">To Planets Go Back</Link>
            <div className="container bg-dark">
                <div className="card mb-3  bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <img src={`${imgUrl}${params.idPlanet}.jpg`} className="card-img-top w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-5 col-lg-6 col-xl-7">
                            <div className="card-body">


                            {
                                    store.detailPlanet.result ? (
                                        <>
                                            <h1>{store.detailPlanet.result.properties.name}</h1>
                                            <p><strong>Diameter: {store.detailPlanet.result.properties.diameter} </strong></p>
                                            <p><strong>Rotation Period: </strong> {store.detailPlanet.result.properties.rotation_period} </p>
                                            <p><strong>Terrain: </strong> {store.detailPlanet.result.properties.terrain}</p>
                                            <p><strong>Orbital Period: </strong> {store.detailPlanet.result.properties.orbital_period}</p>
                                            <p><strong>Gravity: </strong> {store.detailPlanet.result.properties.gravity}</p>
                                            <p><strong>Population: </strong> {store.detailPlanet.result.properties.population}</p>
                                            <p><strong>Climate: </strong> {store.detailPlanet.result.properties.climate} </p>
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
