import React from 'react';
import axios from "axios";
import Characters from "./Characters";
import {connect} from "react-redux";
import {setCharacters, setCurrentPage} from "../../Redux/charactersReducer";


class CharactersFun extends React.Component {
    pageSize = 10
    pageCount = Math.ceil(this.props.totalCharactersCount / this.pageSize);
    filtredByStatus = []
    currentCharacters = []


    componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/character/?page=1`)
            .then(resolve => {
                this.currentCharacters = resolve.data.results
                this.props.setCharacters(this.currentCharacters.slice(0, 10))
                this.props.setCurrentPage(this.props.currentPage)
            })
    }

    filterSpecies = (e) => {
        if (e.currentTarget.value === 'Human') {
            this.props.setCharacters(this.currentCharacters.filter(c => c.species === 'Human'))
        } else if (e.currentTarget.value === 'Alien') {
            this.props.setCharacters(this.currentCharacters.filter(c => c.species === 'Alien'))
        } else if (e.currentTarget.value === 'Mythological Creature') {
            this.props.setCharacters(this.currentCharacters.filter(c => c.species === 'Mythological Creature'))
        } else {
            this.props.setCharacters(this.currentCharacters)
        }
    }
    filterStatus = (e) => {
        if (e.currentTarget.value === 'Alive') {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}&status=alive`)
                .then(resolve => {
                    this.filtredByStatus = resolve.data.results
                    this.props.setCharacters(this.filtredByStatus.slice(0, 10))
                    this.pageCount = resolve.data.info.pages*2
                })
        } else if (e.currentTarget.value === 'Dead') {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}&status=dead`)
                .then(resolve => {
                    this.filtredByStatus = resolve.data.results
                    this.props.setCharacters(this.filtredByStatus.slice(0, 10))
                })
        } else if (e.currentTarget.value === 'Unknown') {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}&status=unknown`)
                .then(resolve => {
                    this.filtredByStatus = resolve.data.results
                    this.props.setCharacters(this.filtredByStatus.slice(0, 10))
                })
        } else { axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}`)
                .then(resolve => {
                    this.props.setCharacters(this.currentCharacters.slice(0, 10))
                })
        }
    }
        // } else if (e.currentTarget.value === 'Dead') {
        //     this.props.setCharacters(this.currentCharacters.filter(c => c.status === 'Dead'))
        // } else if (e.currentTarget.value === 'Unknown') {
        //     this.props.setCharacters(this.currentCharacters.filter(c => c.status === 'Unknown'))
        // } else {
        //     this.props.setCharacters(this.currentCharacters)
        // }
    onChangeNumber = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        let page = Math.ceil(pageNumber / 2)
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(resolve => {
                if (pageNumber % 2 !== 0) {
                    this.currentCharacters = resolve.data.results.slice(0, 10)
                    this.props.setCharacters(this.currentCharacters)
                } else this.currentCharacters = resolve.data.results.slice(10, 20)
                this.props.setCharacters(this.currentCharacters)
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
                        pageCount={this.pageCount}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        characters: state.charactersPage.characters,
        totalCharactersCount: state.charactersPage.totalCharactersCount,
        currentPage: state.charactersPage.currentPage
    }
}


const CharactersContainer = connect(mapStateToProps, {
    setCharacters,
    setCurrentPage,
})(CharactersFun)

export default CharactersContainer;