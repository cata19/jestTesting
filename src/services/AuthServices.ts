import { User, UserAttribute } from "../model/Model";


export class AuthService{

    public async login(userName: string, password: string):Promise<User | undefined> {
        if(userName === 'user' && password === '1234'){
            return{
                userName: userName,
                email: 'some@email.com'
            }
        } else {
            return undefined
        }
    }
    public async getUserAttributes(user: User):Promise<UserAttribute[]>{
        const result: UserAttribute[] = [];
        result.push({
            Name: 'DESCRIPTION',
            Value: 'Starting my PGP path'
        });
        result.push({
            Name: 'JOB',
            Value: 'QAE'
        });
        result.push({
            Name: 'AGE',
            Value: '26'
        });
        result.push({
            Name: 'EXPERIENCE',
            Value: '4 Years'
        });
        return result
    }
}