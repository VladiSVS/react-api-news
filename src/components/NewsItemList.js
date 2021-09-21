import React, { Component } from 'react';

class NewsItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNews: [],
            tempAtoZ: true,
            tempDate: true,
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=93b404087ea643e5990b6b7401d61ed2')
            .then(response => response.json())
            .then(json => this.setState({ dataNews: json.articles }))
    }

    sortByNameAZ = () => {
        let temp = this.state.dataNews
        temp.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            } else {
                return -1
            }
        })
        this.setState({ dataNews: temp, tempAtoZ: false })
    }

    sortByNameZA = () => {
        let temp = this.state.dataNews
        temp.sort((a, b) => {
            if (a.title < b.title) {
                return 1
            } else {
                return -1
            }
        })
        this.setState({ dataNews: temp, tempAtoZ: true })
    }

    sortByDateNew = () => {
        let temp = this.state.dataNews
        temp.sort((a, b) => {
            if (a.publishedAt > b.publishedAt) {
                return 1
            } else {
                return -1
            }
        })
        this.setState({ dataNews: temp, tempDate: false })
    }

    sortByDateOld = () => {
        let temp = this.state.dataNews
        temp.sort((a, b) => {
            if (a.publishedAt < b.publishedAt) {
                return 1
            } else {
                return -1
            }
        })
        this.setState({ dataNews: temp, tempDate: true })
    }

    render() {
        return (
            <section>
                <div>
                    {this.state.tempAtoZ ? <input onClick={this.sortByNameAZ} type="button" value="Sort by Name A to Z" /> : <input onClick={this.sortByNameZA} type="button" value="Sort by Name Z to A" />}
                    {this.state.tempDate ? <input onClick={this.sortByDateNew} type="button" value="Sort by new date" /> : <input onClick={this.sortByDateOld} type="button" value="Sort by old date" />}

                </div>
                <div>
                    {this.state.dataNews.map((elt, i) => <article key={i}>
                        <img src={elt.urlToImage} alt=""></img>
                        <h1>{elt.title}</h1>
                        <p>{elt.description}</p>
                        <p>{elt.publishedAt}</p>
                        <a href={elt.url}>Read More</a>
                    </article>)}
                </div>
            </section>
        );
    }
}

export default NewsItemList;