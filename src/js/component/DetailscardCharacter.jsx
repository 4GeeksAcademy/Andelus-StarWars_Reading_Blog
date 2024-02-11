import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DetailscardCharacter = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

    useEffect(async () => {
    
        const fetchData = async () => {
            await actions.getCharactersDetail(params.idCharacter);
            if(store.detailCharacter){
                console.log("Name -> ",store.detailCharacter.result.properties.name);
            }
        }

        fetchData();

    }, []);




    return (
        <div>
            <h1>Details</h1>
            <Link className="navbar-brand" to="/characters">To Characters Go Back</Link>
            <div className="container bg-dark">
                <div className="card mb-3  bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <img src={`${imgUrl}${params.idCharacter}.jpg`} className="card-img-top w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-5 col-lg-6 col-xl-7">
                            <div className="card-body">


                                {
                                    store.detailCharacter.result ? (
                                        <>
                                            <h1>Name</h1>
                                            <h1>{store.detailCharacter.result.properties.name}</h1>
                                            <p><strong>Height: {store.detailCharacter.result.properties.height} </strong></p>
                                            <p><strong>Mass: </strong> {store.detailCharacter.result.properties.mass} </p>
                                            <p><strong>Hair color: </strong> {store.detailCharacter.result.properties.hair_color}</p>
                                            <p><strong>Skin color: </strong> {store.detailCharacter.result.properties.skin_color}</p>
                                            <p><strong>Eye color: </strong> {store.detailCharacter.result.properties.eye_color}</p>
                                            <p><strong>Birth year: </strong> {store.detailCharacter.result.properties.birth_year}</p>
                                            <p><strong>Gender: </strong> {store.detailCharacter.result.properties.gender} </p>
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