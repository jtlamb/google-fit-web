import React from 'react';

export const blankUser = {
    authenticated: false,
    name: "",
    fname: "",
    lname: "",
    pfPic: "",
    email: "",
    accessToken: ""
};

export const createUser = (authenticated, name, fname, lname, pfPic, email, accessToken) => {
    const popUser = {
        authenticated: authenticated,
        name: name,
        fname: fname,
        lname: lname,
        pfPic: pfPic,
        email: email,
        accessToken: accessToken
    }
    return popUser;
}