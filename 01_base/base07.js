let pet = {
    type: 'スノーホワイトハムスター',
    name: 'キラ',
    description: {
        birth: '2014-02-15'
    }
};


let pet2 = {
    name: '山田きら',
    color: '白',
    description: {
        food: 'ヒマワリの種'
    }
};

let pet3 = {
    weight: 42,
    web: 'https://google.com'
};


Object.assign(pet, pet2, pet3);
console.log(pet)