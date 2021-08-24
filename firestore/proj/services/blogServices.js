
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const getCurrentUser = require("./userServices").getCurrentUser

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

let id = 0

async function insert(title, body, image, gid, displayName) {
    let user = getCurrentUser()
    let uid = null
    if (user == null) uid = gid
    else uid = user.uid
    const docRef = db.collection('blogs').doc(`${uid}`);
    const doc = await docRef.get();
    if (!doc.exists) {
        await docRef.set({
            name: user?.displayName || displayName,
            id: id++,
            blogArr: [{
                title,
                body,
                image
            }]
        });
    } else {
        const blogRes = await docRef.update({
            blogArr: admin.firestore.FieldValue.arrayUnion({
                title,
                body,
                image
            })
        });
    }

}

async function getAllBlogs() {
    const snapshot = await db.collection('blogs').get();
    let blogs = []
    snapshot.forEach((doc) => {
  //           console.log(doc.id, '=>', doc.data());
        blogs.push(doc.data())
    });
    return blogs
}


async function getBlogs(gid) {
    let user = getCurrentUser()
    let uid = null
    if (user == null) uid = gid
    else uid = user.uid
    const blogs = await db.collection('blogs').doc(`${uid}`).get();
    return blogs.data()
}


module.exports = {
    insert,
    getAllBlogs,
    getBlogs,
}