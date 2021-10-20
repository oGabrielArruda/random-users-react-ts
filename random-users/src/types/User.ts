export default interface IUser {
    user: IUserItem,
}

export default interface IUserResponse {
    results: Array<IUserItem>,
    info: {
        seed: String,
        results: Number,
        page: Number,
        version: String
    }
}

interface IUserItem {
    gender: String,
    name: IName,
    location: ILocation
    email: String,
    login: ILogin,
    dob: IDob
    registered: IDob,
    phone: String,
    cell: String,
    picture: IPic
    nat: String
}

interface IName {
    title: String,
    first: String,
    last: String,
}

// Location
interface ILocation {
    street: IStreet,
    city: String,
    state: String,
    country: String,
    postcode: Number,
    coordinates: ICoordinates,
    timezone: ITimeZone,
}

interface IStreet {
    number: Number,
    name: String,
}

interface ICoordinates {
    latitude: String,
    longitude: String,
}

interface ITimeZone {
    offset: String,
    description: String
}


// Login
interface ILogin {
    uuid: String,
    username: String,
    password: String,
    salt: String,
    md5: String,
    sha1: String,
    sha256: String
}

// Dob
interface IDob {
    date: String,
    age: Number
}

// Pic
interface IPic {
    large: String,
    medium: String,
    thumbnail: String
}