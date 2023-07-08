import React from 'react'
import profilePic from './img.jpg'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            timer: 0,
            interval: null,
            person: {
            fullname: 'Achraf Souilem',
            Bio: "student",
            profession: "Full-stack developer",
            imgSrc: profilePic
        }
        }
    }
        componentDidMount () {
            this.setState({
                interval: setInterval(() => {
                    this.setState({timer: this.state.timer + 1})
                }, 1000)
            })
        }
    render() {
        return (
        <div className='design'>
        <img style={{width: "200px"}} src= {this.state.person.imgSrc} alt="profile" />
        <h3>Name: {this.state.person.fullname}</h3>
        <h3>Bio: {this.state.person.Bio}</h3>
        <h3>Profession: {this.state.person.profession}</h3>
        <h3>timer: {this.state.timer} s</h3>
        </div>
        )
    }
}

export default Profile 