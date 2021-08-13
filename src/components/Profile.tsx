import React from 'react'
import {User, UserAttribute} from '../model/Model'
import {AuthService} from '../services/AuthServices'
import {Link} from 'react-router-dom'

interface ProfileState{
    userAttributes: UserAttribute[]
}
interface ProfileProps {
    user: User | undefined
    authService: AuthService
}

export class Profile extends React.Component<ProfileProps, ProfileState>{

    state: ProfileState = {
        userAttributes: []
    }

    async componentDidMount(){
        if (this.props.user){
            const userAtrs = await this.props.authService.getUserAttributes(this.props.user);
            this.setState({
                userAttributes: userAtrs
            })
        }
    }

    
    private renderUserAttributes(){
        const rows = []
        for (const userAttribute of this.state.userAttributes) {
            rows.push(<tr key={userAttribute.Name}>
                <td>{userAttribute.Name}</td>
                <td>{userAttribute.Value}</td>
            </tr>)

        }
        return <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    }
    
    render(){
        let profileSpace
        if(this.props.user){
            profileSpace = <div>
                <h3>Hello {this.props.user.userName}</h3>
                Here are your attribuites:
                {this.renderUserAttributes()}
            </div>
        } else{
            profileSpace = <div>
                Please <Link to='login'>Login</Link>
            </div>
        }

        return(
            <div>
                Welcome to the profile page!
                {profileSpace}
            </div>
        )
    }
}