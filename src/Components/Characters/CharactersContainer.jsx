import React from 'react';
import axios from "axios";
import Characters from "./Characters";
import {connect} from "react-redux";
import {setLoadingStatus} from "../../Redux/commonReducer"
import {
    setCharacters,
    setCurrentPage,
    setPageCount,
    setSpecies,
    setStatus,
    setGender,
    setInformation,
    setCharacterWindowOpened
} from "../../Redux/charactersReducer";


class CharactersFun extends React.Component {

    componentDidMount() {
        this.props.setLoadingStatus('loading')
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(resolve => {
                this.props.setCharacters(resolve.data.results)
                this.props.setCurrentPage(this.props.currentPage)
                this.props.setPageCount(resolve.data.info.pages)
                this.props.setLoadingStatus('successes')
            })
    }

    filterSpecies = (species) => {
        this.props.setCurrentPage(1)
        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}&species=${species}&status=${this.props.status}&gender=${this.props.gender}`)
            .then(resolve => {
                this.props.setCharacters(resolve.data.results)
                this.props.setPageCount(resolve.data.info.pages)
                this.props.setSpecies(species)
            })
    }
    filterStatus = (status) => {
        this.props.setCurrentPage(1)
        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}&status=${status}&species=${this.props.species}&gender=${this.props.gender}`)
            .then(resolve => {
                this.props.setCharacters(resolve.data.results)
                this.props.setPageCount(resolve.data.info.pages)
                this.props.setStatus(status)
            })
    }

    filterGender = (gender) => {
        this.props.setCurrentPage(1)
        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}&status=${this.props.status}&species=${this.props.species}&gender=${gender}`)
            .then(resolve => {
                this.props.setCharacters(resolve.data.results)
                this.props.setPageCount(resolve.data.info.pages)
                this.props.setGender(gender)
            })
    }


    onChangeNumber = (pageNumber) => {
        this.props.setLoadingStatus('loading')
        axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${this.props.status}&species=${this.props.species}&gender=${this.props.gender}`)
            .then(resolve => {
                this.props.setCharacters(resolve.data.results)
                this.props.setCurrentPage(pageNumber)
                this.props.setPageCount(resolve.data.info.pages)
            }).finally(this.props.setLoadingStatus('successes'))
    }

    openWindow = (id) => {
        setLoadingStatus('loading')
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(resolve => {
                this.props.setInformation({...resolve.data})
                this.props.setLoadingStatus('successes')
                this.props.setCharacterWindowOpened(true)
            } )
    }

    hideWindow = () =>  {
        this.props.setCharacterWindowOpened(false)
        setLoadingStatus('idle')
        this.props.setInformation({})
    }


    render() {
        return <>
            <Characters totalCharactersCount={this.props.totalCharactersCount}
                        currentPage={this.props.currentPage}
                        characters={this.props.characters}
                        onChangeNumber={this.onChangeNumber}
                        filterSpecies={this.filterSpecies}
                        filterStatus={this.filterStatus}
                        filterGender={this.filterGender}
                        pageCount={this.props.pageCount}
                        openWindow={this.openWindow}
                        hideWindow={this.hideWindow}
                        information={this.props.information}
                        // setInformation={this.props.setInformation}
                        characterWindowOpened={this.props.characterWindowOpened}
            />

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
        status: state.charactersPage.status,
        gender: state.charactersPage.gender,
        information: state.charactersPage.information,
        loadingStatus: state.charactersPage.loadingStatus,
        characterWindowOpened: state.charactersPage.characterWindowOpened
    }
}


const CharactersContainer = connect(mapStateToProps, {
    setCharacters,
    setCurrentPage,
    setPageCount,
    setSpecies,
    setStatus,
    setGender,
    setInformation,
    setLoadingStatus,
    setCharacterWindowOpened
})(CharactersFun)

export default CharactersContainer;