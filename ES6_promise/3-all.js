import { uploadPhoto } from "./utils.js";
import { createUser } from "./utils.js";


export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhoto, createUser]) => {
        console.log(`${uploadPhoto.body} ${createUser.firstName} ${createUser.lastName}`);
    })
    .catch(() => {
        console.log("Signup system offline");
    })
}
