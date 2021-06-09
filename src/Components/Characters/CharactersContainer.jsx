import React from 'react';
import axios from "axios";
import Characters from "./Characters";
import {connect} from "react-redux";
import {setCharacters, setCurrentPage, setPageCount, setSpecies, setStatus} from "../../Redux/charactersReducer";


class CharactersFun extends React.Component {

    componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(resolve => {
                debugger
                this.props.setCharacters(resolve.data.results)
                this.props.setCurrentPage(this.props.currentPage)
                this.props.setPageCount(resolve.data.info.pages)
            })
    }

    filterSpecies = (species) => {
        setCurrentPage(1)
        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}&species=${species}`)
            .then(resolve => {
                this.props.setCharacters(resolve.data.results)
                this.props.setPageCount(resolve.data.info.pages)
                this.props.setSpecies(species)
            })
    }
    filterStatus = (status) => {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}&status=${status}`)
                .then(resolve => {
                    this.props.setCharacters(resolve.data.results)
                    this.props.setPageCount(resolve.data.info.pages)
                    this.props.setStatus(status)
                })}



    onChangeNumber = (pageNumber) => {
        // this.props.setCurrentPage(pageNumber)
        // let page = Math.ceil(pageNumber / 2)
        axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
            .then(resolve => {
                this.props.setCharacters(resolve.data.results)
                this.props.setCurrentPage(pageNumber)
                // if (pageNumber % 2 !== 0) {
                //     this.currentCharacters = resolve.data.results.slice(0, 10)
                //     this.props.setCharacters(this.currentCharacters)
                // } else this.currentCharacters = resolve.data.results.slice(10, 20)
                // this.props.setCharacters(this.currentCharacters)
            })
    }


    render() {
        return <>
            <Characters totalCharactersCount={this.props.totalCharactersCount}
                        currentPage={this.props.currentPage}
                        characters={this.props.characters}
                        onChangeNumber={this.onChangeNumber}
                        filterSpecies={this.filterSpecies}
                        filterStatus={this.filterStatus}
                        pageCount={this.props.pageCount}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        characters: state.charactersPage.characters,
        totalCharactersCount: state.charactersPage.totalCharactersCount,
        currentPage: state.charactersPage.currentPage,
        pageCount: state.charactersPage.pageCount,
        species: state.charactersPage.species,
        status: state.charactersPage.status
    }
}


const CharactersContainer = connect(mapStateToProps, {
    setCharacters,
    setCurrentPage,
    setPageCount,
    setSpecies,
    setStatus
})(CharactersFun)

export default CharactersContainer;